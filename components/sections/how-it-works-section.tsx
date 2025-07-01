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
      description: 'Browse verified vendors by category, location, and budget. Read reviews and check portfolios.',
      icon: Search,
      color: 'bg-blue-500'
    },
    {
      number: '2',
      title: 'Connect & Chat',
      description: 'Message vendors directly, discuss requirements, and get customized quotes for your event.',
      icon: MessageSquare,
      color: 'bg-green-500'
    },
    {
      number: '3',
      title: 'Book Securely',
      description: 'Make secure payments through our escrow system. Your money is protected until service delivery.',
      icon: CreditCard,
      color: 'bg-purple-500'
    },
    {
      number: '4',
      title: 'Enjoy Your Event',
      description: 'Coordinate with vendors, track progress, and enjoy your perfectly executed event.',
      icon: CheckCircle,
      color: 'bg-orange-500'
    }
  ];

  const alternativeFlow = [
    {
      number: '1',
      title: 'Post Your Request',
      description: 'Describe your event needs, budget, and preferences in a detailed service request.',
      icon: FileText,
      color: 'bg-rose-500'
    },
    {
      number: '2',
      title: 'Receive Proposals',
      description: 'Verified vendors will send you customized proposals based on your requirements.',
      icon: MessageSquare,
      color: 'bg-indigo-500'
    },
    {
      number: '3',
      title: 'Compare & Choose',
      description: 'Review proposals, check vendor profiles, and select the best fit for your event.',
      icon: CheckCircle,
      color: 'bg-emerald-500'
    },
    {
      number: '4',
      title: 'Book & Coordinate',
      description: 'Book your chosen vendor and coordinate seamlessly through our platform.',
      icon: Calendar,
      color: 'bg-amber-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Event Hub Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two simple ways to find and book the perfect vendors for your event
          </p>
        </div>

        {/* Option 1: Browse Vendors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-lg px-4 py-2 mb-4">
              Option 1: Browse Vendors
            </Badge>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Find vendors yourself
            </h3>
            <p className="text-gray-600">
              Browse our marketplace and discover vendors that match your needs
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
                        <span className="text-sm font-bold text-gray-900">{step.number}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
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
            <Badge variant="outline" className="text-lg px-4 py-2 mb-4">
              Option 2: Post a Request
            </Badge>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Let vendors come to you
            </h3>
            <p className="text-gray-600">
              Post your requirements and receive tailored proposals from multiple vendors
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
                        <span className="text-sm font-bold text-gray-900">{step.number}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
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

        {/* Trust Indicators */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Verified Vendors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₦0</div>
              <div className="text-gray-600">Hidden Fees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}