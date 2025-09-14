import { 
  Palette, 
  UtensilsCrossed, 
  Camera, 
  Sparkles,
  Scissors,
  Cake,
  Music,
  Baby,
  Tent,
  Shirt
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
      name: 'Caterers',
      icon: UtensilsCrossed,
      vendorCount: '120+',
      color: 'bg-orange-100 text-orange-600',
      href: '/vendors?category=catering',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Photographers',
      icon: Camera,
      vendorCount: '120+',
      color: 'bg-brand-blue-light/20 text-brand-blue',
      href: '/vendors?category=photography',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Make Up Artists',
      icon: Sparkles,
      vendorCount: '120+',
      color: 'bg-purple-100 text-purple-600',
      href: '/vendors?category=makeup',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Stylists',
      icon: Scissors,
      vendorCount: '120+',
      color: 'bg-green-100 text-green-600',
      href: '/vendors?category=stylists',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Cake Vendors',
      icon: Cake,
      vendorCount: '120+',
      color: 'bg-brand-yellow-light/20 text-brand-yellow',
      href: '/vendors?category=cakes',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'DJ/Entertainment',
      icon: Music,
      vendorCount: '120+',
      color: 'bg-indigo-100 text-indigo-600',
      href: '/vendors?category=entertainment',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Hair Stylists',
      icon: Scissors,
      vendorCount: '120+',
      color: 'bg-rose-100 text-rose-600',
      href: '/vendors?category=hair',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Rentals',
      icon: Tent,
      vendorCount: '120+',
      color: 'bg-teal-100 text-teal-600',
      href: '/vendors?category=rentals',
      image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Kids Fun Times',
      icon: Baby,
      vendorCount: '120+',
      color: 'bg-amber-100 text-amber-600',
      href: '/vendors?category=kids',
      image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Drinks',
      icon: UtensilsCrossed,
      vendorCount: '120+',
      color: 'bg-cyan-100 text-cyan-600',
      href: '/vendors?category=drinks',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      name: 'Fashion',
      icon: Shirt,
      vendorCount: '120+',
      color: 'bg-pink-100 text-pink-600',
      href: '/vendors?category=fashion',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
            Browse By Category
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group">
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
                  <h3 className="text-lg font-semibold text-brand-blue group-hover:text-brand-blue-hover transition-colors text-center">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}