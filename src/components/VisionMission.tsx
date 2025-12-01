import React from 'react';
import { Lightbulb, Target, LucideIcon } from 'lucide-react'; 

// 1. Define the interface for the data passed to the card component
interface MissionVisionCardProps {
    icon: LucideIcon; // Type for the Lucide-React icon component
    title: string;
    description: string;
    color: string;
    bgColor: string; // Added for card background color
    textColor: string; // Added for card text color
    borderColor: string; // Added for card border color
}

// Component for a single Vision or Mission item
const MissionVisionCard: React.FC<MissionVisionCardProps> = ({ icon: Icon, title, description, color, bgColor, textColor, borderColor }) => (
  // Updated card styling with dynamic background, text, and border colors
  <div className={`${bgColor} ${textColor} ${borderColor} flex flex-col p-6 space-y-4 h-full rounded-2xl`}>
    <div className={`text-4xl ${color} p-2 rounded-xl inline-flex`}>
      <Icon size={32} />
    </div>
    {/* Ensure the border and text color for the heading divider adapt to the new navy background */}
    <h3 className={`text-xl font-extrabold border-b-2 border-cream/20 pb-2 uppercase tracking-wider`}>
      {title}
    </h3>
    <p className="leading-relaxed">
      {description}
    </p>
  </div>
);

// 2. Define the main functional component using React.FC
const VisionMission: React.FC = () => {
  // Tagline: "Strategy. Build. Accelerate."
  const tagline = "Strategy. Build. Accelerate.";
  
  // Define content for the cards with updated Vision and Mission statements
  const visionData: MissionVisionCardProps = {
    title: "VISION",
    description: "To be the leading digital consultancy recognized for fusing strategic insight (Acumen) with flawless execution, empowering our clients to define the future of their markets.",
    icon: Lightbulb,
    color: "text-amber-300", // Brighter amber icon for contrast on navy
    bgColor: "bg-navy", // Navy background for Vision card
    textColor: "text-cream", // Creamy white text for Vision card
    borderColor: "border-navy" // Border class is unused in the outer div, but kept for interface consistency
  };

  const missionData: MissionVisionCardProps = {
    title: "MISSION",
    description: "Our Mission is to forge the definitive path (Arc) from idea to market dominance by leveraging cutting-edge technology and human-centric design to accelerate measurable and sustainable growth for every partner.",
    icon: Target,
    color: "text-blue-400", // Slightly lighter blue icon for contrast on navy
    bgColor: "bg-navy", // Navy background for Mission card
    textColor: "text-cream", // Creamy white text for Mission card
    borderColor: "border-navy" // Border class is unused in the outer div, but kept for interface consistency
  };

  // Determine header text colors based on the new cream section background
  const headerTextColor = "text-navy"; // Dark text for the header titles
  const subtextColor = "text-navy/70"; // Slightly lighter dark text for subtext

  return (
    // Updated background to cream
    <section className="w-full py-16 md:py-24 bg-cream font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section: Company name */}
        <div className="text-center mb-12 md:mb-16">
          <p className={`text-sm font-semibold ${subtextColor} tracking-widest uppercase`}>
            WHY THE ACUMEN ARC
          </p>
          <h2 className={`mt-2 text-3xl md:text-4xl font-extrabold ${headerTextColor}`}>
            {tagline}
          </h2>
          {/* Header divider color adjusted for cream background */}
          <div className="mt-6 mx-auto h-1 w-20 bg-navy/20 rounded-full"></div>
        </div>

        {/* Vision & Mission Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card outer container styling updated */}
          <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-navy/50">
            <MissionVisionCard {...visionData} />
          </div>

          {/* Card outer container styling updated */}
          <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-navy/50">
            <MissionVisionCard {...missionData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;