'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Removed Zap import as we are using a custom image logo
import { MAIN_NAV_LINKS, NavItem } from '../config/navigation';

/**
 * Replicates the main Pexels Header/Navigation area with dynamic links.
 */
const Header: React.FC = () => {
  const pathname = usePathname();
  // State to track if the component has mounted on the client (to prevent hydration errors)
  const [isMounted, setIsMounted] = useState(false); 
  
  // NEW STATE: Controls the visibility of the full-screen splash screen (re-added)
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // 1. Hydration Fix (Runs first)
    setIsMounted(true);

    // 2. Splash Screen Timer: Hide the splash screen after 1 second (1000ms)
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  const navItemClass = (href: string) =>
    // We only use the pathname for styling if the component is mounted
    `text-sm font-medium transition-colors duration-200 ${isMounted && pathname === href
      ? 'text-cream border-b-2 border-cream' // Active state
      : 'text-cream/70 hover:text-cream hover:border-b-2 hover:border-cream/50' // Corrected class name
    } pb-1`;


  // Define the base inactive classes for SSR/unmounted state
  const ssrNavClass = 'text-sm font-medium transition-colors duration-200 text-cream/70 pb-1';

  // --- 1. Static Image Logo Component for the Header ---
  const ImageLogo: React.FC = () => (
    <img
      // UPDATED PATH: Using the local logo file
      src="/assets/TheArcLog.jpg" 
      alt="The Acumen Arc Logo"
      // Set the size to fit the header
      className="w-8 h-8 object-contain rounded-md" 
    />
  );
  // -------------------------------------------------------------------

  // --- 2. Full Screen GIF Component (now acting as a splash) ---
  const FullScreenVideoBackground: React.FC = () => (
    // The container is fixed, full screen, centered, and uses the matching page background (bg-cream)
    <div className={`fixed inset-0 z-[100] overflow-hidden 
                     flex items-center justify-center bg-cream 
                     transition-opacity duration-500 ease-in-out 
                     ${showSplash ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      
      {/* CRITICAL CHANGE: Using <img> tag for the GIF */}
      <img
        src="/assets/ENE.gif" // Path to your GIF file
        alt="Animated Logo Splash"
        // Using object-contain and constrained sizing for focusing the logo
        className="block w-full max-w-xs md:max-w-sm h-auto object-contain rounded-xl shadow-2xl" 
      />
    </div>
  );
  // -------------------------------------------------------------------


  return (
    // Wrap the entire header content in a fragment to include the full-screen component.
    <>
      {/* 1. Full Screen GIF Background is rendered based on showSplash state */}
      <FullScreenVideoBackground />
      
      {/* 2. Header component sits on top (z-10) with its navy background */}
      {/* Conditionally hide the header content while the splash screen is active */}
      <header className={`flex justify-between items-center py-4 px-6 md:px-10
                         border-b border-cream/20 sticky top-0 
                         bg-navy backdrop-blur-sm z-10 relative 
                         ${showSplash ? 'hidden' : ''}`}> {/* Hide header content during splash */}
        {/* Logo / Company Name (The Acumen Arc) - Text is cream */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Using the new ImageLogo component */}
          <ImageLogo /> 
          <h1 className="text-xl font-bold tracking-tight text-cream">The Acumen Arc</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-8 text-sm font-medium"> 
          {MAIN_NAV_LINKS.map((item: NavItem) => (
            <Link 
              key={item.href} 
              href={item.href} 
              // If mounted, use the full dynamic class (navItemClass); otherwise, use the stable SSR class
              className={isMounted ? navItemClass(item.href) : ssrNavClass}
            >
              {item.title}
            </Link>
          ))}
          <Link href="/contact" passHref>
            {/* Button colors are inverted for contrast on navy background */}
            <button className="bg-cream text-navy px-4 py-2 rounded-lg font-semibold 
                              hover:bg-cream/80 transition duration-150">
              Get Started
            </button>
          </Link>
        </nav>
        {/* TODO: Add Mobile Menu Drawer */}
      </header>
    </>
  );
};

export default Header;