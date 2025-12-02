"use client";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="w-full bg-acumen-light-900">
            <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT TEXT SECTION */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-acumen-purple-800">
                        We Build Brands That <span className="text-acumen-purple-700">Inspire & Convert</span>
                    </h1>

                    <p className="mt-6 text-xl max-w-lg text-acumen-purple-800">
                        Acumen Arc is your creative & strategic partner — delivering results-driven
                        digital experiences for ambitious brands.
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="mt-8 flex gap-4">

                        {/* CTA 1 */}
                        <a
                            href="/contact"
                            className="px-6 py-3 rounded-xl font-medium cursor-pointer
                            border-2 border-acumen-purple-700
                            bg-acumen-purple-700 text-acumen-purple-50
                            transition-all duration-300
                            hover:bg-acumen-purple-50 hover:text-acumen-purple-700
                            hover:scale-105 shadow-md"
                        >
                            Get Started
                        </a>

                        {/* CTA 2 */}
                        <a
                            href="/services"
                            className="px-6 py-3 rounded-xl font-medium cursor-pointer
                            border-2 border-acumen-purple-700
                            bg-acumen-purple-700 text-acumen-purple-50
                            transition-all duration-300
                            hover:bg-acumen-purple-50 
                            hover:text-acumen-purple-700                            
                            hover:scale-105 shadow-md
                            flex items-center gap-2"
                        >
                            Our Services →
                        </a>

                    </div>
                </div>

                {/* RIGHT VIDEO SECTION */}
                {/* <div className="relative">
                    <div className="w-full h-72 md:h-96 rounded-2xl shadow-inner bg-acumen-purple-900 overflow-hidden">
                        <video
                            src="/assets/herovid.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-sm text-center mt-2 text-acumen-purple-800">
                        (The Acumen Arc Core Cycle Visual)
                    </p>
                </div> */}
            </div>
        </section>
    );
}
