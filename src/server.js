import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration de nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true pour 465, false pour les autres ports
  auth: {
    user: process.env.SMTP_USER, // Votre email
    pass: process.env.SMTP_PASS, // Votre mot de passe d'application
  },
});

// Vérifier la connexion SMTP au démarrage
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Erreur de connexion SMTP:', error);
  } else {
    console.log('✅ Serveur SMTP prêt à envoyer des emails');
  }
});

// Route pour la soumission de démo
app.post('/api/demo', async (req, res) => {
  try {
    const {
      artistName,
      email,
      phone,
      genre,
      customGenre,
      package: packageType,
      extraMinutes,
      demoLink,
      socialLinks,
      description,
      estimatedCost,
    } = req.body;

    // Validation basique
    if (!artistName || !email || !description) {
      return res.status(400).json({
        success: false,
        message: 'Champs requis manquants',
      });
    }

    // Construction du contenu de l'email
    const mailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          🎵 Nouvelle Soumission de Démo - MoonWave Records
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Informations de l'artiste</h3>
          <p><strong>Nom d'artiste:</strong> ${artistName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
          <p><strong>Genre musical:</strong> ${genre === 'autre' ? customGenre : genre}</p>
        </div>

        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Package souhaité</h3>
          <p><strong>Type:</strong> ${packageType?.toUpperCase()}</p>
          <p><strong>Infos supplémentaires:</strong> ${extraMinutes || '0'} ${packageType === 'single' ? 'minutes' : 'pistes'} supplémentaires</p>
          <p><strong>Coût estimé:</strong> <span style="color: #8b5cf6; font-size: 1.2em; font-weight: bold;">${estimatedCost}</span></p>
        </div>

        <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">🎧 Démo & Réseaux</h3>
          <p><strong>Lien démo:</strong> ${demoLink ? `<a href="${demoLink}" target="_blank" style="color: #6366f1;">${demoLink}</a>` : 'Non renseigné'}</p>
          <p><strong>Réseaux sociaux:</strong></p>
          <p style="white-space: pre-line;">${socialLinks || 'Non renseigné'}</p>
        </div>

        <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">💭 Description du projet</h3>
          <p style="white-space: pre-line;">${description}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 0.9em;">
          <p>Email reçu via MoonWave Records - ${new Date().toLocaleString('fr-FR')}</p>
        </div>
      </div>
    `;

    // Envoi de l'email
    const mailOptions = {
      from: `"MoonWave Records Demo" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'contact@fabienmanuelcapelli.com',
      replyTo: email,
      subject: `🎵 Nouvelle Démo - ${artistName} (${packageType?.toUpperCase()})`,
      html: mailContent,
    };

    await transporter.sendMail(mailOptions);

    // Email de confirmation à l'artiste
    const confirmationMail = {
      from: `"MoonWave Records" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '✅ Démo reçue - MoonWave Records',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Merci ${artistName} !</h2>
          <p>Nous avons bien reçu votre démo et votre soumission pour le package <strong>${packageType?.toUpperCase()}</strong>.</p>
          <p>Notre équipe A&R va écouter votre travail dans les prochains jours. Nous vous recontacterons sous 2-3 semaines si votre projet correspond à notre ligne artistique.</p>
          <p style="margin-top: 30px;">
            <strong>Coût estimé:</strong> ${estimatedCost}<br>
            <em>Ce montant est une estimation basée sur les informations fournies.</em>
          </p>
          <p style="margin-top: 30px; color: #64748b;">
            Musicalement,<br>
            <strong>L'équipe MoonWave Records</strong>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMail);

    res.json({
      success: true,
      message: 'Démo envoyée avec succès!',
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la démo:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi. Veuillez réessayer.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Route pour le formulaire de contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation basique
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Champs requis manquants',
      });
    }

    // Construction du contenu de l'email
    const mailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          📧 Nouveau Message de Contact - MoonWave Records
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Informations de contact</h3>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Sujet:</strong> ${subject || 'Non spécifié'}</p>
        </div>

        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
          <p style="white-space: pre-line;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 0.9em;">
          <p>Email reçu via MoonWave Records - ${new Date().toLocaleString('fr-FR')}</p>
        </div>
      </div>
    `;

    // Envoi de l'email
    const mailOptions = {
      from: `"MoonWave Records Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'contact@fabienmanuelcapelli.com',
      replyTo: email,
      subject: `📧 Contact: ${subject || name}`,
      html: mailContent,
    };

    await transporter.sendMail(mailOptions);

    // Email de confirmation
    const confirmationMail = {
      from: `"MoonWave Records" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '✅ Message reçu - MoonWave Records',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Merci ${name} !</h2>
          <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
          <p style="margin-top: 30px; color: #64748b;">
            Musicalement,<br>
            <strong>L'équipe MoonWave Records</strong>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMail);

    res.json({
      success: true,
      message: 'Message envoyé avec succès!',
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi. Veuillez réessayer.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Route de test
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: '✅ MoonWave Records API - Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`\n🌊 MoonWave Records API`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email: ${process.env.CONTACT_EMAIL || 'contact@fabienmanuelcapelli.com'}`);
  console.log(`\n📍 Endpoints disponibles:`);
  console.log(`   GET  /api/health - Health check`);
  console.log(`   POST /api/demo - Soumission de démo`);
  console.log(`   POST /api/contact - Formulaire de contact\n`);
});
