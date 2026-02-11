/*
  DESIGN: Fluid Wellness — Soft Modernism
  Benefits: Alternating layout with icons and descriptions.
  Deep violet background section for contrast.
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Unique 2QR Complex",
    description: "Our patented bio-active polysaccharide traps harmful bacteria without disturbing your natural microflora, providing effective protection the natural way.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    title: "100% Natural Based",
    description: "Every Multi-Gyn product is formulated with natural ingredients. No parabens, no harsh chemicals, no preservatives — just gentle, effective care.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Fast-Acting Relief",
    description: "Experience noticeable relief from discomfort within hours. Our concentrated formulas are designed to work quickly while being gentle on sensitive tissue.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Gynecologist Recommended",
    description: "Trusted and recommended by healthcare professionals worldwide. Backed by clinical studies and over two decades of research in feminine health.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: "Safe During Pregnancy",
    description: "Multi-Gyn products can be safely used during pregnancy and breastfeeding, providing peace of mind when you need gentle care the most.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Trusted in 50+ Countries",
    description: "From Europe to Asia, millions of women worldwide trust Multi-Gyn for their intimate health. Now available across the Philippines.",
  },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group flex gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-400"
    >
      <div className="w-14 h-14 rounded-xl bg-teal/15 flex items-center justify-center flex-shrink-0 text-teal group-hover:bg-teal/25 transition-colors duration-300">
        {benefit.icon}
      </div>
      <div>
        <h3 className="font-['Figtree'] text-lg font-bold text-white mb-2">{benefit.title}</h3>
        <p className="font-['Noto_Sans'] text-sm text-white/65 leading-relaxed">{benefit.description}</p>
      </div>
    </motion.div>
  );
}

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" className="relative pt-24 md:pt-32 pb-28 md:pb-36 overflow-hidden bg-violet-deep">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
            Why Choose Us
          </span>
          <h2 className="font-['Figtree'] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-5">
            The Multi-Gyn Difference
          </h2>
          <p className="font-['Noto_Sans'] text-base text-white/60 leading-relaxed">
            Backed by science, powered by nature. Discover what makes Multi-Gyn the preferred choice for intimate care worldwide.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: '80px' }}>
          <path
            d="M0 80V40L60 44C120 48 240 56 360 52C480 48 600 32 720 28C840 24 960 32 1080 40C1200 48 1320 56 1380 60L1440 64V80H0Z"
            fill="oklch(0.98 0.005 80)"
          />
        </svg>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: '80px' }}>
          <path
            d="M0 0V40L60 36C120 32 240 24 360 28C480 32 600 48 720 52C840 56 960 48 1080 40C1200 32 1320 24 1380 20L1440 16V0H0Z"
            fill="oklch(0.98 0.005 80)"
          />
        </svg>
      </div>
    </section>
  );
}
