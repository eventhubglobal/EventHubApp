'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';

interface VendorSearchProps {
  onSearch: (query: string) => void;
}

export function VendorSearch({ onSearch }: VendorSearchProps) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search vendors (e.g., Wedding photographers, Caterers)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 h-12"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <div className="relative md:w-48">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
        <Button size="lg" onClick={handleSearch} className="h-12 px-8">
          Search
        </Button>
      </div>
    </div>
  );
}