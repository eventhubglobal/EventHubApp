'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { WaitlistModal } from '@/components/ui/waitlist-modal';
import { 
  Camera,
  UtensilsCrossed,
  Palette,
  CheckCircle
} from 'lucide-react';

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-8 bg-gray-100 text-gray-700 border-gray-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                Nigeria's Most Trusted Marketplace
              </Badge>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-900 mb-8 leading-tight font-asul">
                The Future Of Event Management
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-raleway">
                Connect clients and vendors seamlessly. Plan, manage, and execute extraordinary events with our all-in-one platform.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-blue-900 hover:bg-blue-800 text-white font-semibold h-14 px-8"
                  onClick={() => setIsModalOpen(true)}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative">
                <img
                  src="/images/HeroImg.png"
                  alt="Event Setup"
                  className="w-full h-[510px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-blue-50 rounded-2xl p-4 shadow-lg border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Camera className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Photography</div>
                    <div className="text-sm text-gray-600">95+ vendors</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-[-20px] bg-pink-50 rounded-2xl p-4 shadow-lg border border-pink-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Palette className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Decorators</div>
                    <div className="text-sm text-gray-600">120+ vendors</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-yellow-50 rounded-2xl p-4 shadow-lg border border-yellow-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <UtensilsCrossed className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Catering</div>
                    <div className="text-sm text-gray-600">89+ vendors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}