import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, budget } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // If Resend API key is set, send real email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "APEX Enquiries <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL || "hello@apexdigital.com.au",
        subject: `New project enquiry from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px">
            <h2 style="color:#00E5FF">New Project Enquiry — APEX Digital</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#888;width:120px">Name</td><td style="padding:8px 0"><strong>${name}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px 0;color:#888">Phone</td><td style="padding:8px 0">${phone}</td></tr>` : ""}
              ${service ? `<tr><td style="padding:8px 0;color:#888">Service</td><td style="padding:8px 0">${service}</td></tr>` : ""}
              ${budget ? `<tr><td style="padding:8px 0;color:#888">Budget</td><td style="padding:8px 0">$${Number(budget).toLocaleString()}</td></tr>` : ""}
            </table>
            <div style="margin-top:20px;padding:16px;background:#f5f5f5;border-radius:8px">
              <strong>Message:</strong><br/><br/>
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </div>
        `,
      });
    }

    // Always log to console (visible in Vercel logs)
    console.log("NEW ENQUIRY:", { name, email, phone, service, budget, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Enquiry error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
