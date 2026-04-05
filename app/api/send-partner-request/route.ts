import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const FORM_SERVICE_URL = process.env.FORM_SERVICE_URL || 'https://mission-control.vars-development.com/api/forms';

function persistPartnerForm(payload: object) {
  try {
    fetch(`${FORM_SERVICE_URL}/partner`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
    }).catch(() => {});
  } catch (_) {}
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, partnerType, message } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Telefon sind erforderlich.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse.' },
        { status: 400 }
      );
    }

    persistPartnerForm({ name, email, phone, company, partnerType, message });

    const emailSubject = '🤝 PARTNERSCHAFT – Neue Anfrage über taskeyapp.com';

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">🤝 Neue Partnerschaftsanfrage</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${name}</p>
          ${company ? `<p style="margin: 10px 0;"><strong>🏢 Unternehmen:</strong> ${company}</p>` : ''}
          <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>📱 Telefon:</strong> ${phone}</p>
        </div>
        <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1e3a8a;">
          <h3 style="color: #1e3a8a; margin-top: 0;">Partnerschaftsdetails:</h3>
          ${partnerType ? `<p style="margin: 8px 0;"><strong>Partnerschaftsmodell:</strong> ${partnerType}</p>` : ''}
          ${message ? `<p style="margin: 8px 0;"><strong>Nachricht:</strong> ${message}</p>` : ''}
        </div>
        <p style="color: #6b7280; font-size: 14px;">
          Über: Taskey Website – Partnerschaftsanfrage<br>
          Zeitstempel: ${new Date().toLocaleString('de-DE')}
        </p>
      </div>
    `;

    const emailText = `
🤝 PARTNERSCHAFT – Neue Anfrage

👤 Name: ${name}
${company ? `🏢 Unternehmen: ${company}` : ''}
📧 Email: ${email}
📱 Telefon: ${phone}

Partnerschaftsmodell: ${partnerType || '–'}
Nachricht: ${message || '–'}

Über: Taskey Website – Partnerschaftsanfrage
Zeitstempel: ${new Date().toLocaleString('de-DE')}
    `;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'finolino9@gmail.com',
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: 'finolino9@gmail.com',
      to: 'fynnschulzonline@gmail.com',
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json(
      { success: true, message: 'Partnerschaftsanfrage erfolgreich gesendet!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Error sending partner email:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}
