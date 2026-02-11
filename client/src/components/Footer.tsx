/*
  DESIGN: Fluid Wellness — Soft Modernism
  Footer: Clean, organized footer with brand info,
  quick links, and social media.
*/

export default function Footer() {
  return (
    <footer className="bg-violet-deep text-white relative">
      {/* Wave top - background fills the page bg color, wave fills the footer color */}
      <div className="bg-background -mt-[1px]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: '80px' }}>
          <path
            d="M0 80L48 72C96 64 192 48 288 44C384 40 480 48 576 56C672 64 768 60 864 52C960 44 1056 32 1152 32C1248 32 1344 44 1392 50L1440 56V80H0V80Z"
            fill="oklch(0.32 0.14 300)"
          />
        </svg>
      </div>

      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="17" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M12 18C12 14.686 14.686 12 18 12C21.314 12 24 14.686 24 18C24 21.314 21.314 24 18 24" stroke="#2ABFBF" strokeWidth="2" strokeLinecap="round" />
                <circle cx="18" cy="18" r="3" fill="white" opacity="0.8" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-['Figtree'] font-bold text-base text-white">Multi-Gyn</span>
                <span className="font-['Figtree'] text-[9px] font-medium tracking-[0.2em] uppercase text-teal">PH</span>
              </div>
            </div>
            <p className="font-['Noto_Sans'] text-sm text-white/50 leading-relaxed mb-6">
              Natural, clinically-proven intimate care solutions for women. Trusted worldwide for over 20 years.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/MultiGynPh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal/30 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/multigynmysg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal/30 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Figtree'] text-sm font-bold uppercase tracking-wider text-white/80 mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/products/actigel" className="font-['Noto_Sans'] text-sm text-white/45 hover:text-teal transition-colors duration-200">
                  Multi-Gyn ActiGel
                </a>
              </li>
              <li>
                <a href="/products/femiwash" className="font-['Noto_Sans'] text-sm text-white/45 hover:text-teal transition-colors duration-200">
                  Multi-Gyn FemiWash
                </a>
              </li>
              <li>
                <a href="/products/liquigel" className="font-['Noto_Sans'] text-sm text-white/45 hover:text-teal transition-colors duration-200">
                  Multi-Gyn LiquiGel
                </a>
              </li>
              <li>
                <a href="/products/floraplus" className="font-['Noto_Sans'] text-sm text-white/45 hover:text-teal transition-colors duration-200">
                  Multi-Gyn FloraPlus
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-['Figtree'] text-sm font-bold uppercase tracking-wider text-white/80 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Multi-Gyn", href: "#about" },
                { label: "How It Works", href: "#why" },
                { label: "Compare Products", href: "#compare" },
                { label: "Where to Buy", href: "#where-to-buy" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "#faq" },
                { label: "Official Website", href: "https://multi-gyn.com" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-['Noto_Sans'] text-sm text-white/45 hover:text-teal transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Figtree'] text-sm font-bold uppercase tracking-wider text-white/80 mb-4">Where to Buy</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Shopee Philippines", href: "https://shopee.ph/list/multi%20gyn" },
                { label: "Lazada Philippines", href: "https://www.lazada.com.ph/catalog/?q=multi+gyn" },
                { label: "Mercury Drug", href: "#where-to-buy" },
                { label: "Watsons", href: "#where-to-buy" },
                { label: "Rose Pharmacy", href: "#where-to-buy" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-['Noto_Sans'] text-sm text-white/45 hover:text-teal transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-['Noto_Sans'] text-xs text-white/40 leading-relaxed">
                For inquiries, reach us at our{" "}
                <a href="https://www.facebook.com/MultiGynPh/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                  Facebook page
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-['Noto_Sans'] text-xs text-white/30">
            &copy; {new Date().getFullYear()} Multi-Gyn PH. All rights reserved. Distributed by EP Plus Group.
          </p>
          <div className="flex gap-6">
            <a href="https://multi-gyn.com" target="_blank" rel="noopener noreferrer" className="font-['Noto_Sans'] text-xs text-white/30 hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="https://multi-gyn.com" target="_blank" rel="noopener noreferrer" className="font-['Noto_Sans'] text-xs text-white/30 hover:text-white/50 transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
