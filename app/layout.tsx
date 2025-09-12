import './globals.css';
import type { Metadata } from 'next';
import { Mooli, Raleway, Asul } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const mooli = Mooli({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mooli'
});

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway'
});

const asul = Asul({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-asul'
});

export const metadata: Metadata = {
  title: 'Event Hub - Nigeria\'s Trusted Vendor Marketplace',
  description: 'Discover, verify, and book trusted event vendors in Nigeria. From caterers to photographers, find reliable service providers for your events.',
  keywords: 'Nigeria, events, vendors, marketplace, catering, photography, decorators, wedding, party planning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mooli.variable} ${raleway.variable} ${asul.variable} font-raleway`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}