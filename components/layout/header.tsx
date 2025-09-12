'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  Calendar
} from 'lucide-react';

interface HeaderProps {
  onWaitlistOpen: () => void;
}

export function Header({ onWaitlistOpen }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const actionItems: { name: string; href: string }[] = [];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/Logo.png"
              alt="EventHub Logo"
              width={150}
              height={50}
              className=""
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive 
                      ? 'text-brand-blue' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-brand-blue hover:bg-brand-blue-hover text-white" 
              onClick={onWaitlistOpen}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                <Link href="/" className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                  <Image
                    src="/images/Logo.png"
                    alt="EventHub Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                    priority
                  />
                </Link>
                
                <nav className="flex flex-col space-y-3">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`font-medium p-3 rounded-lg transition-colors ${
                          isActive 
                            ? 'text-brand-blue bg-brand-blue-light/10' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <Button 
                    className="bg-brand-blue hover:bg-brand-blue-hover text-white" 
                    onClick={() => {
                      onWaitlistOpen();
                      setIsOpen(false);
                    }}
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}