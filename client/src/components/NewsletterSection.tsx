/*
  DESIGN: Fluid Wellness — Soft Modernism
  Section: Newsletter Signup
  Two variants: "full" for homepage, "compact" for blog article bottom
  Colors: violet-deep headings, teal accents, lavender-light borders
  Fonts: Figtree (headings), Noto Sans (body)
*/
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, CheckCircle, Sparkles, Heart, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface NewsletterSectionProps {
  variant?: "full" | "compact";
}

export default function NewsletterSection({ variant = "full" }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubmitted(true);
    toast.success("You're subscribed! Check your inbox for a welcome email.");
  };

  if (variant === "compact") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-12 rounded-2xl bg-gradient-to-br from-lavender-light/40 via-white to-teal/5 border border-lavender-light/50 p-6 md:p-8"
      >
        {!submitted ? (
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Mail size={15} className="text-teal" />
                </div>
                <h4 className="font-['Figtree'] text-base font-bold text-violet-deep">
                  Get Health Tips in Your Inbox
                </h4>
              </div>
              <p className="font-['Noto_Sans'] text-sm text-foreground/55 leading-relaxed">
                Weekly intimate health insights, product tips, and exclusive offers from Multi-Gyn PH.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2 flex-shrink-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full md:w-56 px-4 py-2.5 rounded-full border border-lavender-light/60 bg-white text-sm font-['Noto_Sans'] text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/50 transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-teal text-white font-['Figtree'] font-semibold text-sm rounded-full hover:bg-teal-dark transition-colors duration-200 shadow-[0_2px_12px_rgba(42,191,191,0.25)] flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        ) : (
          <div className="flex items-center gap-3 py-2">
            <CheckCircle size={22} className="text-teal flex-shrink-0" />
            <div>
              <p className="font-['Figtree'] text-base font-bold text-violet-deep">You're subscribed!</p>
              <p className="font-['Noto_Sans'] text-sm text-foreground/55">We'll send you weekly health tips and exclusive offers.</p>
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  /* ─── FULL HOMEPAGE VARIANT ─── */
  return (
    <section id="newsletter" className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-lavender-light/10 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-lavender/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-deep via-violet-mid to-violet-deep" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(42,191,191,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(196,167,215,0.15),transparent_50%)]" />
          {/* Decorative dots pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }} />

          <div className="relative px-6 py-14 md:px-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <span className="inline-flex items-center gap-2 font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-5">
                    <Sparkles size={14} /> Stay Informed
                  </span>
                  <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
                    Your Weekly Dose of{" "}
                    <span className="text-teal">Intimate Wellness</span>
                  </h2>
                  <p className="font-['Noto_Sans'] text-base text-white/60 leading-relaxed mb-8 max-w-md">
                    Join thousands of women receiving expert health tips, product guides, and exclusive promotions straight to their inbox.
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {[
                      "Expert-backed intimate health articles",
                      "Exclusive discounts and promotions",
                      "New product announcements",
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={12} className="text-teal" />
                        </div>
                        <span className="font-['Noto_Sans'] text-sm text-white/55">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {!submitted ? (
                  <div className="bg-white/[0.07] backdrop-blur-md rounded-2xl border border-white/10 p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-11 h-11 rounded-xl bg-teal/15 flex items-center justify-center">
                        <Mail size={20} className="text-teal" />
                      </div>
                      <div>
                        <h3 className="font-['Figtree'] text-lg font-bold text-white">Subscribe Free</h3>
                        <p className="font-['Noto_Sans'] text-xs text-white/40">No spam, unsubscribe anytime</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="font-['Noto_Sans'] text-xs text-white/40 mb-1.5 block">Email Address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/10 text-white text-sm font-['Noto_Sans'] placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal/40 transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-teal text-white font-['Figtree'] font-semibold rounded-xl hover:bg-teal-dark transition-all duration-300 shadow-[0_4px_20px_rgba(42,191,191,0.3)] hover:shadow-[0_6px_28px_rgba(42,191,191,0.45)] hover:translate-y-[-1px]"
                      >
                        Subscribe Now <ArrowRight size={16} />
                      </button>
                    </form>

                    <div className="flex items-center gap-2 mt-5 pt-4 border-t border-white/[0.06]">
                      <Heart size={12} className="text-teal/60" />
                      <p className="font-['Noto_Sans'] text-[11px] text-white/30">
                        Trusted by 5,000+ subscribers across the Philippines
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/[0.07] backdrop-blur-md rounded-2xl border border-teal/20 p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="text-teal" />
                    </div>
                    <h3 className="font-['Figtree'] text-2xl font-bold text-white mb-3">Welcome Aboard!</h3>
                    <p className="font-['Noto_Sans'] text-sm text-white/55 leading-relaxed mb-6 max-w-sm mx-auto">
                      You've successfully subscribed to Multi-Gyn PH's wellness newsletter. Check your inbox for a welcome email with your first health tip.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <a href="/#products" className="inline-flex items-center px-5 py-2.5 bg-teal text-white font-['Figtree'] font-semibold text-sm rounded-full hover:bg-teal-dark transition-colors">
                        Explore Products
                      </a>
                      <a href="/blog" className="inline-flex items-center px-5 py-2.5 bg-white/10 text-white font-['Figtree'] font-semibold text-sm rounded-full border border-white/15 hover:bg-white/20 transition-colors">
                        Read Blog
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
