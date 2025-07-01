import { Star, Shield, CheckCircle, Clock, MapPin, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Vendor {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  image: string;
  badges: string[];
  description: string;
  availability: string;
  responseTime: string;
}

interface VendorCardProps {
  vendor: Vendor;
}

export function VendorCard({ vendor }: VendorCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case 'Verified':
        return 'badge-verified';
      case 'Top Rated':
        return 'badge-top-rated';
      case 'Trusted':
        return 'badge-trusted';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'Verified':
        return <Shield className="h-3 w-3" />;
      case 'Top Rated':
        return <Star className="h-3 w-3" />;
      case 'Trusted':
        return <CheckCircle className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <Card className="hover-lift border-0 shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {vendor.badges.map((badge, index) => (
            <Badge key={index} className={`${getBadgeStyle(badge)} text-xs`}>
              {getBadgeIcon(badge)}
              {badge}
            </Badge>
          ))}
        </div>
        <div className="absolute top-3 right-3">
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            vendor.availability === 'Available' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-orange-100 text-orange-800'
          }`}>
            {vendor.availability}
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">{vendor.name}</h3>
            <p className="text-sm text-gray-600">{vendor.category}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{vendor.rating}</span>
            </div>
            <p className="text-xs text-gray-500">({vendor.reviewCount} reviews)</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {vendor.description}
        </p>

        <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {vendor.location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Responds in {vendor.responseTime}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-lg font-bold text-gray-900">{formatPrice(vendor.startingPrice)}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/vendors/${vendor.id}`}>
                View Profile
              </Link>
            </Button>
            <Button size="sm">
              <MessageSquare className="h-4 w-4 mr-1" />
              Chat
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}