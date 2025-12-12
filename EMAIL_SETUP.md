# Email Setup für Demo-Anfragen

## SMTP-Konfiguration mit Gmail

Um die automatische Email-Versendung für Demo-Anfragen einzurichten, folgen Sie diesen Schritten:

### 1. Gmail App-Passwort erstellen

1. Gehen Sie zu [Google Account Security](https://myaccount.google.com/security)
2. Aktivieren Sie die **2-Faktor-Authentifizierung** (falls noch nicht aktiviert)
3. Gehen Sie zu [App-Passwörter](https://myaccount.google.com/apppasswords)
4. Wählen Sie "Mail" als App und "Sonstiges" als Gerät
5. Geben Sie einen Namen ein (z.B. "Taskey Website")
6. Kopieren Sie das generierte 16-stellige Passwort

### 2. Umgebungsvariablen konfigurieren

Bearbeiten Sie die Datei `.env.local` und fügen Sie Ihre Daten ein:

```env
SMTP_USER=fynnschulzonline@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx  # Das 16-stellige App-Passwort
```

### 3. Development Server neu starten

```bash
npm run dev
```

### 4. Testen

1. Öffnen Sie http://localhost:3000
2. Klicken Sie auf "Demo buchen"
3. Füllen Sie das Formular aus
4. Klicken Sie auf "Demo anfragen"
5. Eine Email sollte an fynnschulzonline@gmail.com gesendet werden

## Alternative: Resend verwenden (empfohlen für Produktion)

Resend ist ein moderner Email-Service mit besserem Deliverability und einfacherer Konfiguration:

### 1. Resend Account erstellen

1. Melden Sie sich an: https://resend.com/signup
2. Kostenlos: 3.000 Emails/Monat
3. Gehen Sie zum Dashboard und erstellen Sie einen API-Key

### 2. Resend installieren

```bash
npm install resend
```

### 3. API Route aktualisieren

Kommentieren Sie in `/Users/fynnschulz/taskey3/app/api/send-demo-request/route.ts` den Nodemailer-Code aus und verwenden Sie stattdessen:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Taskey <noreply@yourdomain.com>',
  to: 'fynnschulzonline@gmail.com',
  subject: emailSubject,
  html: emailHtml,
});
```

### 4. Environment Variable setzen

```env
RESEND_API_KEY=re_your_api_key_here
```

## Troubleshooting

### "Authentication failed" Fehler
- Stellen Sie sicher, dass Sie ein App-Passwort verwenden, nicht Ihr normales Gmail-Passwort
- Überprüfen Sie, dass 2FA aktiviert ist

### Emails kommen nicht an
- Überprüfen Sie den Spam-Ordner
- Testen Sie mit verschiedenen Email-Adressen
- Verwenden Sie Resend für bessere Deliverability

### Development-Modus
- .env.local wird nur im Development-Modus geladen
- Für Produktion (Vercel) müssen Sie die Environment Variables in den Vercel-Einstellungen setzen

## Deployment auf Vercel

1. Gehen Sie zu Ihrem Vercel-Projekt
2. Klicken Sie auf "Settings" → "Environment Variables"
3. Fügen Sie hinzu:
   - `SMTP_USER` = fynnschulzonline@gmail.com
   - `SMTP_PASSWORD` = Ihr App-Passwort

4. Redeploy Ihr Projekt

## Sicherheitshinweise

⚠️ **WICHTIG:**
- Fügen Sie `.env.local` zu `.gitignore` hinzu (bereits erledigt)
- Commiten Sie niemals Passwörter oder API-Keys ins Repository
- Verwenden Sie für Produktion am besten Resend statt Gmail
