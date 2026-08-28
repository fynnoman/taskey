import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Sendet das Kalkulator-Ergebnis per E-Mail. Kein externer Persistenz-Service,
 * keine Datenbank. Die E-Mail geht an das Taskey-Postfach (interner Empfang);
 * optional wird eine Kopie an die vom Nutzer eingegebene Adresse geschickt,
 * damit der Nutzer sein Ergebnis in der Inbox hat.
 *
 * Persistierte Daten: nur die eingegebene E-Mail-Adresse (im Mail-Header und
 * ggf. dem eigenen Postfach). Keine weiteren Felder werden gespeichert.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RECHNER_LABELS: Record<string, string> = {
  reinigungskosten: "Reinigungskosten-Rechner",
  stundenverrechnungssatz: "Stundenverrechnungssatz-Rechner",
  personalbedarf: "Personalbedarf-Rechner",
  lohnkosten: "Lohnkosten-Rechner",
  marge: "Marge-Rechner",
};

type Row = { label: string; value: string };

type Payload = {
  email?: unknown;
  rechnerType?: unknown;
  locale?: unknown;
  copyToUser?: unknown;
  rows?: unknown;
  headline?: unknown;
};

function isRow(value: unknown): value is Row {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as Row).label === "string" &&
    typeof (value as Row).value === "string"
  );
}

function safeString(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.slice(0, max);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Payload;

    const email = safeString(body.email, 200).trim();
    const rechnerType = safeString(body.rechnerType, 60);
    const locale = safeString(body.locale, 8) || "de";
    const headline = safeString(body.headline, 200);
    const copyToUser = body.copyToUser === true;

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    const rawRows = Array.isArray(body.rows) ? body.rows : [];
    const rows: Row[] = rawRows
      .filter(isRow)
      .slice(0, 40)
      .map((r) => ({
        label: safeString(r.label, 120),
        value: safeString(r.value, 120),
      }));

    const rechnerLabel =
      RECHNER_LABELS[rechnerType] ?? "Taskey Rechner";

    const rowsHtml = rows
      .map(
        (r) => `
          <tr>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color:#475569;">${escapeHtml(r.label)}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color:#0f172a; text-align:right; font-variant-numeric: tabular-nums;">${escapeHtml(r.value)}</td>
          </tr>`
      )
      .join("");

    const rowsText = rows
      .map((r) => `${r.label}: ${r.value}`)
      .join("\n");

    const subject = `📊 Kalkulation – ${rechnerLabel} (${email})`;

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #0f172a;">
        <h2 style="color:#1d4ed8; margin-bottom: 6px;">${escapeHtml(rechnerLabel)}</h2>
        ${headline ? `<p style="margin: 0 0 16px 0; color:#334155;">${escapeHtml(headline)}</p>` : ""}
        <table style="width:100%; border-collapse: collapse; margin-top: 12px; background:#ffffff; border-radius: 8px; overflow:hidden; border:1px solid #e2e8f0;">
          <tbody>${rowsHtml}</tbody>
        </table>
        <p style="margin-top: 24px; color:#475569; font-size: 14px;">
          Angefordert von: <strong>${escapeHtml(email)}</strong><br>
          Sprache: ${escapeHtml(locale)}<br>
          Rechner: <a href="https://www.taskeyapp.com/rechner" style="color:#1d4ed8;">taskeyapp.com/rechner</a>
        </p>
        <p style="color:#94a3b8; font-size:12px; margin-top:20px;">
          Diese E-Mail wurde über einen kostenlosen Rechner auf taskeyapp.com angefordert. Es werden keine weiteren Daten gespeichert.
        </p>
      </div>
    `;

    const textBody = `${rechnerLabel}\n${headline || ""}\n\n${rowsText}\n\nAngefordert von: ${email}\nSprache: ${locale}\nRechner: https://www.taskeyapp.com/rechner\n`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "finolino9@gmail.com",
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "finolino9@gmail.com",
      to: "fynn@taskeyapp.com",
      cc: copyToUser ? email : undefined,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json(
      { success: true, message: "E-Mail wurde versendet." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("❌ Error sending rechner email:", error);
    return NextResponse.json(
      { error: "Fehler beim Versand. Bitte später erneut versuchen." },
      { status: 500 }
    );
  }
}
