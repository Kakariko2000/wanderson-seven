import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className }) => {
  return (
    <span
      className={cn(
        "bg-gradient-blue-aqua bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;