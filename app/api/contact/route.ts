import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const autoReplyTemplates = {
  en: {
    subject: 'Thank you for contacting LawSolutionsFC',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #001b3d;">Thank you for contacting LawSolutionsFC</h2>
        <p>Hello,</p>
        <p>We have received your inquiry and appreciate your interest in our legal intake services.</p>
        <p><strong>What happens next?</strong></p>
        <ul>
          <li>One of our intake specialists will review your information</li>
          <li>We will call you shortly to discuss your case</li>
          <li>We will connect you with a qualified attorney who can help</li>
        </ul>
        <p>If you need immediate assistance, please call us at <strong>(323) 880-4017</strong>.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="color: #666; font-size: 12px;">
          This is an automated response. Please do not reply to this email.<br />
          LawSolutionsFC is a legal marketing and intake service. We are not a law firm and do not provide legal advice.
        </p>
      </div>
    `,
  },
  es: {
    subject: 'Gracias por contactar a LawSolutionsFC',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #001b3d;">Gracias por contactar a LawSolutionsFC</h2>
        <p>Hola,</p>
        <p>Hemos recibido su consulta y apreciamos su interes en nuestros servicios de admision legal.</p>
        <p><strong>Que sigue?</strong></p>
        <ul>
          <li>Uno de nuestros especialistas revisara su informacion</li>
          <li>Lo llamaremos pronto para discutir su caso</li>
          <li>Lo conectaremos con un abogado calificado que pueda ayudarle</li>
        </ul>
        <p>Si necesita asistencia inmediata, por favor llamenos al <strong>(323) 880-4017</strong>.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="color: #666; font-size: 12px;">
          Esta es una respuesta automatica. Por favor no responda a este correo.<br />
          LawSolutionsFC es un servicio de marketing legal y admision. No somos un bufete de abogados y no brindamos asesoria legal.
        </p>
      </div>
    `,
  },
};

export async function POST(request: Request) {
  try {
    const { name, email, phone, description, website, language = 'es' } = await request.json();

    // Honeypot check - if website field is filled, it's likely a bot
    if (website && website.length > 0) {
      return NextResponse.json(
        { message: 'Form submitted successfully' },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Send notification to admin
    const adminEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'info@lawsolutionsfc.com',
      to: process.env.RESEND_TO_EMAIL || 'info@lawsolutionsfc.com',
      subject: 'New Lead Form Submission - LawSolutionsFC',
      html: `
        <h2>New Lead Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Description:</strong> ${description || 'Not provided'}</p>
        <p><strong>Language:</strong> ${language === 'es' ? 'Spanish' : 'English'}</p>
        <hr />
        <p><em>Submitted from LawSolutionsFC website</em></p>
      `,
    });

    if (adminEmail.error) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send auto-reply to user if email is provided
    if (email && email.length > 0) {
      const template = autoReplyTemplates[language as 'en' | 'es'] || autoReplyTemplates.en;
      
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'info@lawsolutionsfc.com',
        to: email,
        subject: template.subject,
        html: template.html,
      });
    }

    return NextResponse.json(
      { message: 'Form submitted successfully', data: adminEmail.data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
