"use client";
import { Send } from "lucide-react";

export default function CTABut() {
    return (
        <section className="w-full bg-acumen-light-900 py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6 flex flex-col items-center text-center">

                <h2 className="text-3xl md:text-5xl font-extrabold text-acumen-purple-900 leading-tight tracking-tight">
                    Ready to Transform Your Digital Presence?
                </h2>

                <p className="mt-4 mb-8 text-lg text-acumen-purple-800 max-w-3xl">
                    Let's discuss your ambitious goals and craft a strategic plan 
                    to achieve measurable results.
                </p>

                {/* CTA Button */}
                <a
                    href="/contact"
                    className="
                        px-8 py-3 rounded-full font-bold uppercase tracking-wider
                        bg-acumen-purple-700 text-acumen-purple-50
                        transition-all duration-300
                        flex items-center gap-2
                        hover:bg-acumen-purple-50 hover:text-acumen-purple-700 hover:border-2 border-acumen-purple-900
                        hover:scale-105 shadow-xl hover:shadow-acumen-purple-200
                    "
                >
                    <Send className="w-5 h-5" />
                    Get in Touch
                </a>

            </div>
        </section>
    );
}
