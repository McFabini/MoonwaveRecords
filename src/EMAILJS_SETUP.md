# Configuration EmailJS pour MoonWave Records

Ce guide vous explique comment configurer EmailJS pour recevoir les emails des formulaires de contact et de soumission de démos.

## 📧 Étape 1 : Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (jusqu'à 200 emails/mois)
3. Confirmez votre adresse email

## 🔑 Étape 2 : Obtenir votre Public Key

1. Dans le dashboard EmailJS, allez dans **Account** → **General**
2. Copiez votre **Public Key** (ressemble à `abcdef123456`)
3. Gardez cette clé pour plus tard

## 📨 Étape 3 : Configurer votre service email

1. Allez dans **Email Services** → **Add New Service**
2. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
3. Suivez les instructions pour connecter votre email **contact@fabienmanuelcapelli.com**
4. Copiez le **Service ID** (ressemble à `service_abc123`)

## 📝 Étape 4 : Créer les templates d'emails

### Template 1 : Formulaire de Contact

1. Allez dans **Email Templates** → **Create New Template**
2. Nommez-le "Contact Form"
3. Configurez le template avec ces variables :

**Sujet :** Nouveau message de {{from_name}} - {{subject}}

**Contenu :**
```
Nouveau message reçu depuis le formulaire de contact

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis MoonWave Records
```

**To Email :** contact@fabienmanuelcapelli.com

4. Copiez le **Template ID** (ressemble à `template_xyz789`)

### Template 2 : Soumission de Démo

1. Créez un nouveau template "Demo Submission"
2. Configurez avec ces variables :

**Sujet :** Nouvelle démo soumise par {{artist_name}}

**Contenu :**
```
Nouvelle soumission de démo reçue

Artiste: {{artist_name}}
Email: {{from_email}}
Téléphone: {{phone}}
Genre: {{genre}}

Package souhaité: {{package}}
Informations supplémentaires: {{extra_info}}
Coût estimé: {{estimated_cost}}

Liens sociaux:
{{social_links}}

Description du projet:
{{description}}

Fichier démo: {{file_name}}

---
Envoyé depuis MoonWave Records - Demo Submission
```

**To Email :** contact@fabienmanuelcapelli.com

3. Copiez le **Template ID** (ressemble à `template_demo_xyz789`)

## 🔧 Étape 5 : Intégrer les clés dans le code

### Pour le formulaire de Contact (`/components/Contact.tsx`)

Remplacez les lignes 25-27 :

```typescript
const serviceId = 'VOTRE_SERVICE_ID'; // Ex: 'service_abc123'
const templateId = 'VOTRE_TEMPLATE_ID_CONTACT'; // Ex: 'template_xyz789'
const publicKey = 'VOTRE_PUBLIC_KEY'; // Ex: 'abcdef123456'
```

### Pour le formulaire de Démo (`/components/DemoSubmission.tsx`)

Remplacez les lignes 48-50 :

```typescript
const serviceId = 'VOTRE_SERVICE_ID'; // Ex: 'service_abc123'
const templateId = 'VOTRE_TEMPLATE_ID_DEMO'; // Ex: 'template_demo_xyz789'
const publicKey = 'VOTRE_PUBLIC_KEY'; // Ex: 'abcdef123456'
```

## ✅ Étape 6 : Tester l'envoi

1. Remplissez le formulaire de contact sur votre site
2. Cliquez sur "Envoyer le message"
3. Vérifiez que vous recevez l'email sur **contact@fabienmanuelcapelli.com**
4. Testez également le formulaire de démo

## 🎯 Variables disponibles

### Formulaire de Contact
- `from_name` : Nom de l'expéditeur
- `from_email` : Email de l'expéditeur
- `subject` : Sujet du message
- `message` : Contenu du message
- `to_email` : Email de destination (contact@fabienmanuelcapelli.com)

### Formulaire de Démo
- `artist_name` : Nom de l'artiste
- `from_email` : Email de l'artiste
- `phone` : Téléphone
- `genre` : Genre musical
- `package` : Package choisi (Single/EP/Album)
- `extra_info` : Minutes ou pistes supplémentaires
- `social_links` : Liens réseaux sociaux
- `description` : Description du projet
- `estimated_cost` : Coût estimé
- `file_name` : Nom du fichier démo
- `to_email` : Email de destination (contact@fabienmanuelcapelli.com)

## 📊 Limites du plan gratuit

- **200 emails/mois** gratuits
- Si vous dépassez, passez au plan payant (9€/mois pour 1000 emails)
- Historique des emails envoyés dans le dashboard

## 🔒 Sécurité

- Les clés API sont sécurisées côté client
- EmailJS gère l'authentification SMTP
- Aucun email n'est visible côté frontend
- Rate limiting automatique pour éviter le spam

## 🆘 Problèmes courants

**Erreur "Service not found"**
→ Vérifiez que votre Service ID est correct

**Erreur "Template not found"**
→ Vérifiez que votre Template ID correspond au template créé

**Emails non reçus**
→ Vérifiez vos spams et la configuration du service email

**Erreur CORS**
→ EmailJS gère automatiquement CORS, pas de configuration nécessaire

## 📞 Support

Pour toute question sur EmailJS :
- Documentation : [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support : [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Note :** N'oubliez pas de remplacer `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, et `YOUR_PUBLIC_KEY` par vos vraies clés EmailJS dans les fichiers Contact.tsx et DemoSubmission.tsx !
