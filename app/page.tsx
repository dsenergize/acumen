import React from 'react';
import Hero from '../src/components/Hero';
// import StatsAndClients from '../src/components/StatsandPart'; // <-- New import
import Expertise from '@/src/components/Expertise';
import AuthorNote from '@/src/components/AuthorNote';
import Clients from '@/src/components/Clients';
import CTABut from '@/src/components/CTABut'; 
import VisionMission from '@/src/components/VisionMission';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Insert the new section immediately after the Hero component */}
      {/* <StatsandPart />  */}

      <Expertise />

      <AuthorNote />

      <Clients />

      <VisionMission />

      <CTABut />

    </>
  );
}