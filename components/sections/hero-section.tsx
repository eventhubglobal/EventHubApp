'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Shield, 
  Star, 
  Users, 
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  Play,
  Camera,
  UtensilsCrossed,
  Palette
} from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const stats = [
    { label: 'Verified Vendors', value: '500+', icon: Shield },
    { label: 'Events Completed', value: '2,000+', icon: Calendar },
    { label: 'Happy Clients', value: '5,000+', icon: Users },
    { label: 'Average Rating', value: '4.8★', icon: Star },
  ];

  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(17,24,39,0.05)_1px,transparent_0)] [background-size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-8 bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 animate-bounce-in">
                <CheckCircle className="h-3 w-3 mr-1" />
                Nigeria's Most Trusted Marketplace
              </Badge>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in">
                Find Amazing 
                <span className="block text-gradient mt-2">Event Vendors</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 max-w-2xl animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
                Discover verified vendors. Book with confidence.
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-12 max-w-2xl animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      placeholder="Search vendors..."
                      className="pl-12 border-gray-200 text-base h-14 bg-gray-50 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="relative sm:w-48">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      placeholder="Location"
                      className="pl-12 border-gray-200 text-base h-14 bg-gray-50 focus:bg-white transition-colors"
                    />
                  </div>
                  <Button size="lg" className="h-14 px-8 bg-gray-900 hover:bg-gray-800 text-white font-semibold">
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.6s'}}>
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold h-14 px-8" asChild>
                  <Link href="/vendors">
                    <Users className="mr-2 h-5 w-5" />
                    Browse Vendors
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold h-14 px-8" asChild>
                  <Link href="/post-request">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.8s'}}>
              {/* Main Hero Image */}
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Event Setup"
                  className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Camera className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Photography</div>
                    <div className="text-sm text-gray-600">95+ vendors</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <UtensilsCrossed className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Catering</div>
                    <div className="text-sm text-gray-600">89+ vendors</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 animate-float" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Palette className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Decorators</div>
                    <div className="text-sm text-gray-600">120+ vendors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-24 pt-16 border-t border-gray-200 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                      <stat.icon className="h-8 w-8 text-gray-600 group-hover:text-gray-900" />
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}