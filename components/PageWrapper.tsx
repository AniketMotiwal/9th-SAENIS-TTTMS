'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const LoaderScreen = dynamic(() => import('./LoaderScreen'), { ssr: false });

const LOAD_MS = 3200;

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Slight delay so fade-out feels buttery
      requestAnimationFrame(() => setShowContent(true));
    }, LOAD_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoaderScreen isLoading={isLoading} />
      <div
        className={`transition-all duration-700 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{ visibility: showContent || !isLoading ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    </>
  );
}
