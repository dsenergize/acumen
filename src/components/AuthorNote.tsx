"use client";

import React from 'react';
import { Quote } from 'lucide-react';

/**
 * Component displaying a note or short article excerpt from the company's leadership or an author.
 */
const AuthorNote: React.FC = () => {
    // Content data
    const fullArticleLink = "/blog/author-vision-2025";
    const authorName = "Syedah Fatma, Founder";
    const authorTitle = "Visionary & Lead Strategist";
    // Short excerpt for the homepage display
    const excerpt = "In the rapidly evolving digital landscape, true success isn't about chasing the next trend—it's about building a foundational brand narrative that resonates deeply. Our commitment at The Acumen Arc is to be the architects of that foundation, ensuring every digital touchpoint is strategic, sustainable, and undeniably human. We believe in growth fueled by clarity and purpose, not just clicks. This is the Acumen difference.";

    return (
        <section className="w-full py-16 bg-acumen-light-900"> {/* FIX: Changed to a light background for contrast */}
            <div className="mx-auto max-w-7xl px-6">
                <div className="bg-acumen-purple-800/80 p-8 md:p-12 rounded-2xl shadow-2xl  border-acumen-purple-300 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Author Image/Quote Icon */}
                    <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-acumen-purple-900 flex items-center justify-center relative shadow-inner">
                        {/* Placeholder for Author Image */}
                        <img 
                            src="/assets/authpic.jpg" 
                            alt={`Profile of ${authorName}`}
                            className="w-full h-full object-cover rounded-full shadow-lg"
                        />
                        {/* Quote Icon Overlay */}
                        <div className="absolute bottom-0 right-0 p-2 bg-acumen-purple-500 rounded-full shadow-xl ring-4 ring-acumen-purple-800"> {/* FIX: Corrected color class */}
                            <Quote className="w-6 h-6 text-acumen-purple-50" /> {/* FIX: Corrected color class */}
                        </div>
                    </div>

                    {/* Right Column: Note Content and CTA */}
                    <div className="flex-grow"> {/* FIX: Removed erroneous background class */}
                        <h2 className="text-2xl md:text-3xl font-bold text-acumen-purple-100 mb-4">
                            A Note From Our CEO
                        </h2>
                        
                        <p className="text-lg text-acumen-purple-50 font-semibold italic mb-6 leading-relaxed"> {/* FIX: Corrected font class and text color for contrast */}
                            &ldquo;{excerpt}&rdquo;
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            {/* Author Info */}
                            <div className="text-sm font-medium text-acumen-purple-50">
                                <span className="block font-semibold text-acumen-purple-50">{authorName}</span>
                                <span className="block text-acumen-purple-300">{authorTitle}</span>
                            </div>
                            
                            {/* Read More Button */}
                            <a
                                href={fullArticleLink}
                                className="self-start sm:self-auto px-6 py-3 rounded-xl font-medium cursor-pointer
                                bg-acumen-purple-700 text-acumen-purple-50 hover:shadow-lg
                                transition-all duration-300 border-2 border-acumen-purple-500
                                hover:bg-acumen-purple-50 hover:text-acumen-purple-700 hover:scale-[1.03] flex items-center justify-center" // FIX: Corrected hover color classes
                            >
                                Read Full Article &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorNote;