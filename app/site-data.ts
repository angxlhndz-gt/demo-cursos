export const WORKSHOP = {
  name: 'Crea tu propia línea artesanal',
  tagline: 'Convierte tu creatividad en una marca propia.',
  description:
    'Aprende el proceso y conoce las opciones para tomar el taller de forma presencial u online.',
  inPerson: {
    price: 'Q1,200',
    schedule: '9:00 AM – 4:00 PM',
    includes: ['Jornada presencial', 'Kit de materiales', 'Diploma físico'],
  },
  online: {
    guatemalaPrice: 'Q550',
    internationalPrice: 'US$80',
    includes: ['Taller online', 'Diploma digital'],
    kit: 'Kit opcional: Q550 adicionales + envío',
  },
  requirements: [
    'Comprobante de pago',
    'Una fotografía de la alumna',
    'Nombre completo',
    'Nombre con el que aparece en redes sociales',
  ],
} as const;

// PLACEHOLDER: reemplazar únicamente este valor con el número definitivo,
// incluyendo código de país y sin espacios, guiones ni el signo +.
export const WHATSAPP_NUMBER = '50200000000';
export const WHATSAPP_IS_PLACEHOLDER = true;

export const WHATSAPP_MESSAGES = {
  inPerson: `Hola, me interesa el taller ${WORKSHOP.name} en modalidad presencial.`,
  online: `Hola, me interesa el taller ${WORKSHOP.name} en modalidad online.`,
} as const;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
