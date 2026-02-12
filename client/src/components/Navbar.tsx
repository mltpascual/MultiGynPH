/*
  DESIGN: Fluid Wellness — Soft Modernism
  Navbar: Floating glass-morphism navbar with brand purple.
  Sticky with backdrop blur. Compact on scroll.
*/
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Compare", href: "#compare" },
  { label: "Where to Buy", href: "#where-to-buy" },
  { label: "Blog", href: "/blog", external: true },
  { label: "Quiz", href: "/quiz", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_2px_24px_rgba(27,58,75,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105">
              <circle cx="18" cy="18" r="17" stroke="#4A1A6B" strokeWidth="2" fill="none" />
              <path d="M12 18C12 14.686 14.686 12 18 12C21.314 12 24 14.686 24 18C24 21.314 21.314 24 18 24" stroke="#2ABFBF" strokeWidth="2" strokeLinecap="round" />
              <circle cx="18" cy="18" r="3" fill="#4A1A6B" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-[Figtree] font-bold text-lg tracking-tight text-violet-deep">
              Multi-Gyn
            </span>
            <span className="font-[Figtree] text-[10px] font-medium tracking-[0.2em] uppercase text-teal">
              PH
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-['Noto_Sans'] text-sm font-medium text-violet-deep/70 hover:text-violet-deep transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#where-to-buy"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-violet-deep text-white text-sm font-[Figtree] font-semibold rounded-full hover:bg-violet-mid transition-colors duration-300 shadow-[0_4px_16px_rgba(74,26,107,0.25)] hover:shadow-[0_6px_24px_rgba(74,26,107,0.35)]"
        >
          Shop Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-violet-deep"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-lavender-light overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-['Noto_Sans'] text-base font-medium text-violet-deep/80 hover:text-violet-deep py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#where-to-buy"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 bg-violet-deep text-white text-sm font-[Figtree] font-semibold rounded-full mt-2"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
