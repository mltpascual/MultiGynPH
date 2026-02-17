/*
  SEO: Dynamic meta tags for each page
  Uses document.head manipulation since this is a SPA without SSR.
  Includes Open Graph, Twitter Card, and canonical URL meta tags.
*/
import { useEffect } from "react";

const GITHUB_IMAGES = "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images";
const SITE_URL = "https://multigynph.com";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "product";
}

export default function SEOHead({
  title,
  description,
  path = "/",
  image = `${GITHUB_IMAGES}/hero-bg.jpg`,
  type = "website",
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to set or create meta tags
    const setMeta = (property: string, content: string, isName = false) => {
      const attr = isName ? "name" : "property";
      let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, property);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    // Helper to set or create link tags
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    // Standard meta
    setMeta("description", description, true);
    setMeta("robots", "index, follow", true);

    // Open Graph
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:image", image);
    setMeta("og:url", `${SITE_URL}${path}`);
    setMeta("og:type", type);
    setMeta("og:site_name", "Multi-Gyn PH");
    setMeta("og:locale", "en_PH");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image", true);
    setMeta("twitter:title", title, true);
    setMeta("twitter:description", description, true);
    setMeta("twitter:image", image, true);

    // Canonical URL
    setLink("canonical", `${SITE_URL}${path}`);
  }, [title, description, path, image, type]);

  return null;
}
