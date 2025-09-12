import { 
  Shield, 
  CreditCard, 
  MessageSquare, 
  Calendar,
  CheckCircle,
  Star,
  FileText,
  Users
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Verified',
      description: 'All vendors verified',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Protected transactions',
      color: 'text-blue-900 bg-blue-50 border-blue-100'
    },
    {
      icon: MessageSquare,
      title: 'Direct Chat',
      description: 'Instant communication',
      color: 'text-purple-600 bg-purple-50 border-purple-100'
    },
    {
      icon: Calendar,
      title: 'Real-Time Booking',
      description: 'Instant availability',
      color: 'text-pink-600 bg-pink-50 border-pink-100'
    },
    {
      icon: Star,
      title: 'Trusted Reviews',
      description: 'Verified feedback',
      color: 'text-amber-600 bg-amber-50 border-amber-100'
    },
    {
      icon: FileText,
      title: 'Service Requests',
      description: 'Get multiple quotes',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'Service assurance',
      color: 'text-teal-600 bg-teal-50 border-teal-100'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Always here to help',
      color: 'text-rose-600 bg-rose-50 border-rose-100'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Why Choose <span className="text-gradient">Event Hub?</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover-lift border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-4">
                <div className="mx-auto mb-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${feature.color} border transition-all duration-300 group-hover:scale-110 mx-auto`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}