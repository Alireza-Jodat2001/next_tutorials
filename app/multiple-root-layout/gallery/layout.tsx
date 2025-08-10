import '@/styles/globals.css';
import type { Metadata } from 'next';
import { RootLayoutProps } from '@/types/interfaces/global.types';

export const metadata: Metadata = {
  title: 'Next Tutorials',
  description: 'This is the Webapp for Next.js Tutorials...',
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='en'>
    <body className='bg-black text-white'>{children}</body>
  </html>
);

export default RootLayout;
