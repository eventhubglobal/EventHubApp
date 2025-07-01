'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  Calendar, 
  Shield, 
  MessageSquare, 
  User,
  Search,
  Bell
} from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Browse Vendors', href: '/vendors', icon: Search },
    { name: 'Post Request', href: '/post-request', icon: Calendar },
    { name: 'How It Works', href: '#how-it-works', icon: Shield },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
              <Calendar className="h-6 w-6" />
            </div>
            <span className="hidden font-bold text-2xl sm:inline-block text-gray-900">Event Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
              <Link href="/register">Join as Vendor</Link>
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-2xl text-gray-900">Event Hub</span>
                </Link>
                
                <nav className="flex flex-col space-y-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors font-medium p-3 rounded-lg hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <Button variant="ghost" className="justify-start text-gray-600 hover:text-gray-900" asChild>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      Join as Vendor
                    </Link>
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