'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { WaitlistModal } from '@/components/ui/waitlist-modal';
import { 
  Search, 
  BarChart3, 
  MessageSquare
} from 'lucide-react';

export function FutureSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Search,
      title: 'Smart Matching',
      description: 'A data-driven vendor matching that connects clients with the right pre-vetted vendors, who are perfect for your event.',
      color: 'bg-blue-100 text-blue-900'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboards for clients and vendors to track bookings, payments, and performance metrics.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MessageSquare,
      title: 'Seamless Communication',
      description: 'Integrated messaging, chat, and collaboration tools to ensure a smooth and efficient event planning process for everyone.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            The Future of Event Management is Here!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Streamline your events from concept to completion. Connect clients with top-tier vendors, arrange bookings effortlessly, and create unforgettable experiences with our revolutionary platform.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold h-14 px-8" 
            onClick={() => setIsModalOpen(true)}
          >
            Join Waitlist
          </Button>
          <p className="text-sm text-gray-500 mt-4">Ready to start connecting? Get the free app.</p>
        </div>

        <div className="bg-blue-50 py-16 rounded-3xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
