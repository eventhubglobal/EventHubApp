'use client';

import { useState } from 'react';
import { HeaderWithModal } from '@/components/layout/header-with-modal';
import { Footer } from '@/components/layout/footer';
import { VendorFilters } from '@/components/vendors/vendor-filters';
import { VendorGrid } from '@/components/vendors/vendor-grid';
import { VendorSearch } from '@/components/vendors/vendor-search';

export default function VendorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    priceRange: '',
    rating: '',
    verified: false
  });

  return (
    <div className="min-h-screen bg-background">
      <HeaderWithModal />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Find Trusted Event Vendors
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover verified professionals for your event needs
          </p>
          <VendorSearch onSearch={setSearchQuery} />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <VendorFilters filters={filters} onFiltersChange={setFilters} />
          </div>
          <div className="lg:col-span-3">
            <VendorGrid searchQuery={searchQuery} filters={filters} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}