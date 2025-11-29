import emailjs from '@emailjs/browser';

// Configuration EmailJS
// À remplacer par vos propres clés après configuration sur emailjs.com
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  productType: string;
  message: string;
  file?: File;
}

export const sendEmail = async (
  formData: ContactFormData,
  recaptchaToken: string
): Promise<{ success: boolean; message: string }> => {
  try {
    // Vérifier que les clés sont configurées
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      return {
        success: false,
        message: 'Configuration EmailJS manquante. Veuillez contacter l\'administrateur.',
      };
    }

    // Initialiser EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Préparer les données du template
    const templateParams: Record<string, string> = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone || 'Non fourni',
      product_type: formData.productType || 'Non spécifié',
      message: formData.message,
      'g-recaptcha-response': recaptchaToken,
    };

    // Si un fichier est présent, le convertir en base64
    if (formData.file) {
      const fileData = await fileToBase64(formData.file);
      templateParams.attachment = fileData;
      templateParams.file_name = formData.file.name;
      templateParams.file_size = formatFileSize(formData.file.size);
    }

    // Envoyer l'email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Votre message a été envoyé avec succès !',
      };
    } else {
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.',
    };
  }
};

// Convertir un fichier en base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Erreur lors de la conversion du fichier'));
      }
    };
    reader.onerror = (error) => reject(error);
  });
};

// Formater la taille du fichier
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};

