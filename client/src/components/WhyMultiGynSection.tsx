/*
  DESIGN: Fluid Wellness — Soft Modernism
  Why Multi-Gyn: Trust section with the trust badge image,
  statistics counters, and brand credibility markers.
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TRUST_IMG = "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/trust-badge.jpg";

const stats = [
  { value: "20+", label: "Years of Research" },
  { value: "50+", label: "Countries Worldwide" },
  { value: "95%", label: "Customer Satisfaction" },
  { value: "0", label: "Preservatives Used" },
];

const steps = [
  {
    step: "01",
    title: "Cleanse",
    description: "Start with Multi-Gyn FemiWash for gentle, pH-balanced daily intimate hygiene that respects your natural flora.",
  },
  {
    step: "02",
    title: "Treat",
    description: "Address specific concerns with targeted solutions like ActiGel for BV or LiquiGel for dryness relief.",
  },
  {
    step: "03",
    title: "Protect",
    description: "Maintain your natural balance with regular use. The 2QR Complex works continuously to support healthy microflora.",
  },
];

function StepCard({ step, index, totalSteps }: { step: typeof steps[0]; index: number; totalSteps: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative text-center"
    >
      {index < totalSteps - 1 && (
        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-lavender to-transparent" />
      )}
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-lavender-light to-lavender/40 mb-6">
        <span className="font-['Figtree'] text-2xl font-bold text-violet-deep">{step.step}</span>
      </div>
      <h3 className="font-['Figtree'] text-xl font-bold text-violet-deep mb-3">{step.title}</h3>
      <p className="font-['Noto_Sans'] text-sm text-foreground/65 leading-relaxed max-w-xs mx-auto">{step.description}</p>
    </motion.div>
  );
}

export default function WhyMultiGynSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="why" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
            How It Works
          </span>
          <h2 className="font-['Figtree'] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-violet-deep leading-tight mb-5">
            Your 3-Step Intimate Care Routine
          </h2>
          <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
            A simple, effective approach to maintaining your intimate health and comfort every day.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <StepCard key={step.step} step={step} index={index} totalSteps={steps.length} />
          ))}
        </div>

        {/* Trust Image + Stats */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-lavender/30 to-teal/15 rounded-3xl blur-xl" />
              <img
                src={TRUST_IMG}
                alt="Natural care products with medical trust symbols"
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-square"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-['Figtree'] text-2xl sm:text-3xl font-bold text-violet-deep mb-3">
              Trusted by Millions of Women
            </h3>
            <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed mb-8">
              Multi-Gyn has been at the forefront of feminine intimate care for over two decades, combining scientific innovation with natural ingredients to deliver products women can trust.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-2xl bg-lavender-light/50 border border-lavender/30"
                >
                  <span className="block font-['Figtree'] text-3xl font-bold text-violet-deep">
                    {stat.value}
                  </span>
                  <span className="font-['Noto_Sans'] text-sm text-foreground/55 mt-1 block">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
