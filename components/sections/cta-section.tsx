import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Shield, Star } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
            Join thousands who trust Event Hub for their events.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold h-14 px-8" asChild>
              <Link href="/vendors">
                Browse Vendors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 font-semibold h-14 px-8" asChild>
              <Link href="/post-request">
                Post Request
              </Link>
            </Button>
          </div>

          {/* Visual Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  alt="Verified"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">100% Verified</h3>
              <p className="text-gray-400">All vendors verified</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  alt="Reviews"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Trusted Reviews</h3>
              <p className="text-gray-400">Genuine feedback</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  alt="Secure"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Booking</h3>
              <p className="text-gray-400">Protected payments</p>
            </div>
          </div>

          {/* For Vendors */}
          <div className="mt-20 pt-16 border-t border-gray-800">
            <h3 className="text-3xl font-bold mb-6">Are You a Service Provider?</h3>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join Nigeria's most trusted vendor marketplace.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold h-14 px-8" asChild>
              <Link href="/vendor-signup">
                Join as Vendor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}