import { CheckCircle, User, Store } from 'lucide-react';

export function BuiltForEveryoneSection() {
  const clientFeatures = [
    'Real-time collaboration',
    'Access Vendors profile',
    'Calendar management',
    'Post requests',
    'Compare bid requests',
    'Review & rating system',
    'And lots more'
  ];

  const vendorFeatures = [
    'Professional vendor profile',
    'Lead generation system',
    'Quote & proposal tools',
    'Calendar management',
    'Performance analytics',
    'Review & rating system',
    'And lots more'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 font-asul">
            Built For Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-raleway">
            Whether you are booking events or providing services, we have got you covered.
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Clients Column */}
            <div className="relative">
              <div className="bg-white rounded-2xl border-2 border-blue-900 p-6 shadow-sm overflow-hidden">
                <div className="relative mb-6 -m-6 -mt-6">
                  <img
                    src="/images/image001.png"
                    alt="Happy clients celebrating"
                    className="w-full h-80 object-cover rounded-t-2xl"
                  />
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-blue-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 font-asul">Clients</h3>
                </div>
                
                <p className="text-base text-gray-600 mb-6 font-raleway text-center">
                  Streamline your entire event booking process with our comprehensive suite of tools.
                </p>
                
                <ul className="space-y-2 flex flex-col items-center">
                  {clientFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-900 flex-shrink-0" />
                      <span className="text-gray-700 font-raleway text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vendors Column */}
            <div className="relative">
              <div className="bg-white rounded-2xl border-2 border-blue-900 p-6 shadow-sm overflow-hidden">
                <div className="relative mb-6 -m-6 -mt-6">
                  <img
                    src="/images/image002.png"
                    alt="Professional vendor working"
                    className="w-full h-80 object-cover rounded-t-2xl"
                  />
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Store className="h-5 w-5 text-blue-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 font-asul">Vendors</h3>
                </div>
                
                <p className="text-base text-gray-600 mb-6 font-raleway text-center">
                  Grow your business and connect with more clients through our vendor network.
                </p>
                
                <ul className="space-y-2 flex flex-col items-center">
                  {vendorFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-900 flex-shrink-0" />
                      <span className="text-gray-700 font-raleway text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
