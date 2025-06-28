import type { Metadata } from 'next';
import { RootLayoutProps } from '@/types/interfaces/root.types';

export const metadata: Metadata = {
  title: 'Next Tutorials',
  description: 'This is the Webapp for Next.js Tutorials...',
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
);

export default RootLayout;
