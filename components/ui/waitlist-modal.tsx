'use client';

import { useState } from 'react';
import { X, User, Store, ChevronDown, CheckCircle, AlertCircle, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { WaitlistApiService, WaitlistClientData, WaitlistVendorData } from '@/lib/api';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [userType, setUserType] = useState<'client' | 'vendor' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '', // Added phone number field
    company: '',
    location: '',
    eventTypes: [] as string[], // Changed back to array for multi-select
    eventFrequency: '',
    businessSize: '', // Added back for vendors
    excitedFeatures: '',
    updates: true,
    betaTesting: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEventTypeChange = (eventType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      eventTypes: checked 
        ? [...prev.eventTypes, eventType]
        : prev.eventTypes.filter(type => type !== eventType)
    }));
  };

  const resetFormData = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      location: '',
      eventTypes: [],
      eventFrequency: '',
      businessSize: '',
      excitedFeatures: '',
      updates: true,
      betaTesting: false
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (userType === 'client') {
        // UPDATED: Phone field added for client submissions
        const clientData: WaitlistClientData = {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          companyOrganization: formData.company.trim(),
          phoneNumber: formData.phone.trim(), // Added phone number
          location: formData.location.trim(),
          eventTypes: formData.eventTypes, // Already an array
          eventFrequency: formData.eventFrequency,
          excitedFeatures: formData.excitedFeatures.trim(),
          receiveUpdates: formData.updates,
          betaTester: formData.betaTesting
        };
        
        console.log('Sending client data:', clientData);
        console.log('Client data JSON:', JSON.stringify(clientData, null, 2));
        console.log('Timestamp:', new Date().toISOString());
        await WaitlistApiService.addClientToWaitlist(clientData);
      } else if (userType === 'vendor') {
        // UPDATED: Vendor data structure to match API requirements
        const vendorData: WaitlistVendorData = {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          companyOrganization: formData.company.trim(),
          phoneNumber: formData.phone.trim(), // Added phone number
          location: formData.location.trim(),
          eventTypes: formData.eventTypes, // Already an array
          businessSize: formData.businessSize, // Required by API
          excitedFeatures: formData.excitedFeatures.trim(),
          receiveUpdates: formData.updates,
          betaTester: formData.betaTesting
        };
        
        console.log('Sending vendor data:', vendorData);
        console.log('Vendor data JSON:', JSON.stringify(vendorData, null, 2));
        await WaitlistApiService.addVendorToWaitlist(vendorData);
      }

      setIsSuccess(true);
      // Reset form after successful submission
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        // Reset form data
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '', // Reset phone field
          company: '',
          location: '',
          eventTypes: [], // Reset to empty array
          eventFrequency: '',
          businessSize: '', // Reset business size
          excitedFeatures: '',
          updates: true,
          betaTesting: false
        });
        setUserType(null);
      }, 2000);
    } catch (err) {
      console.error('Waitlist submission error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to join waitlist. Please try again.';
      setError(errorMessage);
      
      // Show error for 5 seconds, then clear it
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  // Show success state
  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Success!</h2>
          <p className="text-gray-600 mb-6">
            You've been successfully added to our waitlist. We'll be in touch soon!
          </p>
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-brand-blue mx-auto"></div>
        </div>
      </div>
    );
  }

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
            <div className="flex items-center justify-center gap-2 mb-2">
              <h2 className="text-3xl font-bold text-gray-900 font-asul">
                Join Our Waitlist!
              </h2>
              <div className="flex items-center gap-1 text-xs">
                {isOnline ? (
                  <>
                    <Wifi className="h-3 w-3 text-green-600" />
                    <span className="text-green-600">Online</span>
                  </>
                ) : (
                  <>
                    <WifiOff className="h-3 w-3 text-red-600" />
                    <span className="text-red-600">Offline</span>
                  </>
                )}
              </div>
            </div>
            <p className="text-gray-600 font-raleway">
              Be among the first to revolutionize your event management experience
            </p>
          </div>

          {/* User Type Selection */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => {
                if (userType !== 'client') {
                  resetFormData();
                }
                setUserType('client');
              }}
              className={`p-4 rounded-xl border-2 transition-all w-64 ${
                userType === 'client'
                  ? 'border-brand-blue bg-brand-blue-light/10'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  userType === 'client' ? 'bg-brand-blue' : 'bg-gray-100'
                }`}>
                  <User className={`h-5 w-5 ${
                    userType === 'client' ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                <div className="text-left">
                  <h3 className={`font-bold text-sm ${
                    userType === 'client' ? 'text-brand-blue' : 'text-gray-900'
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
              onClick={() => {
                if (userType !== 'vendor') {
                  resetFormData();
                }
                setUserType('vendor');
              }}
              className={`p-4 rounded-xl border-2 transition-all w-64 ${
                userType === 'vendor'
                  ? 'border-brand-blue bg-brand-blue-light/10'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  userType === 'vendor' ? 'bg-brand-blue' : 'bg-gray-100'
                }`}>
                  <Store className={`h-5 w-5 ${
                    userType === 'vendor' ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                <div className="text-left">
                  <h3 className={`font-bold text-sm ${
                    userType === 'vendor' ? 'text-brand-blue' : 'text-gray-900'
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

              {/* Phone Number */}
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>

              {/* Company/Organization */}
              <div>
                <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                  Company/Organization *
                </Label>
                <Input
                  id="company"
                  placeholder="Enter your company/organization"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  required
                />
              </div>


              {/* Conditional Fields Based on User Type */}
              {userType === 'vendor' ? (
                <>
                  {/* Service Categories - Vendor Only */}
                  <div>
                    <Label htmlFor="vendorServices" className="text-sm font-medium text-gray-700 mb-2 block">
                      Services You Provide *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          className="w-full justify-between"
                        >
                          {formData.eventTypes.length > 0 
                            ? `${formData.eventTypes.length} service${formData.eventTypes.length > 1 ? 's' : ''} selected`
                            : "Select services you provide"
                          }
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0" align="start">
                        <div className="max-h-60 overflow-auto p-2">
                          {[
                            { value: 'Catering & Drinks', label: 'Catering & Drinks' },
                            { value: 'Entertainment', label: 'Entertainment' },
                            { value: 'Rentals & Equipment', label: 'Rentals & Equipment' },
                            { value: 'Photography & Videography', label: 'Photography & Videography' },
                            { value: 'Decoration & Setup', label: 'Decoration & Setup' },
                            { value: 'Media & Content', label: 'Media & Content' },
                            { value: 'Beauty & Grooming', label: 'Beauty & Grooming' },
                            { value: 'Event Support Services', label: 'Event Support Services' },
                            { value: 'Fashion & Styling', label: 'Fashion & Styling' },
                            { value: 'Logistics & Miscellaneous', label: 'Logistics & Miscellaneous' },
                            { value: 'Venue Providers', label: 'Venue Providers' },
                            { value: 'Event Materials', label: 'Event Materials' },
                            { value: 'Kids & Special Fun Vendors', label: 'Kids & Special Fun Vendors' },
                            { value: 'Content Creators', label: 'Content Creators' }
                          ].map((option) => (
                            <div key={option.value} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                              <Checkbox
                                id={`vendor-service-${option.value}`}
                                checked={formData.eventTypes.includes(option.value)}
                                onCheckedChange={(checked) => handleEventTypeChange(option.value, checked as boolean)}
                              />
                              <Label htmlFor={`vendor-service-${option.value}`} className="text-sm text-gray-700 cursor-pointer">
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Business Size - Vendor Only */}
                  <div>
                    <Label htmlFor="businessSize" className="text-sm font-medium text-gray-700 mb-2 block">
                      Business Size *
                    </Label>
                    <div className="relative">
                      <select
                        id="businessSize"
                        value={formData.businessSize}
                        onChange={(e) => handleInputChange('businessSize', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue appearance-none"
                        required
                      >
                        <option value="">Select business size</option>
                        <option value="solo entrepreneur">Solo Entrepreneur</option>
                        <option value="small business (2-10 people)">Small Business (2-10 people)</option>
                        <option value="medium business (11-50 people)">Medium Business (11-50 people)</option>
                        <option value="large business (50+ people)">Large Business (50+ people)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Event Frequency - Vendor Only - NOT REQUIRED BY BACKEND */}
                  {/* <div>
                    <Label htmlFor="vendorEventFrequency" className="text-sm font-medium text-gray-700 mb-2 block">
                      How often do you work on events? *
                    </Label>
                    <div className="relative">
                      <select
                        id="vendorEventFrequency"
                        value={formData.eventFrequency}
                        onChange={(e) => handleInputChange('eventFrequency', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue appearance-none"
                        required
                      >
                        <option value="">Select frequency</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="annually">Annually</option>
                        <option value="as needed">As Needed</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div> */}
                </>
              ) : (
                <>
                  {/* Event Types - Client Only */}
                  <div>
                    <Label htmlFor="clientEventTypes" className="text-sm font-medium text-gray-700 mb-2 block">
                      Types of Events You organize *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          className="w-full justify-between"
                        >
                          {formData.eventTypes.length > 0 
                            ? `${formData.eventTypes.length} event type${formData.eventTypes.length > 1 ? 's' : ''} selected`
                            : "Select types of events you organize"
                          }
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0" align="start">
                        <div className="max-h-60 overflow-auto p-2">
                          {[
                            { value: 'Social Events (Weddings, Birthday Parties, etc.)', label: 'Social Events (Weddings, Birthday Parties, etc.)' },
                            { value: 'Corporate Events (Product Launches, Conferences, etc.)', label: 'Corporate Events (Product Launches, Conferences, etc.)' },
                            { value: 'Community Events (Charity, Fundraisers, etc.)', label: 'Community Events (Charity, Fundraisers, etc.)' },
                            { value: 'Private/Intimate Events (Proposal, Family Dinner, etc.)', label: 'Private/Intimate Events (Proposal, Family Dinner, etc.)' },
                            { value: 'Public/Entertainment Events (Concerts, Festivals, etc.)', label: 'Public/Entertainment Events (Concerts, Festivals, etc.)' }
                          ].map((option) => (
                            <div key={option.value} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                              <Checkbox
                                id={`eventType-${option.value}`}
                                checked={formData.eventTypes.includes(option.value)}
                                onCheckedChange={(checked) => handleEventTypeChange(option.value, checked as boolean)}
                              />
                              <Label htmlFor={`eventType-${option.value}`} className="text-sm text-gray-700 cursor-pointer">
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Event Frequency - Client Only */}
                  <div>
                    <Label htmlFor="eventFrequency" className="text-sm font-medium text-gray-700 mb-2 block">
                      How often do you plan events? *
                    </Label>
                    <div className="relative">
                      <select
                        id="eventFrequency"
                        value={formData.eventFrequency}
                        onChange={(e) => handleInputChange('eventFrequency', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue appearance-none"
                        required
                      >
                        <option value="">Select frequency</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="annually">Annually</option>
                        <option value="as needed">As Needed</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </>
              )}

              {/* Location */}
              <div>
                <Label htmlFor="location" className="text-sm font-medium text-gray-700 mb-2 block">
                  Location/City *
                </Label>
                <Input
                  id="location"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Excited Features */}
            <div>
              <Label htmlFor="excitedFeatures" className="text-sm font-medium text-gray-700 mb-2 block">
                What features are you most excited about? *
              </Label>
              <Textarea
                id="excitedFeatures"
                placeholder="Enter here"
                value={formData.excitedFeatures}
                onChange={(e) => handleInputChange('excitedFeatures', e.target.value)}
                rows={4}
                required
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

            {/* Error Display */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                  <p className="text-sm text-red-700 mt-1">{error}</p>
                  {error.includes('connect') || error.includes('connection') ? (
                    <div className="mt-3">
                      <p className="text-xs text-red-600 mb-2">
                        This might be a temporary connection issue. You can:
                      </p>
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setError(null);
                            handleSubmit(new Event('submit') as any);
                          }}
                          className="text-red-700 border-red-300 hover:bg-red-50"
                        >
                          Try Again
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setError(null);
                            // Copy form data to clipboard as fallback
                            const formText = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nLocation: ${formData.location}\nUser Type: ${userType}`;
                            navigator.clipboard.writeText(formText);
                            alert('Form data copied to clipboard. You can email it to us directly.');
                          }}
                          className="text-red-700 border-red-300 hover:bg-red-50"
                        >
                          Copy Details
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold h-12 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Joining Waitlist...
                </div>
              ) : (
                'Join Waitlist'
              )}
            </Button>
          </form>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg font-raleway">
                Please select whether you are a <span className="font-semibold text-brand-blue">Client</span> or <span className="font-semibold text-brand-blue">Vendor</span> to continue
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
