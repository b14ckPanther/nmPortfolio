import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const smtpHost = process.env.EMAIL_HOST || 'smtp.gmail.com'
const smtpPort = Number(process.env.EMAIL_PORT ?? 465)
const smtpUser = process.env.EMAIL_USER
const smtpPass = process.env.EMAIL_PASS
const contactRecipient = process.env.CONTACT_TO_EMAIL || 'nmcryptoinvest@gmail.com'
const fromAddress = process.env.EMAIL_FROM || smtpUser

const transporter =
  smtpUser && smtpPass
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for 587
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })
    : null

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!transporter || !fromAddress) {
      console.error('SMTP credentials not configured', {
        hasUser: !!smtpUser,
        hasPass: !!smtpPass,
        hasFrom: !!fromAddress,
      })
      return NextResponse.json(
        { 
          error: 'Email service is not configured. Please check environment variables.',
          details: process.env.NODE_ENV === 'development' 
            ? 'Make sure EMAIL_USER, EMAIL_PASS, and EMAIL_FROM are set in .env.local'
            : 'Make sure environment variables are set in Vercel dashboard'
        },
        { status: 500 }
      )
    }

    await transporter.sendMail({
      from: fromAddress,
      to: contactRecipient,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: [
        'New portfolio enquiry',
        '----------------------',
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#0f172a;padding:32px 0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="background:linear-gradient(135deg,#0ea5e9 0%,#2563eb 100%);border-radius:18px;padding:2px;">
                <tr>
                  <td style="background-color:#0f172a;border-radius:16px;padding:40px;color:#e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="text-align:center;padding-bottom:30px;">
                          <div style="display:inline-flex;align-items:center;border-radius:999px;border:1px solid rgba(14,165,233,0.35);padding:10px 20px;font-size:14px;letter-spacing:1px;text-transform:uppercase;color:#38bdf8;">New enquiry</div>
                          <h1 style="margin:18px 0 0;font-size:28px;color:#f8fafc;">Someone reached out via NM Portfolio</h1>
                          <p style="margin:12px 0 0;font-size:16px;color:#94a3b8;">Respond directly from this email or hit reply to continue the conversation.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color:rgba(15,23,42,0.65);border:1px solid rgba(148,163,184,0.25);border-radius:14px;padding:24px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="color:#e2e8f0;font-size:15px;">
                            <tr>
                              <td style="padding-bottom:18px;">
                                <strong style="display:block;font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#38bdf8;">From</strong>
                                <span style="font-size:18px;font-weight:600;color:#f8fafc;">${name}</span>
                                <div style="margin-top:4px;">
                                  <a href="mailto:${email}" style="color:#38bdf8;text-decoration:none;">${email}</a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong style="display:block;font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#a855f7;">Message</strong>
                                <div style="margin-top:10px;line-height:1.7;background:rgba(30,41,59,0.6);border-radius:12px;padding:18px;color:#e2e8f0;">
                                  ${message
                                    .split('\n')
                                    .map((line: string) => {
                                      const safe = line.replace(/</g, '&lt;').replace(/>/g, '&gt;')
                                      return `<p style="margin:0 0 10px;">${safe}</p>`
                                    })
                                    .join('')}
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:30px;text-align:center;font-size:13px;color:#64748b;">
                          <p style="margin:0;">You’re receiving this message because someone submitted the contact form on nmportfolio.</p>
                          <p style="margin:10px 0 0;">
                            <a href="mailto:${contactRecipient}" style="color:#38bdf8;text-decoration:none;">Reply to confirm receipt</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorDetails = error instanceof Error ? error.stack : String(error)
    
    return NextResponse.json(
      { 
        error: 'Failed to send message',
        details: process.env.NODE_ENV === 'development' ? errorDetails : 'Please try again later or contact directly via email.'
      },
      { status: 500 }
    )
  }
}
