import React from 'react';
import { Lightbulb, Target, LucideIcon } from 'lucide-react'; 

// 1. Define the interface for the data passed to the card component
interface MissionVisionCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    iconColor: string; // Renamed 'color' to 'iconColor' for clarity
    bgColor: string;
    textColor: string;
    borderColor: string;
}

// Component for a single Vision or Mission item
const MissionVisionCard: React.FC<MissionVisionCardProps> = ({ 
    icon: Icon, 
    title, 
    description, 
    iconColor, // Using the new name
    bgColor, 
    textColor, 
    borderColor 
}) => (
  // Applying high contrast: dark background, light text
  <div className={`${bgColor} ${textColor} border ${borderColor} flex flex-col p-8 space-y-4 h-full rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl`}>
    
    {/* Icon: Using iconColor for the icon and a background for visual pop */}
    <div className={`text-4xl ${iconColor} bg-acumen-purple-700/50 p-3 rounded-full inline-flex self-start`}>
      <Icon size={32} />
    </div>

    {/* Title */}
    <h3 className={`text-xl font-extrabold border-b border-acumen-purple-50/20 pb-2 uppercase tracking-wider text-acumen-purple-50`}>
      {title}
    </h3>

    {/* Description: Using a lighter shade for descriptive text */}
    <p className="leading-relaxed text-acumen-light-50">
      {description}
    </p>
  </div>
);

// 2. Main functional component
const VisionMission: React.FC = () => {
    const tagline = "Strategy. Build. Accelerate.";
    
    // Updated to use consistent 'acumen-purple' classes for dark cards
    const visionData: MissionVisionCardProps = {
        title: "VISION",
        description:
          "To be the leading digital consultancy recognized for fusing strategic insight (Acumen) with flawless execution, empowering our clients to define the future of their markets.",
        icon: Lightbulb,
        iconColor: "text-acumen-purple-200", // Light icon color
        bgColor: "bg-acumen-purple-900/90", // Dark card background
        textColor: "text-acumen-purple-100", // Default text color (used for title)
        borderColor: "acumen-purple-700", // Border to visually separate
    };

    const missionData: MissionVisionCardProps = {
        title: "MISSION",
        description:
          "Our Mission is to forge the definitive path (Arc) from idea to market dominance by leveraging cutting-edge technology and human-centric design to accelerate measurable and sustainable growth for every partner.",
        icon: Target,
        iconColor: "text-acumen-purple-200", // Light icon color
        bgColor: "bg-acumen-purple-900/90", // Dark card background
        textColor: "text-acumen-purple-100", // Default text color (used for title)
        borderColor: "acumen-purple-700", // Border to visually separate
    };

    // Header text colors (kept light for the surrounding section)
    const headerTextColor = "text-acumen-purple-900";
    const subtextColor = "text-acumen-purple-700";

    return (
        <section className="w-full py-16 md:py-24 bg-acumen-light-900 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <p className={`text-sm font-semibold ${subtextColor} tracking-widest uppercase`}>
                        WHY THE ACUMEN ARC
                    </p>

                    <h2 className={`mt-2 text-3xl md:text-4xl font-extrabold ${headerTextColor}`}>
                        {tagline}
                    </h2>

                    {/* FIX: Corrected class name capitalization */}
                    <div className="mt-6 mx-auto h-1 w-20 bg-acumen-purple-300/30 rounded-full"></div>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    
                    {/* The individual div wrappers are not needed anymore as MissionVisionCard is styled with shadow/border */}
                    <MissionVisionCard {...visionData} />
                    <MissionVisionCard {...missionData} />

                </div>
            </div>
        </section>
    );
};

export default VisionMission;