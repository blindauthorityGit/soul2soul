import nodemailer from "nodemailer";

function escapeHtml(str = "") {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(req) {
    try {
        const body = await req.json();

        const name = (body?.name || "").trim();
        const email = (body?.email || "").trim();
        const phone = (body?.phone || "").trim();
        const message = (body?.message || "").trim();

        if (!name || !email || !message) {
            return Response.json({ error: "Bitte alle Pflichtfelder ausfüllen." }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return Response.json({ error: "Bitte eine gültige E-Mail-Adresse eingeben." }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: String(process.env.SMTP_PORT) === "465",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const to = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;
        const from = process.env.CONTACT_SENDER_EMAIL || process.env.SMTP_USER;

        await transporter.sendMail({
            from: `"Website Kontaktformular" <${from}>`,
            to,
            replyTo: email,
            subject: `Neue Kontaktanfrage von ${name}`,
            text: `
Neue Kontaktanfrage

Name: ${name}
E-Mail: ${email}
Telefon: ${phone || "-"}
Nachricht:
${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2 style="margin-bottom: 16px;">Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone || "-")}</p>
          <p><strong>Nachricht:</strong></p>
          <p style="white-space: pre-line;">${escapeHtml(message)}</p>
        </div>
      `,
        });

        return Response.json({ ok: true });
    } catch (error) {
        console.error("CONTACT_API_ERROR", error);

        return Response.json({ error: "Serverfehler beim Senden der Nachricht." }, { status: 500 });
    }
}
