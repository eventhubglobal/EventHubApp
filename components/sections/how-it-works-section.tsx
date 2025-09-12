import { 
  Search, 
  MessageSquare, 
  CreditCard, 
  CheckCircle,
  ArrowRight,
  FileText,
  Calendar
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Search & Discover',
      description: 'Browse categories, view vendor profiles, and check portfolios.',
      icon: Search,
      color: 'bg-brand-blue'
    },
    {
      number: '2',
      title: 'Connect & Chat',
      description: 'Message vendors, arrange a meeting, or get a quote for your event.',
      icon: MessageSquare,
      color: 'bg-orange-500'
    },
    {
      number: '3',
      title: 'Book Securely',
      description: 'Make payments, sign contracts, and manage your event delivery.',
      icon: CreditCard,
      color: 'bg-green-500'
    },
    {
      number: '4',
      title: 'Enjoy Your Event',
      description: 'Relax, your event is planned, vendors are booked, and ready to go.',
      icon: CheckCircle,
      color: 'bg-purple-500'
    }
  ];

  const alternativeFlow = [
    {
      number: '1',
      title: 'Post Your Request',
      description: 'Detail your event needs, budget, and preferences in a detailed service request.',
      icon: FileText,
      color: 'bg-pink-500'
    },
    {
      number: '2',
      title: 'Receive Proposals',
      description: 'Vendors will send you tailored proposals based on your requirements.',
      icon: MessageSquare,
      color: 'bg-green-500'
    },
    {
      number: '3',
      title: 'Compare & Choose',
      description: 'Review proposals, view vendor profiles, and select the best fit for your event.',
      icon: CheckCircle,
      color: 'bg-teal-500'
    },
    {
      number: '4',
      title: 'Book & Coordinate',
      description: 'Book your chosen vendor and coordinate through our platform.',
      icon: Calendar,
      color: 'bg-brand-yellow'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            EventHub - Your #1 Most Trusted Event Marketplace
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two simple ways to find and book the perfect vendors for your event.
          </p>
        </div>

        {/* Option 1: Browse Vendors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-brand-blue mb-2">
              Find Vendors Yourself
            </h3>
            <p className="text-gray-600">
              Browse our extensive list of trusted vendors on the marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="hover-lift border-0 shadow-md h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className={`w-16 h-16 ${step.color} rounded-full mx-auto mb-4 flex items-center justify-center relative`}>
                      <step.icon className="h-8 w-8 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-brand-blue">{step.number}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-brand-blue mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Option 2: Post Request */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              Let vendors come to you
            </h3>
            <p className="text-gray-600">
              Post your requirements and get tailored proposals from multiple vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alternativeFlow.map((step, index) => (
              <div key={index} className="relative">
                <Card className="hover-lift border-0 shadow-md h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className={`w-16 h-16 ${step.color} rounded-full mx-auto mb-4 flex items-center justify-center relative`}>
                      <step.icon className="h-8 w-8 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-brand-blue">{step.number}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-brand-blue mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < alternativeFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}