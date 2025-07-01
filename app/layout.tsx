import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}