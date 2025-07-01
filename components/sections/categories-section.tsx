import Link from 'next/link';
import { 
  Palette, 
  UtensilsCrossed, 
  Camera, 
  Music,
  Users,
  Car,
  Shirt,
  Gift,
  Mic,
  Lightbulb,
  Baby,
  Shield
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function CategoriesSection() {
  const categories = [
    {
      name: 'Decorators',
      icon: Palette,
      vendorCount: '120+',
      color: 'bg-pink-100 text-pink-600',
      href: '/vendors?category=decorators',
      image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Catering',
      icon: UtensilsCrossed,
      vendorCount: '89+',
      color: 'bg-orange-100 text-orange-600',
      href: '/vendors?category=catering',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Photography',
      icon: Camera,
      vendorCount: '95+',
      color: 'bg-blue-100 text-blue-600',
      href: '/vendors?category=photography',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Entertainment',
      icon: Music,
      vendorCount: '67+',
      color: 'bg-purple-100 text-purple-600',
      href: '/vendors?category=entertainment',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Planning',
      icon: Users,
      vendorCount: '43+',
      color: 'bg-green-100 text-green-600',
      href: '/vendors?category=planning',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Transport',
      icon: Car,
      vendorCount: '38+',
      color: 'bg-indigo-100 text-indigo-600',
      href: '/vendors?category=transport',
      image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Fashion',
      icon: Shirt,
      vendorCount: '72+',
      color: 'bg-rose-100 text-rose-600',
      href: '/vendors?category=fashion',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'MCs & Hosts',
      icon: Mic,
      vendorCount: '54+',
      color: 'bg-yellow-100 text-yellow-600',
      href: '/vendors?category=mc',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Browse by <span className="text-gradient">Category</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <Card className="hover-lift border border-gray-200 shadow-sm group-hover:shadow-lg transition-all duration-300 bg-white overflow-hidden">
                <div className="relative h-32">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs bg-white/90 text-gray-700">
                      {category.vendorCount}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors text-center">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Event Types with Images */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Popular <span className="text-gradient">Events</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Weddings', count: '2,500+', image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2' },
              { name: 'Corporate', count: '1,200+', image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2' },
              { name: 'Birthdays', count: '3,100+', image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2' },
              { name: 'Baby Showers', count: '800+', image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2' },
              { name: 'Anniversaries', count: '650+', image: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2' }
            ].map((type, index) => (
              <Card key={index} className="hover-lift border border-gray-200 shadow-sm group cursor-pointer bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-24">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{type.name}</h4>
                  <p className="text-gray-600 text-xs">{type.count} events</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}