"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import BackgroundEffect from "@/components/BackgroundEffect";

interface ClientLayoutProps {
  children: React.ReactNode;
  caveatFont: string;
}

export default function ClientLayout({ children, caveatFont }: ClientLayoutProps) {
  return (
    <ThemeProvider>
      <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen transition-colors duration-300">
        <BackgroundEffect />
        {children}
      </div>
      <style jsx global>{`
        .handwritten {
          font-family: ${caveatFont};
          font-size: 2rem;
          font-weight: 600;
          color: #2563eb;
          transform: rotate(-4deg);
          position: relative;
          z-index: 30;
          text-shadow: 2px 2px 2px rgba(0,0,0,0.1);
          line-height: 1.2;
        }
        
        .handwritten-large {
          font-family: ${caveatFont};
          font-size: 3.5rem;
          font-weight: 700;
          color: #2563eb;
          transform: rotate(-6deg);
          position: relative;
          z-index: 30;
          text-shadow: 3px 3px 3px rgba(0,0,0,0.15);
          line-height: 1.1;
        }

        .handwritten-accent {
          position: absolute;
          font-family: ${caveatFont};
          font-size: 2.5rem;
          font-weight: 600;
          color: #2563eb;
          transform: rotate(-8deg);
          z-index: 30;
          text-shadow: 2px 2px 2px rgba(0,0,0,0.1);
          line-height: 1.2;
        }

        .handwritten-accent.top-right {
          top: -3rem;
          right: -4rem;
        }

        .handwritten-accent.top-left {
          top: -3rem;
          left: -4rem;
        }

        .handwritten-accent.bottom-right {
          bottom: -3rem;
          right: -4rem;
        }

        .handwritten-accent.bottom-left {
          bottom: -3rem;
          left: -4rem;
        }

        @media (max-width: 768px) {
          .handwritten {
            font-size: 1.75rem;
          }
          .handwritten-large {
            font-size: 2.5rem;
          }
          .handwritten-accent {
            font-size: 1.75rem;
          }
          .handwritten-accent.top-right,
          .handwritten-accent.top-left,
          .handwritten-accent.bottom-right,
          .handwritten-accent.bottom-left {
            position: relative;
            top: auto;
            right: auto;
            bottom: auto;
            left: auto;
            margin: 1rem 0;
          }
        }
      `}</style>
    </ThemeProvider>
  );
} 