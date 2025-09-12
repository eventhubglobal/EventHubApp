"use client";

import { HeaderWithModal } from '@/components/layout/header-with-modal';
import { Footer } from '@/components/layout/footer';
// import { AboutUsSection } from '@/components/sections/about-us-section';
// import { MissionVisionSection } from '@/components/sections/mission-vision-section';
// import { ValuesSection } from '@/components/sections/values-section';
// import { JoinCommunitySection } from '@/components/sections/join-community-section';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderWithModal />
      <main className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 font-asul">
            Coming Soon
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-raleway">
            We're working hard to bring you an amazing experience. Our About page is currently under development.
          </p>
          <p className="text-lg text-gray-500 mb-12 font-raleway">
            Be the first to know when we launch! Join our waitlist to get exclusive early access and updates.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => {
                // This will be handled by the HeaderWithModal component
                const event = new CustomEvent('openWaitlist');
                window.dispatchEvent(event);
              }}
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
