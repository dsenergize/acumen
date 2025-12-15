import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DATA } from "@/lib/services-data";

// 1. Generate Static Params
export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServiceDetail({ params }: ServicePageProps) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[#FDFCFE] font-sans selection:bg-acumen-primary selection:text-white">
        
        {/* HERO SECTION WITH IMAGE BACKGROUND */}
        <section className="relative pt-40 pb-20 px-6 min-h-[60vh] flex items-end overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay for Text Readability - Using Brand Colors */}
            <div className="absolute inset-0 bg-gradient-to-t from-acumen-secondary/95 via-acumen-secondary/60 to-acumen-secondary/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-acumen-primary/10 mix-blend-overlay" /> 
          </div>

          <div className="container mx-auto relative z-10 animate-fade-in opacity-0 fill-mode-forwards">
            {/* Back Button - Updated with Brand Colors */}
            <Link 
              href="/#services" 
              className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-all duration-300 backdrop-blur-md bg-acumen-primary hover:bg-acumen-primary px-5 py-2.5 rounded-full border border-acumen-primary/30 hover:border-acumen-primary group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>

            <div className="max-w-4xl">
              {/* Hero Icon - Updated Background to suit Image */}
              <div className="w-16 h-16 bg-acumen-primary backdrop-blur-md border border-acumen-primary/30 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-acumen-primary/10">
                <Icon className="w-8 h-8" />
              </div>
              
              <h1 className="font-serif text-4xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-sm">
                {service.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
                {service.longDescription}
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="font-serif text-3xl font-bold text-acumen-secondary mb-4 sticky top-32">
                  What We Deliver
                </h2>
                <p className="text-acumen-light mb-8">
                  Comprehensive solutions tailored to scale your business.
                </p>
              </div>
              
              <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start p-6 rounded-2xl bg-[#FDFCFE] border border-slate-100 hover:border-acumen-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-acumen-primary/5 group"
                  >
                    <CheckCircle2 className="w-6 h-6 text-acumen-primary mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-acumen-secondary font-medium text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-white text-acumen-secondary relative overflow-hidden border-t border-slate-100">
          {/* Background decorative blob */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-acumen-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 font-bold">Ready to upgrade your {service.title.toLowerCase()}?</h2>
            <p className="text-acumen-light/75 mb-10 font-medium text-lg max-w-xl mx-auto">
              Let's discuss how we can help you achieve your goals with our expert {service.title.toLowerCase()} services.
            </p>
            <Link href="/contactus">
              <Button variant="secondary" className="bg-acumen-primary text-white hover:bg-acumen-secondary shadow-xl shadow-acumen-primary/20 px-8 py-6 text-lg rounded-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}