"use client";

import { useRef, type ReactNode } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';

type RevealOnScrollProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export const RevealOnScroll = ({ children, delay = 0, className }: RevealOnScrollProps) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
