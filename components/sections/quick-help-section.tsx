import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

export function QuickHelpSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-200 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6 font-asul">
                  Need Quick Help?
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-raleway">
                  Our support team is available 24/7 to help answer your questions and guide you to the right resources.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold px-8 py-3"
                  >
                    Chat with Our Agent
                  </Button>
                </div>
              </div>

              {/* Right Side - Illustration */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Cartoon person illustration */}
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center relative">
                    {/* Person figure */}
                    <div className="relative">
                      {/* Head */}
                      <div className="w-16 h-16 bg-yellow-200 rounded-full mx-auto mb-2"></div>
                      {/* Body */}
                      <div className="w-20 h-24 bg-yellow-400 rounded-lg mx-auto mb-1"></div>
                      {/* Legs */}
                      <div className="flex justify-center space-x-1">
                        <div className="w-6 h-12 bg-yellow-600 rounded-t-lg"></div>
                        <div className="w-6 h-12 bg-yellow-600 rounded-t-lg"></div>
                      </div>
                      {/* Backpack */}
                      <div className="absolute -right-2 top-8 w-8 h-12 bg-red-500 rounded-lg"></div>
                    </div>
                    
                    {/* Question marks */}
                    <div className="absolute -top-4 -right-4 text-2xl font-bold text-blue-900">
                      ??
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
