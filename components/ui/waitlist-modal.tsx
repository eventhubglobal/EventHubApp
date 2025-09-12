'use client';

import { useState } from 'react';
import { X, User, Store, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [userType, setUserType] = useState<'client' | 'vendor' | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    businessSize: '',
    servicesProvided: '',
    location: '',
    eventTypes: '',
    eventFrequency: '',
    excitedFeatures: '',
    updates: true,
    betaTesting: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { userType, ...formData });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-asul">
              Join Our Waitlist!
            </h2>
            <p className="text-gray-600 font-raleway">
              Be among the first to revolutionize your event management experience
            </p>
          </div>

          {/* User Type Selection */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setUserType('client')}
              className={`p-4 rounded-xl border-2 transition-all w-64 ${
                userType === 'client'
                  ? 'border-blue-900 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  userType === 'client' ? 'bg-blue-900' : 'bg-gray-100'
                }`}>
                  <User className={`h-5 w-5 ${
                    userType === 'client' ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                <div className="text-left">
                  <h3 className={`font-bold text-sm ${
                    userType === 'client' ? 'text-blue-900' : 'text-gray-900'
                  }`}>
                    Clients
                  </h3>
                  <p className="text-xs text-gray-600">
                    Organising events & need vendors
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setUserType('vendor')}
              className={`p-4 rounded-xl border-2 transition-all w-64 ${
                userType === 'vendor'
                  ? 'border-blue-900 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  userType === 'vendor' ? 'bg-blue-900' : 'bg-gray-100'
                }`}>
                  <Store className={`h-5 w-5 ${
                    userType === 'vendor' ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                <div className="text-left">
                  <h3 className={`font-bold text-sm ${
                    userType === 'vendor' ? 'text-blue-900' : 'text-gray-900'
                  }`}>
                    Vendors
                  </h3>
                  <p className="text-xs text-gray-600">
                    Offering event services
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Form */}
          {userType ? (
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter First name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              {/* Company/Organization */}
              <div>
                <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                  Company/Organization
                </Label>
                <Input
                  id="company"
                  placeholder="Enter your company/organization"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>

              {/* Conditional Fields Based on User Type */}
              {userType === 'vendor' ? (
                <>
                  {/* Business Size - Vendor Only */}
                  <div>
                    <Label htmlFor="businessSize" className="text-sm font-medium text-gray-700 mb-2 block">
                      Business Size
                    </Label>
                    <div className="relative">
                      <select
                        id="businessSize"
                        value={formData.businessSize}
                        onChange={(e) => handleInputChange('businessSize', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                      >
                        <option value="">Select choice</option>
                        <option value="solo">Solo Entrepreneur</option>
                        <option value="small">Small Team (2-5 people)</option>
                        <option value="medium">Medium Team (6-20 people)</option>
                        <option value="large">Large Team (20+ people)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Services You Provide - Vendor Only */}
                  <div>
                    <Label htmlFor="servicesProvided" className="text-sm font-medium text-gray-700 mb-2 block">
                      Services You Provide
                    </Label>
                    <div className="relative">
                      <select
                        id="servicesProvided"
                        value={formData.servicesProvided}
                        onChange={(e) => handleInputChange('servicesProvided', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                      >
                        <option value="">Select all that apply</option>
                        <option value="photography">Photography</option>
                        <option value="catering">Catering</option>
                        <option value="decoration">Decoration</option>
                        <option value="music">Music & Entertainment</option>
                        <option value="venue">Venue Rental</option>
                        <option value="planning">Event Planning</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Event Types - Client Only */}
                  <div>
                    <Label htmlFor="eventTypes" className="text-sm font-medium text-gray-700 mb-2 block">
                      Types of Events You organize
                    </Label>
                    <div className="relative">
                      <select
                        id="eventTypes"
                        value={formData.eventTypes}
                        onChange={(e) => handleInputChange('eventTypes', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                      >
                        <option value="">Select all that apply</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Events</option>
                        <option value="birthday">Birthday Parties</option>
                        <option value="conference">Conferences</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Event Frequency - Client Only */}
                  <div>
                    <Label htmlFor="eventFrequency" className="text-sm font-medium text-gray-700 mb-2 block">
                      How often do you plan events?
                    </Label>
                    <div className="relative">
                      <select
                        id="eventFrequency"
                        value={formData.eventFrequency}
                        onChange={(e) => handleInputChange('eventFrequency', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                      >
                        <option value="">Select frequency</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </>
              )}

              {/* Location */}
              <div>
                <Label htmlFor="location" className="text-sm font-medium text-gray-700 mb-2 block">
                  Location/City
                </Label>
                <Input
                  id="location"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>
            </div>

            {/* Excited Features */}
            <div>
              <Label htmlFor="excitedFeatures" className="text-sm font-medium text-gray-700 mb-2 block">
                What features are you most excited about?
              </Label>
              <Textarea
                id="excitedFeatures"
                placeholder="Enter here"
                value={formData.excitedFeatures}
                onChange={(e) => handleInputChange('excitedFeatures', e.target.value)}
                rows={4}
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="updates"
                  checked={formData.updates}
                  onCheckedChange={(checked) => handleInputChange('updates', checked as boolean)}
                />
                <Label htmlFor="updates" className="text-sm text-gray-700 leading-relaxed">
                  I'd like to receive updates about EventHub's launch, new features, and exclusive early access opportunities.
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="betaTesting"
                  checked={formData.betaTesting}
                  onCheckedChange={(checked) => handleInputChange('betaTesting', checked as boolean)}
                />
                <Label htmlFor="betaTesting" className="text-sm text-gray-700 leading-relaxed">
                  I'm interested in participating in beta testing and providing feedback to help shape the platform.
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold h-12 text-lg"
            >
              Join Waitlist
            </Button>
          </form>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg font-raleway">
                Please select whether you are a <span className="font-semibold text-blue-900">Client</span> or <span className="font-semibold text-blue-900">Vendor</span> to continue
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
