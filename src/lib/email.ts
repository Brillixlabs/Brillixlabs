import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    const { data, error } = await resend.emails.send({
      from: import.meta.env.VITE_FROM_EMAIL || 'noreply@brillixlabs.com',
      to: import.meta.env.VITE_TO_EMAIL || 'hello@brillixlabs.com',
      subject: `New Project Inquiry from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Project Inquiry</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Project Type:</strong> ${formData.projectType}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            This email was sent from the Brillix Labs contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to send email');
  }
}; 