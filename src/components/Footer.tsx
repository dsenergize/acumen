"use client";

import { Linkedin, Mail, ArrowRight, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = ["About", "Services", "Work", "Contact"];
  const legalLinks = ["Privacy", "Terms", "Cookies"];

  // Helper to ensure proper section scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-acumen-primary/10 pt-20 pb-5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand/Contact Section */}
          <div className="md:col-span-5">
            <a href="#home" className="flex items-center gap-2 mb-6" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl text-white font-bold">
                <span className="text-xl font-serif">
                  {/* Using standard img tag for preview */}
                  <img src="/assets/TheArc.gif" alt="Acumen Logo" className="w-10 h-10" onError={(e) => e.currentTarget.style.display = 'none'} /> 
                </span>
              </div>
              <span className="font-serif text-xl font-bold text-acumen-primary">
                The Acumen Arc
              </span>
            </a>

            <p className="text-acumen-light mb-8 max-w-xs leading-relaxed">
              Strategy That Moves. Creativity That Wins.”
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/theacumenarc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-acumen-primary/5 flex items-center justify-center text-acumen-light hover:bg-acumen-primary hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-acumen-primary/5 flex items-center justify-center text-acumen-light hover:bg-acumen-primary hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/theacumenarc?igsh=MWo5cHhtM2FneWVqbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-acumen-primary/5 flex items-center justify-center text-acumen-light hover:bg-acumen-primary hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-acumen-primary/5 flex items-center justify-center text-acumen-light hover:bg-acumen-primary hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {/* UPDATED: Using mailto: allows the user to use their default email client.
                  To force Gmail specifically (not recommended as it alienates Outlook/Apple users), use:
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=syedah@theacumenarc.com"
              */}
              <a
                href="mailto:syedah@theacumenarc.com"
                className="w-10 h-10 rounded-full bg-acumen-primary/5 flex items-center justify-center text-acumen-light hover:bg-acumen-primary hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-acumen-secondary mb-6">Company</h4>
            <ul className="space-y-4 text-acumen-light">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-acumen-primary transition-colors"
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-acumen-secondary mb-6">Legal</h4>
            <ul className="space-y-4 text-acumen-light">
              {legalLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-acumen-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-acumen-secondary mb-6">Stay Updated</h4>
            <p className="text-acumen-light text-sm mb-4">
              Subscribe to our newsletter for insights and updates.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-acumen-primary/5 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-acumen-primary"
              />
              <button
                className="bg-acumen-primary text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-acumen-secondary transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-acumen-primary/10 pt-8 flex flex-col md:flex-row justify-between text-sm text-acumen-light">
          <p>&copy; {currentYear} The Acumen Arc. All rights reserved.</p>
          <div className="flex text-acumen-secondary gap-4 mt-4 md:mt-0">
            <Link className="hover:text-acumen-light" href="/terms">
                Terms of Service
            </Link>
            <Link className="hover:text-acumen-light" href="/privacy">
                Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;