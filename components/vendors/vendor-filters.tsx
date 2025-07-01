'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface Filters {
  category: string;
  location: string;
  priceRange: string;
  rating: string;
  verified: boolean;
}

interface VendorFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export function VendorFilters({ filters, onFiltersChange }: VendorFiltersProps) {
  const categories = [
    'Event Decorators',
    'Catering Services',
    'Photography & Video',
    'DJs & Entertainment',
    'Event Planners',
    'Transportation',
    'Fashion & Styling',
    'MCs & Hosts',
    'Lighting & Effects',
    'Security Services',
    'Children\'s Services',
    'Gifts & Souvenirs'
  ];

  const locations = [
    'Lagos',
    'Abuja',
    'Port Harcourt',
    'Kano',
    'Ibadan',
    'Benin City',
    'Enugu',
    'Kaduna',
    'Jos',
    'Calabar'
  ];

  const priceRanges = [
    { label: 'Under ₦50,000', value: '0-50000' },
    { label: '₦50,000 - ₦100,000', value: '50000-100000' },
    { label: '₦100,000 - ₦250,000', value: '100000-250000' },
    { label: '₦250,000 - ₦500,000', value: '250000-500000' },
    { label: 'Above ₦500,000', value: '500000+' }
  ];

  const ratings = [
    { label: '4.5+ Stars', value: '4.5' },
    { label: '4.0+ Stars', value: '4.0' },
    { label: '3.5+ Stars', value: '3.5' },
    { label: '3.0+ Stars', value: '3.0' }
  ];

  const updateFilter = (key: keyof Filters, value: string | boolean) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Category</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={filters.category} onValueChange={(value) => updateFilter('category', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="" id="all-categories" />
              <Label htmlFor="all-categories" className="text-sm font-medium">All Categories</Label>
            </div>
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <RadioGroupItem value={category} id={category} />
                <Label htmlFor={category} className="text-sm">{category}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Location</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={filters.location} onValueChange={(value) => updateFilter('location', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="" id="all-locations" />
              <Label htmlFor="all-locations" className="text-sm font-medium">All Locations</Label>
            </div>
            {locations.map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <RadioGroupItem value={location} id={location} />
                <Label htmlFor={location} className="text-sm">{location}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={filters.priceRange} onValueChange={(value) => updateFilter('priceRange', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="" id="all-prices" />
              <Label htmlFor="all-prices" className="text-sm font-medium">All Prices</Label>
            </div>
            {priceRanges.map((range) => (
              <div key={range.value} className="flex items-center space-x-2">
                <RadioGroupItem value={range.value} id={range.value} />
                <Label htmlFor={range.value} className="text-sm">{range.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Rating */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Minimum Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={filters.rating} onValueChange={(value) => updateFilter('rating', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="" id="all-ratings" />
              <Label htmlFor="all-ratings" className="text-sm font-medium">All Ratings</Label>
            </div>
            {ratings.map((rating) => (
              <div key={rating.value} className="flex items-center space-x-2">
                <RadioGroupItem value={rating.value} id={rating.value} />
                <Label htmlFor={rating.value} className="text-sm">{rating.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="verified-only"
              checked={filters.verified}
              onCheckedChange={(checked) => updateFilter('verified', checked as boolean)}
            />
            <Label htmlFor="verified-only" className="text-sm">Verified vendors only</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}