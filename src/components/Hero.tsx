"use client";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="w-full bg-cream">
            <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT TEXT SECTION */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-navy">
                        We Build Brands That <span className="text-navy">Inspire & Convert</span>
                    </h1>

                    <p className="mt-6 text-lg max-w-lg text-navy/80">
                        Acumen Arc is your creative & strategic partner — delivering results-driven
                        digital experiences for ambitious brands.
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="mt-8 flex gap-4">

                        {/* CTA 1 */}
                        <a
                            href="/contact"
                            className="px-6 py-3 rounded-xl font-medium cursor-pointer
                            border-2 border-navy
                            bg-cream text-navy
                            transition-all duration-300
                            hover:bg-navy hover:text-cream
                            hover:scale-105 shadow-md"
                        >
                            Get Started
                        </a>

                        {/* CTA 2 */}
                        <a
                            href="/services"
                            className="px-6 py-3 rounded-xl font-medium cursor-pointer
                            border-2 border-navy
                            bg-cream text-navy
                            transition-all duration-300
                            hover:bg-navy hover:text-cream
                            hover:scale-105 shadow-md
                            flex items-center gap-2"
                        >
                            Our Services →
                        </a>

                    </div>
                </div>

                {/* RIGHT VIDEO SECTION */}
                <div className="relative">
                    {/* Container with fixed height, rounded corners, and hidden overflow */}
                    <div className="w-full h-72 md:h-96 rounded-2xl shadow-inner bg-navy overflow-hidden">
                        
                        {/* The Video Element */}
                        <video 
                            // Standard path correction (using / instead of \)
                            src="/assets/herovid.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-full object-cover" // Ensure video fills the container
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="text-sm text-center mt-2 text-navy/60">
                        (The Acumen Arc Core Cycle Visual)
                    </p>
                </div>

            </div>
        </section>
    );
}