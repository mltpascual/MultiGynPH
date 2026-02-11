/*
  DESIGN: Fluid Wellness — Soft Modernism
  Where to Buy: Philippine pharmacy locations and online retailers
  with interactive cards and map-style layout.
*/
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, ShoppingBag, Store, ExternalLink } from "lucide-react";

const pharmacyChains = [
  {
    name: "Mercury Drug",
    type: "Pharmacy Chain",
    description: "The Philippines' largest pharmacy chain with over 1,200 branches nationwide. Find Multi-Gyn products at the feminine care aisle.",
    locations: "1,200+ branches nationwide",
    icon: "pharmacy",
    color: "#4A1A6B",
  },
  {
    name: "Watsons",
    type: "Health & Beauty",
    description: "Asia's leading health and beauty retailer. Multi-Gyn is available at Watsons stores in major malls across the Philippines.",
    locations: "800+ stores in major malls",
    icon: "store",
    color: "#2ABFBF",
  },
  {
    name: "Rose Pharmacy",
    type: "Pharmacy Chain",
    description: "One of the Philippines' trusted pharmacy chains, particularly strong in Visayas and Mindanao regions.",
    locations: "400+ branches in Visayas & Mindanao",
    icon: "pharmacy",
    color: "#C4A7D7",
  },
];

const onlineStores = [
  {
    name: "Shopee Philippines",
    url: "https://shopee.ph/list/multi%20gyn",
    description: "Official Multi-Gyn products on Shopee with free shipping options and exclusive deals.",
    badge: "Official Store",
    color: "#EE4D2D",
  },
  {
    name: "Lazada Philippines",
    url: "https://www.lazada.com.ph/catalog/?q=multi+gyn",
    description: "Shop Multi-Gyn on Lazada with COD available and regular sale events.",
    badge: "Fast Delivery",
    color: "#0F146D",
  },
];

const majorCities = [
  "Metro Manila", "Cebu City", "Davao City", "Quezon City",
  "Makati", "Taguig (BGC)", "Pasig", "Mandaluyong",
  "Alabang", "Antipolo", "Iloilo City", "Bacolod",
];

type TabType = "pharmacies" | "online";

export default function WhereToBuySection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<TabType>("pharmacies");

  return (
    <section id="where-to-buy" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-lavender-light/30 to-background" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
            Where to Buy
          </span>
          <h2 className="font-['Figtree'] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-violet-deep leading-tight mb-5">
            Find Multi-Gyn Near You
          </h2>
          <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
            Multi-Gyn products are available at leading pharmacies and online retailers across the Philippines.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-[0_2px_16px_rgba(74,26,107,0.08)] border border-lavender-light/50">
            <button
              onClick={() => setActiveTab("pharmacies")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-['Figtree'] text-sm font-semibold transition-all duration-300 ${
                activeTab === "pharmacies"
                  ? "bg-violet-deep text-white shadow-md"
                  : "text-foreground/60 hover:text-violet-deep"
              }`}
            >
              <Store size={16} />
              Pharmacies
            </button>
            <button
              onClick={() => setActiveTab("online")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-['Figtree'] text-sm font-semibold transition-all duration-300 ${
                activeTab === "online"
                  ? "bg-violet-deep text-white shadow-md"
                  : "text-foreground/60 hover:text-violet-deep"
              }`}
            >
              <ShoppingBag size={16} />
              Shop Online
            </button>
          </div>
        </motion.div>

        {/* Pharmacies Tab */}
        {activeTab === "pharmacies" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Pharmacy Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {pharmacyChains.map((pharmacy, index) => (
                <motion.div
                  key={pharmacy.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(74,26,107,0.06)] border border-lavender-light/50 hover:shadow-[0_8px_32px_rgba(74,26,107,0.1)] transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${pharmacy.color}10` }}
                    >
                      {pharmacy.icon === "pharmacy" ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={pharmacy.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 21h18" />
                          <path d="M5 21V7l8-4v18" />
                          <path d="M19 21V11l-6-4" />
                          <path d="M9 9v.01" />
                          <path d="M9 12v.01" />
                          <path d="M9 15v.01" />
                          <path d="M9 18v.01" />
                        </svg>
                      ) : (
                        <Store size={22} style={{ color: pharmacy.color }} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-['Figtree'] text-lg font-bold text-violet-deep">
                        {pharmacy.name}
                      </h3>
                      <span className="font-['Noto_Sans'] text-xs font-medium text-teal uppercase tracking-wider">
                        {pharmacy.type}
                      </span>
                    </div>
                  </div>
                  <p className="font-['Noto_Sans'] text-sm text-foreground/65 leading-relaxed mb-4">
                    {pharmacy.description}
                  </p>
                  <div className="flex items-center gap-2 text-foreground/50">
                    <MapPin size={14} />
                    <span className="font-['Noto_Sans'] text-xs font-medium">{pharmacy.locations}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* City Coverage Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-violet-deep to-violet-mid rounded-2xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
                <div>
                  <h3 className="font-['Figtree'] text-xl font-bold text-white mb-2">
                    Available in Major Cities
                  </h3>
                  <p className="font-['Noto_Sans'] text-sm text-white/60">
                    Find Multi-Gyn at pharmacy branches in these key locations
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <MapPin size={16} className="text-teal" />
                  <span className="font-['Figtree'] text-sm font-semibold text-white">
                    2,400+ Pharmacy Locations
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {majorCities.map((city, index) => (
                  <motion.span
                    key={city}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-white/80 font-['Noto_Sans'] text-sm hover:bg-white/20 transition-colors duration-200"
                  >
                    <MapPin size={12} className="text-teal" />
                    {city}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Online Tab */}
        {activeTab === "online" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
              {onlineStores.map((store, index) => (
                <motion.a
                  key={store.name}
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(74,26,107,0.06)] border border-lavender-light/50 hover:shadow-[0_8px_32px_rgba(74,26,107,0.12)] transition-all duration-300 hover:translate-y-[-3px] block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className="inline-block font-['Noto_Sans'] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3"
                        style={{
                          backgroundColor: `${store.color}12`,
                          color: store.color,
                        }}
                      >
                        {store.badge}
                      </span>
                      <h3 className="font-['Figtree'] text-xl font-bold text-violet-deep group-hover:text-teal transition-colors duration-300">
                        {store.name}
                      </h3>
                    </div>
                    <ExternalLink size={20} className="text-lavender group-hover:text-teal transition-colors duration-300 flex-shrink-0 mt-1" />
                  </div>
                  <p className="font-['Noto_Sans'] text-sm text-foreground/65 leading-relaxed mb-5">
                    {store.description}
                  </p>
                  <div className="inline-flex items-center gap-2 font-['Figtree'] text-sm font-semibold text-violet-deep group-hover:text-teal transition-colors duration-300">
                    Shop Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Delivery Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-r from-teal/10 to-lavender-light/30 rounded-2xl p-8 text-center"
            >
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal/15 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ABFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="font-['Figtree'] text-sm font-bold text-violet-deep block">Free Shipping</span>
                    <span className="font-['Noto_Sans'] text-xs text-foreground/55">On selected orders</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal/15 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ABFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="font-['Figtree'] text-sm font-bold text-violet-deep block">100% Authentic</span>
                    <span className="font-['Noto_Sans'] text-xs text-foreground/55">Guaranteed genuine products</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal/15 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ABFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="font-['Figtree'] text-sm font-bold text-violet-deep block">COD Available</span>
                    <span className="font-['Noto_Sans'] text-xs text-foreground/55">Cash on delivery option</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
