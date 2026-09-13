import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Crea tu propia línea artesanal | Demo',
  description: 'Demo visual para presentar modalidades, precios e inscripción del taller Crea tu propia línea artesanal.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
