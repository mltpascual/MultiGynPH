/*
  DESIGN: Fluid Wellness — Soft Modernism
  About: Warm cream background, asymmetric layout with
  watercolor background image, brand story text.
*/
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ABOUT_BG = "https://private-us-east-1.manuscdn.com/sessionFile/eeJVGgPUfdsBYsx4CScK6Z/sandbox/m1fYroB1JtDzsK9hqndqO9-img-4_1770802621000_na1fn_YWJvdXQtc2VjdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZWVKVkdnUFVmZHNCWXN4NENTY0s2Wi9zYW5kYm94L20xZllyb0IxSnREenNLOWhxbmRxTzktaW1nLTRfMTc3MDgwMjYyMTAwMF9uYTFmbl9ZV0p2ZFhRdGMyVmpkR2x2YmcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XOYb~NDmLnGekcKpPE2Xq~llKfaMchRgvoTwL5wPOf2Twmq~OjijoJGx55c9wpb-TEn2Y-ETtmHsowYdS~O-FSm0pobz31DVRFlvqSNtB0FZLERgMBjRihNj2GrWO7FNmZs5j0m~Lbgxm9Ss8t522bLYoF1B8v6R~C44o~BaHszuJOkFuyYLFKwQ9Ehf0rTPtlfm7JDeqy5Z0oeqvcLaDvd8z7hKmZO0H0W-nrfHcEzBtOlGabPOCbeM5k~ZFXGkdKDjnnxO5uGxhVLChvu9tLBdcWDkuu9EYblQSi6SVz~OC4Kr~cILjplbwIODqFO7r6F69OvEszJ~pkRAyp0LuA__";

const NATURE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/eeJVGgPUfdsBYsx4CScK6Z/sandbox/m1fYroB1JtDzsK9hqndqO9-img-3_1770802569000_na1fn_bmF0dXJlLWluZ3JlZGllbnRz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZWVKVkdnUFVmZHNCWXN4NENTY0s2Wi9zYW5kYm94L20xZllyb0IxSnREenNLOWhxbmRxTzktaW1nLTNfMTc3MDgwMjU2OTAwMF9uYTFmbl9ibUYwZFhKbExXbHVaM0psWkdsbGJuUnouanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Sh14jmhIz0BezmnKyPNo-s6ZBXlbliWmseIEa5wi6gJTbJYdyypyswIM~rYkk-FwL0OlGygtk-ST8Q5JcDvybwGoeHXRjdKD12AU3rus9Mnj3PxE9oIl7-ndT6b2XaV3EEieF88EGAIZFOWGdVEB5nhnPZqdFiOEH-wqbs4BeSHIptj1aIb0SsmVeMNr70kOBrE4jai5LPUojGDMIuHrGvUdAsxCZjIf9WudXnIOnfpLOaWIYOcASj5n7Y8ythpSviFIAndF1G45m74Li57C-OSiPfxfk4lsEPqKsQyyMzd-TXwr2Uszhh1SHlx7Ksh3awWIIXhT~MvnQUHNQm5usQ__";

function FadeInSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle watercolor background */}
      <div className="absolute inset-0 opacity-20">
        <img src={ABOUT_BG} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <FadeInSection>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-lavender/40 to-teal/20 rounded-[24px] blur-xl" />
              <img
                src={NATURE_IMG}
                alt="Natural botanical ingredients used in Multi-Gyn products"
                className="relative rounded-[20px] shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              {/* Overlapping accent card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl p-5 shadow-lg max-w-[220px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2ABFBF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className="font-['Figtree'] text-sm font-bold text-violet-deep">Preservative Free</span>
                </div>
                <p className="font-['Noto_Sans'] text-xs text-muted-foreground leading-relaxed">
                  All products are based on natural ingredients with no harsh chemicals.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Text Side */}
          <FadeInSection className="md:pl-4">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
              Our Story
            </span>
            <h2 className="font-['Figtree'] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-violet-deep leading-tight mb-6">
              Gentle Care Rooted in{" "}
              <span className="text-teal">Nature's Wisdom</span>
            </h2>
            <p className="font-['Noto_Sans'] text-base text-foreground/75 leading-relaxed mb-6">
              Multi-Gyn is a trusted name in feminine intimate care, offering a complete range of products designed to prevent and treat common vaginal discomforts. Our formulations are based on the unique <strong className="text-violet-deep font-semibold">2QR Complex</strong> — a patented bio-active ingredient derived from natural sources.
            </p>
            <p className="font-['Noto_Sans'] text-base text-foreground/75 leading-relaxed mb-8">
              Available in over 50 countries, Multi-Gyn products work by supporting your body's natural defense mechanisms, trapping harmful bacteria while preserving healthy microflora. Safe, effective, and gentle enough for daily use.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "leaf", label: "Natural Ingredients" },
                { icon: "shield", label: "Clinically Tested" },
                { icon: "heart", label: "pH Balanced" },
                { icon: "star", label: "Preservative Free" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-lavender-light/50">
                  <div className="w-8 h-8 rounded-lg bg-lavender-light flex items-center justify-center flex-shrink-0">
                    {item.icon === "leaf" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A1A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                    )}
                    {item.icon === "shield" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A1A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    )}
                    {item.icon === "heart" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A1A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    )}
                    {item.icon === "star" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A1A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    )}
                  </div>
                  <span className="font-['Noto_Sans'] text-sm font-medium text-violet-deep">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
