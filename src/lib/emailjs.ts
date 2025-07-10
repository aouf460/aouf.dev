import emailjs from '@emailjs/browser';

// EmailJS Configuration
// To use EmailJS:
// 1. Sign up at https://www.emailjs.com/
// 2. Create a service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the IDs below with your actual values
// 5. Add your public key

const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

export interface EmailData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.from_name,
        from_email: data.from_email,
        subject: data.subject,
        message: data.message,
        to_email: data.to_email,
      }
    );
    
    return result.status === 200;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};

// Fallback method using mailto for immediate functionality
export const sendEmailFallback = (data: EmailData): void => {
  const mailtoLink = `mailto:${data.to_email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
    `Name: ${data.from_name}\nEmail: ${data.from_email}\n\nMessage:\n${data.message}`
  )}`;
  
  window.location.href = mailtoLink;
};