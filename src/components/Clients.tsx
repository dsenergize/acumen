"use client";

import React from 'react';
import { ArrowRight, Zap, Briefcase } from 'lucide-react';

// Define the structure for a single Case Study item
interface CaseStudy {
    id: number;
    title: string;
    description: string;
    imagePlaceholder: string;
    isImageLeft: boolean;
    projectFocus: string;
}

// Mock Data for Case Studies
const CASE_STUDIES: CaseStudy[] = [
    {
        id: 1,
        title: "Gopi Vaid - E-commerce Redesign",
        description: "Gopi Vaid, founded in 2003 by Gopi Vaid and Arnaz Soonawalla, is a celebrated fashion label known for hand-embroidered kurtas in rich jewel tones. Their brand combines traditional Indian aesthetics with contemporary chic. We transformed their e-commerce platform, leading to a 45% increase in conversion rates.",
        imagePlaceholder: "E-commerce-Redesign",
        isImageLeft: true,
        projectFocus: "Luxury E-commerce & Brand Refresh",
    },
    {
        id: 2,
        title: "Astha Narang - Global Digital Strategy",
        description: "Ancient handiwork and techniques with modern treatment along with texture of fabric and silhouettes creates ensembles that are chic and contemporary with the culture being intact. We developed a bespoke digital strategy focusing on high-net-worth individual outreach and improved site performance by 60%, resulting in a strong international client base.",
        imagePlaceholder: "Digital-Strategy-SEO",
        isImageLeft: false,
        projectFocus: "Global Digital Strategy & SEO",
    },
    {
        id: 3,
        title: "Pomecha - Sustainable Techwear",
        description: "Pomecha is a leading name in sustainable techwear, blending high-performance materials with eco-conscious manufacturing. Our work involved a complete brand identity overhaul and the launch of a new product line, which broke internal sales records within the first quarter.",
        imagePlaceholder: "Sustainable-Brand-Launch",
        isImageLeft: true,
        projectFocus: "Sustainable Brand Launch",
    },
];

// Helper function to generate a placeholder image URL
const getPlaceholderUrl = (text: string) => {
    const safeText = text.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 20);
    return `https://placehold.co/800x1200/783f8e/c8c6d7?text=${safeText}`;
};

/**
 * Renders a single case study card with a specific vertical height for scroll snapping.
 */
const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
    return (
        <article
            key={study.id}
            className="snap-start h-[80vh] w-full flex items-start justify-center px-4 md:px-8 bg-acumen-light-900 mb-8"
        >
            <div className="max-w-6xl w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* IMAGE SECTION */}
                <div className="w-full h-full min-h-[40vh] hidden md:flex items-center justify-center overflow-hidden relative group bg-acumen-purple-800/80">
                    <img
                        src={getPlaceholderUrl(study.imagePlaceholder)}
                        alt={`${study.title} Case Study Visual`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = "https://placehold.co/800x1200/783f8e/c8c6d7?text=Visual+Error";
                        }}
                    />
                    <div className="absolute inset-0 bg-acumen-purple-800/80 mix-blend-multiply"></div>
                </div>


                {/* CONTENT SECTION */}
                <div className="flex flex-col justify-between h-full p-4 md:p-8">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wider text-acumen-purple/60 mb-2">
                            <Briefcase className="w-4 h-4 mr-2 inline-block" /> {study.projectFocus}
                        </span>

                        <h3 className="text-3xl font-extrabold text-acumen-purple mb-4 pb-2">
                            {study.title}
                        </h3>

                        <p className="text-base text-acumen-purple/70 leading-relaxed">
                            {study.description}
                        </p>
                    </div>

                    <a
                        href={study.id === 4 ? "/contact" : `/case-studies/${study.id}`}
                        className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl font-medium cursor-pointer
                        border-2 border-acumen-purple-50
                        bg-acumen-purple-700 text-acumen-purple-50
                        transition-all duration-300
                        hover:bg-acumen-purple-50 hover:text-acumen-purple-700
                        hover:scale-[1.02] shadow-md self-start"
                    >
                        {study.id === 4 ? "Start Your Project" : <>Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" /></>}
                    </a>
                </div>
            </div>
        </article>
    );
};


/**
 * Main case study vertical scroll snap container.
 */
export default function CaseStudies() {
    return (
        <section className="w-full bg-acumen-light-900">
            <div className="mx-auto max-w-7xl px-0">

                {/* HEADER */}
                <header className="text-center pt-8 pb-4 sticky top-0 bg-acumen-light-900 z-20">
                    <span className="text-sm font-semibold uppercase tracking-widest text-acumen-purple/70 flex items-center justify-center">
                        Our Clients & Successes
                    </span>
                    <h2 className="mt-1 text-3xl md:text-4xl font-extrabold text-acumen-purple">
                        Client Stories: Scroll to Explore
                    </h2>
                </header>

                {/* SCROLLABLE LIST */}
                <div className="overflow-y-scroll h-[80vh] snap-y snap-mandatory custom-scrollbar scroll-pt-[140px] md:scroll-pt-[140px]">
                    {CASE_STUDIES.map(study => (
                        <CaseStudyCard key={study.id} study={study} />
                    ))}
                </div>

                {/* HIDE SCROLLBAR */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .custom-scrollbar { scrollbar-width: none; }
                    .custom-scrollbar::-webkit-scrollbar { display: none; }
                `}} />

            </div>
        </section>
    );
}
