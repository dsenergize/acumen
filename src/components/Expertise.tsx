"use client";

import React from 'react';

interface ExpertiseCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const EXPERTISE_CARDS: ExpertiseCardProps[] = [
    {
        title: "WEB DEVELOPMENT",
        description: "Building scalable, high-performance websites and custom digital platforms using modern frameworks.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/web-development",
    },
    {
        title: "UI/UX DESIGN",
        description: "Designing intuitive user interfaces and optimizing user experience flows for maximum engagement and conversion.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/ui-ux-design",
    },
    {
        title: "MARKETING&PR",
        description: "Crafting and executing integrated marketing and public relations strategies to build brand authority and reach.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/marketing-pr",
    },
    // {
    //     title: "APP DEVELOPMENT",
    //     description: "Creating native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
    //     imageUrl: "image_4a9677.jpg",
    //     link: "/services/app-development",
    // },
    {
        title: "VIDEO PRODUCTION",
        description: "Producing high-quality video content, from brand storytelling to product demos, that captures audience attention.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/video-production",
    },
    {
        title: "SOCIAL MEDIA",
        description: "Managing social media presence and campaigns across all major platforms to grow community and engagement.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/social-media",
    },
    {
        title: "24/7 SALES & SUPPORT",
        description: "Providing continuous, high-quality sales and customer support to ensure client satisfaction and operational efficiency.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/sales-support",
    },
];


//cards
const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, description, imageUrl, link }) => {
    return (
        <div
            className="group relative h-96 rounded-xl overflow-hidden shadow-xl 
                        transition-all duration-500 ease-in-out 
                        hover:scale-[1.02] hover:shadow-2xl hover:shadow-acumen-purple-700/50 cursor-pointer"
            style={{
                backgroundImage: `url('${imageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay (Dark) */}
            <div className="absolute inset-0 bg-acumen-purple-800/80 group-hover:bg-acumen-purple-600 transition-colors duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                {/* Title (Light text) */}
                <h3 className="text-xl font-bold text-acumen-purple-50 mb-2 uppercase tracking-wide">
                    {title}
                </h3>

                {/* Description (Light text, visible on hover) */}
                <p className="text-sm text-acumen-purple-50/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {description}
                </p>

                <a
                    href={link}
                    className="self-start px-6 py-2 border border-acumen-purple-50 
                             bg-acumen-purple-700 text-acumen-purple-50 font-medium text-sm uppercase rounded-lg
                             transition-all duration-300
                             hover:bg-acumen-purple-50 hover:text-acumen-purple-700 border-2 border-acumen-purple-500 hover:shadow-lg"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};


// MAIN COMPONENT
const Expertise: React.FC = () => {
    return (
        <section className="w-full py-16 bg-acumen-light-900">
            <div className="mx-auto max-w-7xl px-6">
                
                <h2 className="text-4xl font-extrabold text-acumen-purple-900/80 mb-4">
                    OUR EXPERTISE
                </h2>

                <p className="text-lg text-acumen-purple-800 mb-12">
                    Delivering strategic digital solutions that drive measurable results.
                </p>

                {/* Grid is set to 1 column on mobile (default) and 2 columns from medium screens up (md:grid-cols-2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EXPERTISE_CARDS.map((card, index) => (
                        <div 
                            key={index}
                        >
                            <ExpertiseCard {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;