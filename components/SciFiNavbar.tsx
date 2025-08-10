'use client';

import React from 'react';

interface SciFiNavbarProps {
  timestamp: string;
}

export function SciFiNavbar({ timestamp }: SciFiNavbarProps) {
  return (
    <nav className="relative navbar-boot">
      {/* Main navbar container */}
      <div className="flex justify-between items-center bg-gradient-to-r from-[rgba(18,16,15,0.9)] via-[rgba(30,26,24,0.9)] to-[rgba(18,16,15,0.9)] backdrop-blur-lg border border-[rgba(255,78,66,0.3)] rounded-lg overflow-hidden shadow-2xl shadow-[rgba(255,78,66,0.1)] hologram-effect">
        
        {/* Left section - Logo/Brand */}
        <div className="flex items-center px-6 py-4 border-r border-[rgba(255,78,66,0.2)]">
          <div className="relative">
            {/* Animated logo container */}
            <div className="w-10 h-10 border-2 border-[#ff4e42] rounded-sm flex items-center justify-center mr-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff4e42] to-[#c2362f] opacity-20"></div>
              <div className="text-[#ff4e42] font-bold text-lg z-10">AM</div>
              {/* Scanning line animation */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-[#ff4e42] opacity-60 navbar-scan-line"></div>
            </div>
          </div>
          <div className="text-left">
            <div className="text-[#ff4e42] font-bold text-sm uppercase tracking-[0.15em] leading-tight">
              ADITYA.MUKHERJEE
            </div>
            <div className="text-[#c2b8b2] text-xs uppercase tracking-wider font-medium">
              FULL.STACK.DEV
            </div>
          </div>
        </div>

        {/* Center section - Navigation Links */}
        <div className="flex-1 flex justify-center items-center px-4">
          <div className="flex items-center space-x-1 bg-[rgba(0,0,0,0.3)] rounded-md border border-[rgba(255,78,66,0.15)] p-1">
            {[
              { label: 'HOME', id: 'home', active: true },
              { label: 'ABOUT', id: 'about' },
              { label: 'PROJECTS', id: 'projects' },
              { label: 'CONTACT', id: 'contact' }
            ].map((item, index) => (
              <button
                key={item.id}
                className={`nav-button px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 rounded-sm pointer-events-auto ${
                  item.active 
                    ? 'bg-[rgba(255,78,66,0.2)] text-[#ff4e42] border border-[rgba(255,78,66,0.3)] shadow-md shadow-[rgba(255,78,66,0.2)]' 
                    : 'text-[#c2b8b2] hover:text-[#ff4e42] hover:bg-[rgba(255,78,66,0.1)] hover:shadow-sm hover:shadow-[rgba(255,78,66,0.1)]'
                }`}
                onClick={() => {
                  if (item.id === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    const section = document.getElementById(item.id === 'home' ? 'portfolio-sections' : item.id);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right section - System Status & Time */}
        <div className="flex items-center px-6 py-4 border-l border-[rgba(255,78,66,0.2)]">
          <div className="text-right mr-4">
            <div className="flex items-center text-xs text-[#c2b8b2] mb-1">
              <div className="w-2 h-2 bg-[#ff4e42] rounded-full mr-2 status-indicator"></div>
              <span className="uppercase tracking-wide">SYSTEM ONLINE</span>
            </div>
            <div className="text-[#ff4e42] font-mono text-sm font-bold">
              {timestamp}
            </div>
          </div>
          
          {/* Status indicators */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center text-xs">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 status-indicator"></div>
              <span className="text-[#c2b8b2] text-[10px] uppercase tracking-wide">AUDIO</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 status-indicator"></div>
              <span className="text-[#c2b8b2] text-[10px] uppercase tracking-wide">3D.SYS</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-1.5 h-1.5 bg-[#ff4e42] rounded-full mr-2 status-indicator"></div>
              <span className="text-[#c2b8b2] text-[10px] uppercase tracking-wide">NEURAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-1 left-4 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#ff4e42] to-transparent opacity-60"></div>
      <div className="absolute -top-1 right-4 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#ff4e42] to-transparent opacity-60"></div>
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#ff4e42] to-transparent opacity-40"></div>
      
      {/* Tech stack indicator */}
      <div className="absolute -bottom-6 left-0 text-[#ff4e42] text-[10px] font-mono uppercase tracking-wider opacity-60">
        NEXT.JS • REACT • THREE.JS • GSAP
      </div>
      <div className="absolute -bottom-6 right-0 text-[#c2b8b2] text-[10px] font-mono uppercase tracking-wider opacity-60">
        BUILD.v2024.7.3
      </div>
    </nav>
  );
}
