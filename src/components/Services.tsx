import {
  Globe,
  Palette,
  Megaphone,
  Video,
  Smartphone,
  Search,
  ArrowRight,
} from "lucide-react";

// The constants are removed as we now use direct Tailwind classes (e.g., bg-acumen-primary).

export const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Built Different. Built Brilliant.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Looks Good. Feels Better.",
    },
    {
      icon: Megaphone,
      title: "Marketing Strategy",
      description:
        "Hype Meets Strategy. Ads That Actually Perform.",
    },
    {
      icon: Video,
      title: "Video Production",
      description:
        "Made to Stop the Scroll.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Tap. Swipe. Love.",
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description:
        "Found. Clicked. Loved.",
    },
  ];

  return (
    // Parent section background remains white
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            {/* Using the custom acumen-primary color class */}
            <span className="text-lg font-bold  text-acumen-primary uppercase tracking-widest">
              Our Expertise
              <span className="font-serif"> & </span>
            </span>
            {/* Using acumen-primary for H2 as well for strong branding */}
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-acumen-primary">
              Signature Services
            </h2>
          </div>

          {/* Standardizing neutral text color to the darkest brand shade (acumen-secondary) */}
          {/* <p className="text-acumen-secondary text-lg max-w-md pb-1">
            Comprehensive services tailored to drive growth and elevate your
            brand presence.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              // Card background uses a very light tint of the brand color for subtle contrast
              className="group p-8 rounded-3xl bg-acumen-primary/5 border-2 border-transparent hover:border-acumen-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-acumen-primary/10 hover:scale-[1.01]"
            >
              <div
                // Icon background uses a subtle light shade (acumen-light/20) and switches to primary on hover
                className="w-14 h-14 rounded-2xl bg-acumen-light/20 flex items-center justify-center mb-6 group-hover:bg-acumen-primary transition-colors duration-300"
              >
                {/* Icon color uses acumen-primary and switches to white on hover */}
                <service.icon className="w-7 h-7 text-acumen-primary group-hover:text-white transition-colors duration-300" />
              </div>

              {/* H3 text uses the dark brand shade (acumen-secondary) */}
              <h3 className="font-serif text-2xl font-semibold text-acumen-secondary mb-3">
                {service.title}
              </h3>

              {/* Standardizing neutral text color for description (acumen-light) */}
              <p className="text-acumen-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link uses acumen-primary and switches to the dark brand shade on hover */}
              <div className="flex items-center text-sm font-semibold text-acumen-primary group-hover:text-acumen-secondary transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};