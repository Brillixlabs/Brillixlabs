import { Resend } from 'resend';
import { type ContactFormData } from './validation';

// Hardcoded API key - replace with your actual Resend API key
const resend = new Resend('re_1234567890abcdef'); // Replace this with your actual API key

export const sendContactEmail = async (formData: ContactFormData) => {
  console.log('sendContactEmail called with:', formData);
  
  // For testing, just log the data and return success
  console.log('Email data that would be sent:', {
    from: 'noreply@brillixlabs.com',
    to: 'hello@brillixlabs.com',
    subject: `New Project Inquiry from ${formData.name}`,
    formData: formData
  });
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For now, just return success without actually sending email
  return { success: true, data: { id: 'test-email-id' } };
  
  /*
  try {
    const { data, error } = await resend.emails.send({
      from: 'noreply@brillixlabs.com',
      to: 'hello@brillixlabs.com',
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
  */
}; 