'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { WaitlistModal } from '@/components/ui/waitlist-modal';

export function HeaderWithModal() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const handleOpenWaitlist = () => {
      setIsWaitlistOpen(true);
    };

    window.addEventListener('openWaitlist', handleOpenWaitlist);
    
    return () => {
      window.removeEventListener('openWaitlist', handleOpenWaitlist);
    };
  }, []);

  return (
    <>
      <Header onWaitlistOpen={() => setIsWaitlistOpen(true)} />
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
}
