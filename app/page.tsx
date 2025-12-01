import React from 'react';

import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
// import StatsAndClients from '../src/components/StatsandPart'; // <-- New import
import Expertise from '@/src/components/Expertise';
import AuthorNote from '@/src/components/AuthorNote';
import Clients from '@/src/components/Clients';
import CTABut from '@/src/components/CTABut'; 
import VisionMission from '@/src/components/VisionMission';
import Footer from '@/src/components/Footer';


export default function HomePage() {
  return (
    <>
      <Header />

      <Hero />

      <Expertise />

      <AuthorNote />

      <Clients />

      <VisionMission />

      <CTABut />

      <Footer />
    </>
  );
}