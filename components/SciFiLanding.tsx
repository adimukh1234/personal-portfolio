'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { SciFiAnomaly } from './SciFiAnomaly';
import { AudioSystem } from './AudioSystem';
import { SpectrumAnalyzer } from './SpectrumAnalyzer';
import { LoadingOverlay } from './LoadingOverlay';
import { FloatingParticles } from './FloatingParticles';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable);
}

export default function SciFiLanding() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioAnalyser, setAudioAnalyser] = useState<AnalyserNode | null>(null);
  const [audioLevel, setAudioLevel] = useState(0);
  const [beatIntensity, setBeatIntensity] = useState(0);
  const [timestamp, setTimestamp] = useState('00:00:00');
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  // Audio settings
  const [audioReactivity, setAudioReactivity] = useState(1.0);
  const [audioSensitivity, setAudioSensitivity] = useState(5.0);
  
  // Anomaly settings
  const [rotationSpeed, setRotationSpeed] = useState(1.0);
  const [resolution, setResolution] = useState(32);
  const [distortion, setDistortion] = useState(1.0);

  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const sceneRef = useRef<THREE.Scene>(null);

  // Handle audio level changes from spectrum analyzer
  const handleAudioLevelChange = (level: number) => {
    setAudioLevel(level);
  };

  // Handle beat detection from spectrum analyzer
  const handleBeatDetected = (intensity: number) => {
    setBeatIntensity(intensity);
    // Decay the beat intensity over time
    setTimeout(() => setBeatIntensity(intensity * 0.5), 50);
    setTimeout(() => setBeatIntensity(0), 100);
  };

  // Initialize audio context
  const initAudio = () => {
    try {
      const context = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = context.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.8;
      analyser.connect(context.destination);
      
      setAudioContext(context);
      setAudioAnalyser(analyser);
      
      showNotificationMessage('AUDIO ANALYSIS SYSTEM ONLINE');
      return true;
    } catch (error) {
      console.error('Audio initialization error:', error);
      showNotificationMessage('AUDIO SYSTEM ERROR');
      return false;
    }
  };

  // Show notification
  const showNotificationMessage = (message: string) => {
    setNotification(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  // Update timestamp
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toTimeString().split(' ')[0];
      setTimestamp(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Initialize on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      initAudio();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle user interaction to start audio
  const handleUserInteraction = () => {
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    } else if (!audioContext) {
      initAudio();
    }
  };

  return (
    <div 
      className="sci-fi-landing w-full h-full"
      onClick={handleUserInteraction}
      onKeyDown={handleUserInteraction}
    >
      {/* Loading Overlay */}
      <LoadingOverlay isVisible={!isLoaded} />

      {/* Space Background */}
      <div className="fixed inset-0 bg-[#12100f] bg-cover bg-center opacity-80 z-0"
           style={{ backgroundImage: 'url("https://assets.codepen.io/7558/space-bg-002.jpg")' }} />

      {/* Grid Overlay */}
      <div className="fixed inset-0 opacity-20 z-0"
           style={{
             backgroundImage: `
               linear-gradient(to right, rgba(255, 240, 230, 0.05) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255, 240, 230, 0.05) 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
           }} />

      {/* Three.js Scene */}
      <div className="fixed inset-0 z-10">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: 'high-performance'
          }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <pointLight position={[2, 2, 2]} color="#ff4e42" intensity={1} />
          <pointLight position={[-2, -2, -2]} color="#c2362f" intensity={1} />
          
          <SciFiAnomaly 
            audioLevel={audioLevel}
            beatIntensity={beatIntensity}
            rotationSpeed={rotationSpeed}
            resolution={resolution}
            distortion={distortion}
            audioReactivity={audioReactivity}
          />
          
          <OrbitControls 
            enableZoom={false}
            enableDamping
            dampingFactor={0.1}
            rotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Floating Particles */}
      <FloatingParticles audioLevel={audioLevel} />

      {/* Interface Container */}
      <div className="fixed inset-0 z-20 pointer-events-none p-5 flex flex-col justify-between">
        {/* Scanner Frame */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#ff4e42] pointer-events-none">
          {/* Corner decorations */}
          <div className="absolute -top-0.5 -left-0.5 w-5 h-5 border-t-2 border-l-2 border-[#ff4e42]"></div>
          <div className="absolute -top-0.5 -right-0.5 w-5 h-5 border-t-2 border-r-2 border-[#ff4e42]"></div>
          <div className="absolute -bottom-0.5 -left-0.5 w-5 h-5 border-b-2 border-l-2 border-[#ff4e42]"></div>
          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 border-b-2 border-r-2 border-[#ff4e42]"></div>
          
          {/* Scanner IDs */}
          <div className="absolute -bottom-8 left-0 text-[#ff4e42] text-xs">
            NEXT.STACK(&#123;DEVELOPER: ADITYA.INIT&#125;)
          </div>
          <div className="absolute -bottom-8 right-0 text-[#ff4e42] text-xs">
            FULLSTACK.SEQUENCE(0xADI2024)
          </div>
        </div>
      </div>

      {/* Spectrum Analyzer */}
      <SpectrumAnalyzer 
        audioAnalyser={audioAnalyser}
        audioContext={audioContext}
        audioSensitivity={audioSensitivity}
        setAudioSensitivity={setAudioSensitivity}
        onNotification={showNotificationMessage}
        onAudioLevelChange={handleAudioLevelChange}
        onBeatDetected={handleBeatDetected}
      />

      {/* Audio Wave Effect */}
      <div 
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(255,78,66,0.1)] pointer-events-none z-30"
        style={{
          transform: `translate(-50%, -50%) scale(${1 + audioLevel * audioReactivity * 0.3 + beatIntensity * 0.5})`,
          borderColor: `rgba(255, 78, 66, ${0.1 + audioLevel * 0.3 + beatIntensity * 0.4})`,
          boxShadow: beatIntensity > 0 ? `0 0 ${20 + beatIntensity * 30}px rgba(255, 78, 66, ${0.3 + beatIntensity * 0.4})` : 'none'
        }}
      />

      {/* Beat pulse rings */}
      {beatIntensity > 0.3 && (
        <>
          <div 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(255,78,66,0.2)] pointer-events-none z-30 animate-pulse"
            style={{
              borderColor: `rgba(255, 78, 66, ${beatIntensity * 0.5})`,
              boxShadow: `0 0 ${40 + beatIntensity * 50}px rgba(255, 78, 66, ${beatIntensity * 0.3})`
            }}
          />
          <div 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[rgba(255,78,66,0.3)] pointer-events-none z-30 animate-pulse"
            style={{
              borderColor: `rgba(255, 78, 66, ${beatIntensity * 0.7})`,
              boxShadow: `0 0 ${30 + beatIntensity * 40}px rgba(255, 78, 66, ${beatIntensity * 0.4})`
            }}
          />
        </>
      )}

      {/* Notification - Improved styling */}
      {showNotification && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-[rgba(0,0,0,0.8)] border-2 border-[rgba(255,78,66,0.6)] px-6 py-3 rounded-lg text-[#ff4e42] text-sm z-50 backdrop-blur-md shadow-lg shadow-[rgba(255,78,66,0.2)]">
          {notification}
        </div>
      )}

      {/* Portfolio Navigation - More visible and accessible */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 z-50 pointer-events-auto">
        <div className="bg-[rgba(0,0,0,0.8)] border-2 border-[rgba(255,78,66,0.6)] px-8 py-4 rounded-lg backdrop-blur-md shadow-lg shadow-[rgba(255,78,66,0.2)]">
          <div className="text-[#ff4e42] text-base font-bold uppercase tracking-wider drop-shadow-md">
            ADITYA MUKHERJEE - FULL STACK DEVELOPER
          </div>
          <div className="text-[#ffffff] text-sm mt-2 drop-shadow-sm">
            Building fast, scalable web experiences •            <button 
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio-sections');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-[#ff4e42] hover:text-[#c2362f] transition-colors cursor-pointer underline"
            >
              Access Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
