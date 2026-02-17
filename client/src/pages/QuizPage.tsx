/*
  DESIGN: Fluid Wellness — Soft Modernism
  Page: Product Quiz / Recommender
  An interactive 5-question flow that recommends the right Multi-Gyn product.
  Colors: violet-deep headings, teal accents, lavender-light borders
  Fonts: Figtree (headings), Noto Sans (body)
*/
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles, CheckCircle, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

/* ─── QUIZ DATA ─── */
interface QuizOption {
  label: string;
  scores: Record<string, number>;
}

interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: QuizOption[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is your primary intimate health concern?",
    subtitle: "Select the option that best describes what you're experiencing.",
    options: [
      { label: "Unusual discharge or odor", scores: { actigel: 3, femiwash: 1, liquigel: 0, floraplus: 1 } },
      { label: "Vaginal dryness or discomfort", scores: { actigel: 0, femiwash: 0, liquigel: 3, floraplus: 1 } },
      { label: "Itching or irritation", scores: { actigel: 1, femiwash: 0, liquigel: 1, floraplus: 3 } },
      { label: "I want to maintain daily hygiene", scores: { actigel: 0, femiwash: 3, liquigel: 0, floraplus: 0 } },
      { label: "General prevention and wellness", scores: { actigel: 1, femiwash: 2, liquigel: 1, floraplus: 1 } },
    ],
  },
  {
    id: 2,
    question: "How often do you experience this concern?",
    subtitle: "This helps us understand the severity and recommend the right approach.",
    options: [
      { label: "It's a recurring issue (monthly or more)", scores: { actigel: 2, femiwash: 1, liquigel: 1, floraplus: 2 } },
      { label: "Occasionally (a few times a year)", scores: { actigel: 1, femiwash: 1, liquigel: 1, floraplus: 1 } },
      { label: "Currently experiencing it now", scores: { actigel: 2, femiwash: 0, liquigel: 2, floraplus: 2 } },
      { label: "I don't have a specific issue — just prevention", scores: { actigel: 0, femiwash: 3, liquigel: 0, floraplus: 0 } },
    ],
  },
  {
    id: 3,
    question: "Which symptoms are most bothersome?",
    subtitle: "Select the symptom that affects you the most right now.",
    options: [
      { label: "Fishy or unpleasant odor", scores: { actigel: 3, femiwash: 1, liquigel: 0, floraplus: 0 } },
      { label: "Dryness during intimacy or daily life", scores: { actigel: 0, femiwash: 0, liquigel: 3, floraplus: 0 } },
      { label: "White, crumbly discharge with itch", scores: { actigel: 0, femiwash: 0, liquigel: 0, floraplus: 3 } },
      { label: "General sensitivity or mild irritation", scores: { actigel: 1, femiwash: 2, liquigel: 1, floraplus: 1 } },
      { label: "No specific symptoms — just want to stay fresh", scores: { actigel: 0, femiwash: 3, liquigel: 0, floraplus: 0 } },
    ],
  },
  {
    id: 4,
    question: "What type of product are you looking for?",
    subtitle: "Different formats suit different needs and preferences.",
    options: [
      { label: "A treatment gel for targeted relief", scores: { actigel: 2, femiwash: 0, liquigel: 2, floraplus: 1 } },
      { label: "A daily wash for routine hygiene", scores: { actigel: 0, femiwash: 3, liquigel: 0, floraplus: 0 } },
      { label: "A moisturizing gel for comfort", scores: { actigel: 0, femiwash: 0, liquigel: 3, floraplus: 0 } },
      { label: "A flora-restoring treatment", scores: { actigel: 0, femiwash: 0, liquigel: 0, floraplus: 3 } },
    ],
  },
  {
    id: 5,
    question: "Any additional considerations?",
    subtitle: "Let us know if any of these apply to you.",
    options: [
      { label: "I'm currently pregnant or breastfeeding", scores: { actigel: 1, femiwash: 1, liquigel: 1, floraplus: 1 } },
      { label: "I prefer natural, hormone-free products", scores: { actigel: 1, femiwash: 1, liquigel: 1, floraplus: 1 } },
      { label: "I've been taking antibiotics recently", scores: { actigel: 1, femiwash: 1, liquigel: 0, floraplus: 2 } },
      { label: "I'm going through menopause", scores: { actigel: 0, femiwash: 1, liquigel: 3, floraplus: 0 } },
      { label: "None of the above", scores: { actigel: 0, femiwash: 0, liquigel: 0, floraplus: 0 } },
    ],
  },
];

/* ─── PRODUCT RESULTS DATA ─── */
interface ProductResult {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  color: string;
  benefits: string[];
}

const productResults: Record<string, ProductResult> = {
  actigel: {
    id: "actigel",
    name: "Multi-Gyn ActiGel",
    tagline: "BV Treatment & Prevention",
    description: "ActiGel is your ideal solution for treating and preventing bacterial vaginosis. Its unique 2QR Complex blocks harmful bacteria while preserving your natural flora, providing fast relief from odor and discharge.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
    href: "/products/actigel",
    color: "from-violet-deep to-violet-mid",
    benefits: ["Treats BV symptoms effectively", "Prevents recurrence", "Safe during pregnancy", "No antibiotics needed"],
  },
  femiwash: {
    id: "femiwash",
    name: "Multi-Gyn FemiWash",
    tagline: "Daily Intimate Hygiene",
    description: "FemiWash is the perfect daily companion for gentle intimate hygiene. Its soap-free, pH-balanced formula cleanses without disrupting your natural balance, keeping you fresh and comfortable all day.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
    href: "/products/femiwash",
    color: "from-teal-dark to-teal",
    benefits: ["Soap-free & pH-balanced", "Gentle for daily use", "Preserves natural flora", "Suitable for sensitive skin"],
  },
  liquigel: {
    id: "liquigel",
    name: "Multi-Gyn LiquiGel",
    tagline: "Vaginal Dryness Relief",
    description: "LiquiGel provides long-lasting moisture and relief from vaginal dryness. Its gentle, bio-active formula hydrates and soothes, restoring comfort during daily activities and intimate moments.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
    href: "/products/liquigel",
    color: "from-rose-500 to-pink-400",
    benefits: ["Long-lasting hydration", "Relieves dryness & discomfort", "Gentle bio-active formula", "Ideal for menopause"],
  },
  floraplus: {
    id: "floraplus",
    name: "Multi-Gyn FloraPlus",
    tagline: "Vaginal Yeast Relief",
    description: "FloraPlus is specifically designed to relieve itch, irritation, and discharge caused by vaginal yeast. It restores healthy vaginal flora with prebiotics while the 2QR Complex provides natural protection.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
    href: "/products/floraplus",
    color: "from-emerald-600 to-green-500",
    benefits: ["Relieves yeast symptoms", "Restores healthy flora", "Contains prebiotics", "Natural ingredients"],
  },
};

/* ─── QUIZ PAGE COMPONENT ─── */
export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro, 1-5 = questions, 6 = result
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const totalQuestions = questions.length;

  const recommendedProduct = useMemo(() => {
    if (answers.length < totalQuestions) return null;

    const scores: Record<string, number> = { actigel: 0, femiwash: 0, liquigel: 0, floraplus: 0 };
    answers.forEach((answerIdx, qIdx) => {
      const option = questions[qIdx].options[answerIdx];
      if (option) {
        Object.entries(option.scores).forEach(([product, score]) => {
          scores[product] += score;
        });
      }
    });

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return {
      primary: productResults[sorted[0][0]],
      secondary: productResults[sorted[1][0]],
      scores,
    };
  }, [answers]);

  const handleSelectOption = (optionIdx: number) => {
    setSelectedOption(optionIdx);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep <= 1) {
      setCurrentStep(0);
      setAnswers([]);
      setSelectedOption(null);
      return;
    }
    const newAnswers = answers.slice(0, -1);
    setAnswers(newAnswers);
    setSelectedOption(null);
    setCurrentStep(currentStep - 1);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setSelectedOption(null);
  };

  const progressPercent = currentStep === 0 ? 0 : Math.min((currentStep / totalQuestions) * 100, 100);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
      <SEOHead
        title="Product Quiz — Find Your Multi-Gyn Solution | Multi-Gyn PH"
        description="Answer 5 quick questions to discover which Multi-Gyn feminine care product is right for your specific intimate health concern."
        path="/quiz"
      />
      {/* ─── NAVBAR ─── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-lavender-light/30">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-deep to-teal flex items-center justify-center">
              <span className="text-white font-['Figtree'] text-xs font-bold">MG</span>
            </div>
            <span className="font-['Figtree'] font-bold text-violet-deep text-lg">
              Multi-Gyn <span className="text-xs font-medium text-foreground/40 ml-0.5">PH</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/#products" className="font-['Noto_Sans'] text-sm text-foreground/60 hover:text-violet-deep transition-colors hidden sm:block">
              Products
            </Link>
            <a
              href="https://shopee.ph/list/multi%20gyn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-violet-deep text-white font-['Figtree'] font-semibold text-sm rounded-full hover:bg-violet-mid transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* ─── PROGRESS BAR ─── */}
        {currentStep > 0 && currentStep <= totalQuestions && (
          <div className="w-full h-1 bg-lavender-light/30">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-deep to-teal"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* ─── INTRO SCREEN ─── */}
          {currentStep === 0 && (
            <motion.section
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-16 md:py-24"
            >
              <div className="container max-w-3xl text-center">
                {/* Decorative icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-deep/10 to-teal/10 flex items-center justify-center mx-auto mb-8 border border-lavender-light/40">
                  <Sparkles size={36} className="text-violet-deep" />
                </div>

                <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
                  Product Recommender
                </span>
                <h1 className="font-['Figtree'] text-4xl sm:text-5xl font-bold text-violet-deep leading-tight mb-6">
                  Find Your Perfect{" "}
                  <span className="text-teal">Multi-Gyn</span> Product
                </h1>
                <p className="font-['Noto_Sans'] text-lg text-foreground/55 leading-relaxed mb-10 max-w-xl mx-auto">
                  Answer 5 quick questions about your intimate health needs, and we'll recommend the ideal Multi-Gyn product for you. Takes less than 2 minutes.
                </p>

                <button
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-violet-deep text-white font-['Figtree'] font-semibold text-base rounded-full hover:bg-violet-mid transition-all duration-300 shadow-[0_4px_24px_rgba(75,0,130,0.2)] hover:shadow-[0_6px_32px_rgba(75,0,130,0.3)] hover:translate-y-[-2px]"
                >
                  Start the Quiz <ArrowRight size={18} />
                </button>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-lavender-light/30">
                  <div className="flex items-center gap-2 text-foreground/40">
                    <ShieldCheck size={16} />
                    <span className="font-['Noto_Sans'] text-sm">No personal data collected</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/40">
                    <CheckCircle size={16} />
                    <span className="font-['Noto_Sans'] text-sm">Based on clinical guidelines</span>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* ─── QUESTION SCREENS ─── */}
          {currentStep >= 1 && currentStep <= totalQuestions && (
            <motion.section
              key={`q-${currentStep}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="py-12 md:py-20"
            >
              <div className="container max-w-2xl">
                {/* Step counter */}
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1.5 font-['Noto_Sans'] text-sm text-foreground/50 hover:text-violet-deep transition-colors"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                  <span className="font-['Figtree'] text-sm font-semibold text-foreground/40">
                    Question {currentStep} of {totalQuestions}
                  </span>
                </div>

                {/* Question */}
                <h2 className="font-['Figtree'] text-2xl sm:text-3xl font-bold text-violet-deep leading-tight mb-3">
                  {questions[currentStep - 1].question}
                </h2>
                <p className="font-['Noto_Sans'] text-base text-foreground/50 mb-8">
                  {questions[currentStep - 1].subtitle}
                </p>

                {/* Options */}
                <div className="space-y-3">
                  {questions[currentStep - 1].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 group ${
                        selectedOption === idx
                          ? "border-teal bg-teal/5 shadow-[0_0_0_1px_rgba(42,191,191,0.15)]"
                          : "border-lavender-light/40 bg-white hover:border-lavender/60 hover:bg-lavender-light/10"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                          selectedOption === idx
                            ? "border-teal bg-teal"
                            : "border-foreground/20 group-hover:border-foreground/35"
                        }`}>
                          {selectedOption === idx && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-white"
                            />
                          )}
                        </div>
                        <span className={`font-['Noto_Sans'] text-base transition-colors ${
                          selectedOption === idx ? "text-violet-deep font-medium" : "text-foreground/70"
                        }`}>
                          {option.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Next button */}
                <div className="mt-10 flex justify-end">
                  <button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className={`inline-flex items-center gap-2 px-7 py-3.5 font-['Figtree'] font-semibold text-base rounded-full transition-all duration-300 ${
                      selectedOption !== null
                        ? "bg-violet-deep text-white hover:bg-violet-mid shadow-[0_4px_20px_rgba(75,0,130,0.2)] hover:translate-y-[-1px]"
                        : "bg-foreground/10 text-foreground/30 cursor-not-allowed"
                    }`}
                  >
                    {currentStep === totalQuestions ? "See My Result" : "Next Question"} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.section>
          )}

          {/* ─── RESULT SCREEN ─── */}
          {currentStep > totalQuestions && recommendedProduct && (
            <motion.section
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="py-12 md:py-20"
            >
              <div className="container max-w-4xl">
                {/* Header */}
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle size={32} className="text-teal" />
                  </motion.div>
                  <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-3">
                    Your Personalized Recommendation
                  </span>
                  <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight">
                    We Recommend
                  </h2>
                </div>

                {/* Primary recommendation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative rounded-2xl overflow-hidden mb-8"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${recommendedProduct.primary.color}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_50%)]" />

                  <div className="relative p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      {/* Product info */}
                      <div className="flex-1 text-center md:text-left">
                        <span className="inline-block px-3 py-1 bg-white/15 text-white/80 font-['Figtree'] text-xs font-semibold rounded-full mb-4">
                          Best Match
                        </span>
                        <h3 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-white mb-2">
                          {recommendedProduct.primary.name}
                        </h3>
                        <p className="font-['Figtree'] text-base text-white/60 font-medium mb-4">
                          {recommendedProduct.primary.tagline}
                        </p>
                        <p className="font-['Noto_Sans'] text-base text-white/55 leading-relaxed mb-6 max-w-lg">
                          {recommendedProduct.primary.description}
                        </p>

                        {/* Benefits */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                          {recommendedProduct.primary.benefits.map((b) => (
                            <div key={b} className="flex items-center gap-2">
                              <CheckCircle size={14} className="text-white/50 flex-shrink-0" />
                              <span className="font-['Noto_Sans'] text-sm text-white/60">{b}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                          <Link
                            href={recommendedProduct.primary.href}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-violet-deep font-['Figtree'] font-semibold rounded-full hover:bg-white/90 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                          >
                            Learn More <ArrowRight size={16} />
                          </Link>
                          <a
                            href="https://shopee.ph/list/multi%20gyn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-7 py-3.5 bg-white/10 text-white font-['Figtree'] font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary recommendation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-2xl border border-lavender-light/40 bg-white p-6 md:p-8 mb-10"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <div className="flex-1">
                      <span className="inline-block px-2.5 py-0.5 bg-lavender-light/40 text-violet-deep/70 font-['Figtree'] text-xs font-semibold rounded-full mb-2">
                        Also Consider
                      </span>
                      <h4 className="font-['Figtree'] text-xl font-bold text-violet-deep mb-1">
                        {recommendedProduct.secondary.name}
                      </h4>
                      <p className="font-['Noto_Sans'] text-sm text-foreground/50">
                        {recommendedProduct.secondary.tagline} — {recommendedProduct.secondary.description.slice(0, 120)}...
                      </p>
                    </div>
                    <Link
                      href={recommendedProduct.secondary.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-deep/5 text-violet-deep font-['Figtree'] font-semibold text-sm rounded-full border border-violet-deep/15 hover:bg-violet-deep/10 transition-colors flex-shrink-0"
                    >
                      View Product <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>

                {/* Actions */}
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground/5 text-foreground/60 font-['Figtree'] font-semibold text-sm rounded-full hover:bg-foreground/10 transition-colors"
                  >
                    <RotateCcw size={14} /> Retake Quiz
                  </button>
                  <Link
                    href="/#compare"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground/5 text-foreground/60 font-['Figtree'] font-semibold text-sm rounded-full hover:bg-foreground/10 transition-colors"
                  >
                    Compare All Products
                  </Link>
                </div>

                {/* Disclaimer */}
                <div className="mt-12 p-5 rounded-xl bg-lavender-light/15 border border-lavender-light/25 text-center">
                  <p className="font-['Noto_Sans'] text-xs text-foreground/40 leading-relaxed max-w-lg mx-auto">
                    <strong className="text-foreground/50">Disclaimer:</strong> This quiz provides general product recommendations based on your responses and is not a substitute for professional medical advice. If you have persistent symptoms, please consult your healthcare provider.
                  </p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
