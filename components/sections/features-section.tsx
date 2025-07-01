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
      color: 'text-blue-600 bg-blue-50 border-blue-100'
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-gradient">Event Hub?</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover-lift border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${feature.color} border transition-all duration-300 group-hover:scale-110 mx-auto`}>
                    <feature.icon className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Trust Indicators */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center group text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
                  alt="Verified Vendors"
                  className="w-24 h-24 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">100% Verified</h3>
              <p className="text-gray-600">All vendors verified</p>
            </div>
            
            <div className="flex flex-col items-center group text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
                  alt="Secure Payments"
                  className="w-24 h-24 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Secure Payments</h3>
              <p className="text-gray-600">Protected transactions</p>
            </div>
            
            <div className="flex flex-col items-center group text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
                  alt="24/7 Support"
                  className="w-24 h-24 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}