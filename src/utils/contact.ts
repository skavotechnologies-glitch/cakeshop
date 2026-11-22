export const CONTACT_INFO = {
  phoneDisplay: '+91 98765 43210',
  phoneCallUrl: 'tel:+919876543210',
  whatsappNumber: '919876543210',
  email: 'hello@maisondecake.com',
  hours: 'Monday – Saturday: 9:00 AM – 8:00 PM',
  address: 'Atelier Maison, Bandra West, Mumbai / Chilled White-Glove Delivery Across City',
};

export const getWhatsAppLink = (
  cakeName?: string,
  weight?: string,
  customMessage?: string,
  occasion?: string
): string => {
  const base = `https://wa.me/${CONTACT_INFO.whatsappNumber}`;
  let text = 'Hello Maison de Cake! 🎂 I would like to order a handcrafted cake.';

  if (cakeName) {
    text = `Hello Maison de Cake! 🎂\n\nI would like to order the *${cakeName}*`;
    if (weight) text += `\n• Size / Weight: ${weight}`;
    if (customMessage) text += `\n• Hand-Piped Plaque Message: "${customMessage}"`;
    if (occasion) text += `\n• Occasion: ${occasion}`;
    text += '\n\nPlease let me know the earliest delivery slot and payment details. Thank you!';
  }

  return `${base}?text=${encodeURIComponent(text)}`;
};
