'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Phone Image + White Text */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mb-16">
          {/* Left Side - Phone Image (60% width) */}
          <div className="lg:col-span-3 flex items-center justify-start p-8 lg:p-12 rounded-l-2xl">
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              <Image
                src="/images/Phonee.svg"
                alt="Vintage rotary dial telephone"
                width={900}
                height={900}
                className="object-contain w-auto h-full"
                priority
              />
            </div>
          </div>

          {/* Right Side - Contact Information Text (40% width) */}
          <div className="lg:col-span-2 bg-white p-8 lg:p-12 flex flex-col justify-center rounded-r-2xl">
            <div className="w-full text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-6 font-asul">
                We Are Just One Call Away!
              </h1>
              
              <div className="space-y-3">
                <p className="text-base text-gray-600 font-raleway">
                  You can reach us anytime. We are available 24/7
                </p>
                <p className="text-base text-gray-600 font-raleway">
                  Send an email to info@eventhub.global or fill the form below and send.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Contact Form */}
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Name, Email, Subject */}
              <div className="space-y-5">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What is the subject of this message?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              {/* Right Side - Message */}
              <div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                    Enter Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={8}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold px-12 py-3 w-[300px]"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
