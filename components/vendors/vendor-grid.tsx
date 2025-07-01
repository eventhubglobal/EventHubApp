'use client';

import { VendorCard } from './vendor-card';

// Mock vendor data - in a real app, this would come from an API
const mockVendors = [
  {
    id: '1',
    name: 'Luxury Catering Co.',
    category: 'Catering Services',
    location: 'Lagos',
    rating: 4.9,
    reviewCount: 127,
    startingPrice: 50000,
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    badges: ['Verified', 'Top Rated', 'Trusted'],
    description: 'Premium catering services for weddings and corporate events with international cuisine.',
    availability: 'Available',
    responseTime: '2 hours'
  },
  {
    id: '2',
    name: 'Picture Perfect Studio',
    category: 'Photography & Video',
    location: 'Abuja',
    rating: 4.8,
    reviewCount: 89,
    startingPrice: 75000,
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    badges: ['Verified', 'Trusted'],
    description: 'Professional wedding and event photography with cinematic videography services.',
    availability: 'Available',
    responseTime: '1 hour'
  },
  {
    id: '3',
    name: 'Royal Decorators',
    category: 'Event Decorators',
    location: 'Lagos',
    rating: 4.7,
    reviewCount: 156,
    startingPrice: 80000,
    image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    badges: ['Verified', 'Top Rated'],
    description: 'Elegant event decoration and floral arrangements for all types of celebrations.',
    availability: 'Busy until Feb 15',
    responseTime: '4 hours'
  },
  {
    id: '4',
    name: 'Soundwave Entertainment',
    category: 'DJs & Entertainment',
    location: 'Port Harcourt',
    rating: 4.6,
    reviewCount: 73,
    startingPrice: 35000,
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    badges: ['Verified'],
    description: 'Professional DJ services with state-of-the-art sound equipment and lighting.',
    availability: 'Available',
    responseTime: '3 hours'
  },
  {
    id: '5',
    name: 'Elite Event Planners',
    category: 'Event Planners',
    location: 'Lagos',
    rating: 4.9,
    reviewCount: 201,
    startingPrice: 150000,
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    badges: ['Verified', 'Top Rated', 'Trusted'],
    description: 'Full-service event planning and coordination for luxury weddings and corporate events.',
    availability: 'Available',
    responseTime: '30 minutes'
  },
  {
    id: '6',
    name: 'Glamour Beauty Studio',
    category: 'Fashion & Styling',
    location: 'Abuja',
    rating: 4.8,
    reviewCount: 94,
    startingPrice: 25000,
    image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    badges: ['Verified', 'Trusted'],
    description: 'Professional makeup and styling services for brides and special events.',
    availability: 'Available',
    responseTime: '1 hour'
  },
  {
    id: '7',
    name: 'Master of Ceremonies',
    category: 'MCs & Hosts',
    location: 'Lagos',
    rating: 4.7,
    reviewCount: 112,
    startingPrice: 40000,
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    badges: ['Verified', 'Top Rated'],
    description: 'Experienced MC and event host for weddings, corporate events, and celebrations.',
    availability: 'Available',
    responseTime: '2 hours'
  },
  {
    id: '8',
    name: 'Premium Transport Services',
    category: 'Transportation',
    location: 'Lagos',
    rating: 4.5,
    reviewCount: 67,
    startingPrice: 30000,
    image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    badges: ['Verified'],
    description: 'Luxury car rentals and transportation services for weddings and special events.',
    availability: 'Available',
    responseTime: '2 hours'
  }
];

interface VendorGridProps {
  searchQuery: string;
  filters: {
    category: string;
    location: string;
    priceRange: string;
    rating: string;
    verified: boolean;
  };
}

export function VendorGrid({ searchQuery, filters }: VendorGridProps) {
  // Filter vendors based on search and filters
  const filteredVendors = mockVendors.filter((vendor) => {
    // Search query filter
    if (searchQuery && !vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !vendor.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !vendor.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Category filter
    if (filters.category && vendor.category !== filters.category) {
      return false;
    }

    // Location filter
    if (filters.location && vendor.location !== filters.location) {
      return false;
    }

    // Rating filter
    if (filters.rating && vendor.rating < parseFloat(filters.rating)) {
      return false;
    }

    // Verified filter
    if (filters.verified && !vendor.badges.includes('Verified')) {
      return false;
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(p => p.replace('+', ''));
      const minPrice = parseInt(min);
      const maxPrice = max ? parseInt(max) : Infinity;
      
      if (vendor.startingPrice < minPrice || vendor.startingPrice > maxPrice) {
        return false;
      }
    }

    return true;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          {filteredVendors.length} vendor{filteredVendors.length !== 1 ? 's' : ''} found
        </p>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Relevance</option>
          <option>Sort by: Rating</option>
          <option>Sort by: Price (Low to High)</option>
          <option>Sort by: Price (High to Low)</option>
        </select>
      </div>

      {filteredVendors.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No vendors found matching your criteria.</p>
          <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      )}
    </div>
  );
}