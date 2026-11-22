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

export const getHallBookingWhatsAppLink = (
  packageTitle?: string,
  guestCount?: string,
  date?: string,
  timeSlot?: string,
  cakeChoice?: string,
  birthdayPerson?: string
): string => {
  const base = `https://wa.me/${CONTACT_INFO.whatsappNumber}`;
  let text = 'Hello Maison de Cake! 🏛️🎂 I would like to inquire about booking your Private Celebration Hall for a Birthday Party.';

  if (packageTitle) {
    text = `Hello Maison de Cake! 🏛️🎂\n\nI would like to book the *Private Celebration Hall*:\n• Package: *${packageTitle}*`;
    if (guestCount) text += `\n• Guests Expected: ${guestCount}`;
    if (birthdayPerson) text += `\n• Birthday Star: ${birthdayPerson}`;
    if (date) text += `\n• Preferred Date: ${date}`;
    if (timeSlot) text += `\n• Time Slot: ${timeSlot}`;
    if (cakeChoice) text += `\n• Included Celebration Cake: ${cakeChoice}`;
    text += '\n\nPlease let me know hall availability, decor options, and booking confirmation. Thank you!';
  }

  return `${base}?text=${encodeURIComponent(text)}`;
};
