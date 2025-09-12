import { Shield, CreditCard, Users } from 'lucide-react';

export function TrustIndicatorsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <h3 className="text-2xl font-semibold text-brand-blue mb-4">100% Verified</h3>
            <p className="text-gray-600">All vendors verified</p>
          </div>
          
          <div className="flex flex-col items-center group text-center">
            <div className="relative mb-6">
              <img
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
                alt="Secure Payments"
                className="w-24 h-24 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                <CreditCard className="h-4 w-4 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-brand-blue mb-4">Secure Payments</h3>
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
            <h3 className="text-2xl font-semibold text-brand-blue mb-4">24/7 Support</h3>
            <p className="text-gray-600">Always here to help</p>
          </div>
        </div>
      </div>
    </section>
  );
}
