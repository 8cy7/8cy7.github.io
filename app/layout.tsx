import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Abdulaziz Alfahad — Software Engineer',
  description: 'I build digital products, solve real problems, and turn ideas into reality. Abdulaziz Alfahad, software engineer in Riyadh, Saudi Arabia.',
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
