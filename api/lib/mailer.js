import { Resend } from "resend";

export async function sendNotificationEmail({ name, email, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("ℹ️ RESEND_API_KEY is not set — email notification skipped (saved to MongoDB only).");
    return { skipped: true };
  }

  const resend = new Resend(apiKey);
  const recipient = process.env.NOTIFICATION_EMAIL || "thummarayush05@gmail.com";

  try {
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email,
      subject: `📬 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0b0f19; color: #f8fafc; border-radius: 12px; padding: 24px; border: 1px solid #1e293b;">
          <h2 style="color: #38bdf8; margin-top: 0; border-bottom: 1px solid #1e293b; padding-bottom: 14px; font-size: 20px;">
            🚀 New Portfolio Message
          </h2>
          <div style="margin: 18px 0;">
            <p style="margin: 6px 0 2px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Sender Name</p>
            <p style="margin: 0 0 14px 0; font-size: 16px; font-weight: 600; color: #ffffff;">${name}</p>
            
            <p style="margin: 6px 0 2px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Sender Email</p>
            <p style="margin: 0 0 14px 0; font-size: 15px; color: #38bdf8;">
              <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
            </p>

            <p style="margin: 6px 0 2px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <div style="background: #131d31; padding: 16px; border-radius: 8px; border-left: 4px solid #38bdf8; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #e2e8f0;">${message}</div>
          </div>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #1e293b; text-align: center;">
            <a href="mailto:${email}?subject=Re: Your message to Ayush Thummar" style="display: inline-block; background: #38bdf8; color: #0b0f19; padding: 11px 22px; border-radius: 6px; font-weight: 600; font-size: 14px; text-decoration: none;">
              Reply Directly to ${name} ✉️
            </a>
          </div>
          <p style="margin-top: 20px; font-size: 11px; color: #64748b; text-align: center;">
            Sent automatically from your portfolio backend at ayushthummar.vercel.app
          </p>
        </div>
      `,
    });
    console.log("✅ Email notification sent via Resend:", result);
    return { success: true, result };
  } catch (error) {
    console.error("❌ Failed to send email via Resend:", error.message);
    return { success: false, error: error.message };
  }
}
