import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Pour __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Configuration de multer pour le téléchargement de fichiers
const storage = multer.memoryStorage(); // Stockage en mémoire pour envoyer directement en pièce jointe

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50 MB max
  },
  fileFilter: (req, file, cb) => {
    // Accepter uniquement les fichiers audio
    const allowedTypes = ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/x-wav', 'audio/flac', 'audio/aac', 'audio/ogg'];
    if (allowedTypes.includes(file.mimetype) || file.originalname.match(/\.(mp3|wav|flac|aac|ogg|m4a)$/i)) {
      cb(null, true);
    } else {
      cb(new Error('Type de fichier non autorisé. Formats acceptés: MP3, WAV, FLAC, AAC, OGG, M4A'));
    }
  },
});

// Route pour la soumission de démo
app.post('/api/demo', upload.single('demoFile'), async (req, res) => {
  try {
    const {
      artistName,
      email,
      phone,
      genre,
      customGenre,
      package: packageType,
      extraMinutes,
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

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Fichier audio requis',
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

    // Ajouter la pièce jointe si un fichier a été uploadé
    if (req.file) {
      mailOptions.attachments = [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
        },
      ];
    }

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