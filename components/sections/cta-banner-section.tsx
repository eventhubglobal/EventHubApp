'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WaitlistModal } from '@/components/ui/waitlist-modal';

export function CTABannerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-48">
          <div className="bg-blue-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left Side - Text Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-asul leading-tight text-white">
                  Ready to Plan Your Perfect Event?
                </h2>
                <p className="text-base lg:text-lg mb-8 opacity-90 font-raleway text-white">
                  Join thousands who trust Event Hub for their events.
                </p>

                <h2 className="text-lg lg:text-xl font-bold mb-4 font-asul text-white">
                  Are You a Service Provider?
                </h2>
                <p className="text-sm lg:text-base mb-8 opacity-90 font-raleway text-white">
                  Join Nigeria&apos;s most trusted vendor marketplace.
                </p>

                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 py-6 rounded-md w-[300px]"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative h-80 lg:h-full">
                <img
                  src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Happy people at an event"
                  className="w-full h-full object-cover"
                />
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
    </>
  );
}
