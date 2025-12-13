# 🌊 MoonWave Records - Label de Musique Professionnel

Site web moderne et immersif pour MoonWave Records avec backend Node.js pour la gestion des formulaires.

## 🚀 Installation

### 1. Installer les dépendances

```bash
npm install
```

### 2. Configuration de l'envoi d'emails

Créez un fichier `.env` à la racine du projet en copiant `.env.example` :

```bash
cp .env.example .env
```

Puis configurez vos identifiants SMTP dans le fichier `.env` :

```env
# Configuration du serveur
PORT=3001

# Configuration SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre.email@gmail.com
SMTP_PASS=votre_mot_de_passe_application

# Email de destination
CONTACT_EMAIL=contact@fabienmanuelcapelli.com
```

### 3. Configuration Gmail (Recommandé)

Si vous utilisez Gmail, vous devez créer un **mot de passe d'application** :

1. Allez sur [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Connectez-vous avec votre compte Gmail
3. Sélectionnez "Autre (nom personnalisé)" et entrez "MoonWave Records"
4. Cliquez sur "Générer"
5. Copiez le mot de passe généré (16 caractères) dans `SMTP_PASS`

**Note :** Pour créer un mot de passe d'application, vous devez avoir activé la validation en deux étapes sur votre compte Google.

### 4. Autres services SMTP supportés

Vous pouvez aussi utiliser d'autres services :

**SendGrid :**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=votre_api_key_sendgrid
```

**Mailgun :**
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@votre-domaine.mailgun.org
SMTP_PASS=votre_password_mailgun
```

**OVH :**
```env
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=587
SMTP_USER=votre@email.com
SMTP_PASS=votre_mot_de_passe
```

## 🎯 Démarrage

### Développement

**Terminal 1 - Frontend (Vite) :**
```bash
npm run dev
```
Le frontend sera accessible sur `http://localhost:5173`

**Terminal 2 - Backend (Node.js) :**
```bash
npm run server
```
Le backend API sera accessible sur `http://localhost:3001`

**Alternative avec Nodemon (auto-reload) :**
```bash
npm run server:dev
```

### Production

**1. Build du frontend :**
```bash
npm run build
```

**2. Lancer le serveur backend :**
```bash
npm run server
```

## 📁 Structure du projet

```
moonwave-records/
├── components/           # Composants React
│   ├── DemoSubmission.tsx   # Formulaire soumission démo
│   ├── Contact.tsx          # Formulaire de contact
│   ├── Hero.tsx             # Section héro
│   ├── Services.tsx         # Services du label
│   └── ui/                  # Composants UI réutilisables
├── server.js            # Backend Node.js + API
├── .env                 # Configuration (à créer)
├── .env.example         # Exemple de configuration
├── package.json         # Dépendances
└── README.md           # Documentation
```

## 🔌 Endpoints API

### `GET /api/health`
Health check du serveur

**Réponse :**
```json
{
  "success": true,
  "message": "✅ MoonWave Records API - Server is running",
  "timestamp": "2025-12-13T..."
}
```

### `POST /api/demo`
Soumission d'une démo

**Body :**
```json
{
  "artistName": "John Doe",
  "email": "john@example.com",
  "phone": "+33612345678",
  "genre": "electronic",
  "package": "single",
  "extraMinutes": "2",
  "demoLink": "https://soundcloud.com/...",
  "socialLinks": "Instagram: ...\nSpotify: ...",
  "description": "Mon projet musical...",
  "estimatedCost": "50€"
}
```

**Réponse :**
```json
{
  "success": true,
  "message": "Démo envoyée avec succès!"
}
```

**Emails envoyés :**
- Email à l'équipe avec toutes les informations
- Email de confirmation à l'artiste

### `POST /api/contact`
Message de contact

**Body :**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Question sur les services",
  "message": "Bonjour, j'aimerais..."
}
```

**Réponse :**
```json
{
  "success": true,
  "message": "Message envoyé avec succès!"
}
```

**Emails envoyés :**
- Email à l'équipe avec le message
- Email de confirmation à l'expéditeur

## 🎨 Fonctionnalités

### ✅ Frontend
- Design futuriste et minimaliste (bleu nuit, violet, blanc)
- 100% responsive (mobile & desktop)
- Animations fluides avec Motion (Framer Motion)
- Formulaires avec validation
- Calcul automatique des coûts
- Newsletter Sendinblue intégrée

### ✅ Backend
- API REST avec Express
- Envoi d'emails avec Nodemailer
- Emails HTML stylisés
- Emails de confirmation automatiques
- Gestion des erreurs
- Validation des données
- CORS configuré

### 📦 Packages

**Single - 30€**
- Base 3 minutes
- +10€ par minute supplémentaire
- Mixage/Mastering + Distribution + Promotion + Visuels

**EP - 60€**
- Base 3 pistes
- +15€ par piste supplémentaire
- Mixage/Mastering + Distribution + Promotion + Visuels

**Album - 120€**
- Base 10 pistes
- +10€ par piste supplémentaire
- Mixage/Mastering + Distribution + Promotion + Visuels

**🎓 Réduction étudiants : -50% sur tous les packages**

## 🛠️ Technologies utilisées

- **Frontend :** React, TypeScript, Tailwind CSS, Vite, Motion
- **Backend :** Node.js, Express, Nodemailer
- **Formulaires :** API REST custom
- **Emails :** SMTP (Gmail, SendGrid, etc.)
- **Newsletter :** Sendinblue (iframe)

## 📝 Variables d'environnement

| Variable | Description | Exemple |
|----------|-------------|---------|
| `PORT` | Port du serveur backend | `3001` |
| `SMTP_HOST` | Serveur SMTP | `smtp.gmail.com` |
| `SMTP_PORT` | Port SMTP | `587` |
| `SMTP_USER` | Email expéditeur | `votre@email.com` |
| `SMTP_PASS` | Mot de passe SMTP | `xxxx xxxx xxxx xxxx` |
| `CONTACT_EMAIL` | Email de destination | `contact@fabienmanuelcapelli.com` |
| `NODE_ENV` | Environnement | `development` ou `production` |

## 🚨 Troubleshooting

### Erreur "ECONNREFUSED"
Le serveur backend n'est pas démarré. Lancez `npm run server` dans un terminal séparé.

### Erreur d'authentification SMTP
- Vérifiez que vous utilisez un mot de passe d'application (Gmail)
- Vérifiez vos identifiants SMTP
- Assurez-vous que la validation en deux étapes est activée (Gmail)

### Les emails ne sont pas reçus
- Vérifiez vos spams
- Vérifiez la configuration SMTP dans `.env`
- Regardez les logs du serveur backend

## 📄 Licence

© 2025 MoonWave Records - Tous droits réservés

## 👨‍💻 Développeur

Créé par Fabien Manuel Capelli
