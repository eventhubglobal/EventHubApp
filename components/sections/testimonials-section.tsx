import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Adaora Chukwu',
      role: 'Bride',
      location: 'Lagos',
      content: 'Event Hub made planning my wedding so much easier! I found the most amazing caterer and photographer through the platform. The verification badges gave me confidence, and the escrow payment system made everything secure.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2&fit=crop&crop=face',
      event: 'Wedding - 200 guests'
    },
    {
      name: 'Tunde Adeleke',
      role: 'Corporate Event Manager',
      location: 'Abuja',
      content: 'As someone who organizes multiple corporate events monthly, Event Hub has become my go-to platform. The quality of vendors is consistently high, and the communication tools make coordination seamless.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2&fit=crop&crop=face',
      event: 'Product Launch - 500 guests'
    },
    {
      name: 'Fatima Ibrahim',
      role: 'Event Planner',
      location: 'Kano',
      content: 'The platform has revolutionized how I work with vendors. Being able to see real-time availability, verified reviews, and coordinate everything in one place has made my job so much more efficient.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2&fit=crop&crop=face',
      event: 'Birthday Party - 80 guests'
    },
    {
      name: 'Chidi Okafor',
      role: 'Groom',
      location: 'Port Harcourt',
      content: 'My wife and I were initially skeptical about using an online platform for our wedding vendors, but Event Hub exceeded our expectations. Every vendor we booked was professional and delivered exactly as promised.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2&fit=crop&crop=face',
      event: 'Traditional Wedding - 300 guests'
    },
    {
      name: 'Sarah Johnson',
      role: 'HR Manager',
      location: 'Lagos',
      content: 'For our company retreat, we needed reliable vendors on short notice. Event Hub\'s verified vendor network came through perfectly. The booking process was smooth and transparent throughout.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2&fit=crop&crop=face',
      event: 'Corporate Retreat - 150 employees'
    },
    {
      name: 'Emeka Nwosu',
      role: 'Father',
      location: 'Enugu',
      content: 'Planning my daughter\'s 16th birthday was stress-free thanks to Event Hub. The vendor proposals feature allowed us to compare options easily, and we found vendors within our budget who delivered amazing results.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2&fit=crop&crop=face',
      event: 'Sweet 16 Party - 120 guests'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied clients who have successfully planned their events using Event Hub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift border-0 shadow-md">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Event Type */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {testimonial.event}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-brand-blue">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24hrs</div>
              <div className="text-primary-foreground/80">Avg Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}