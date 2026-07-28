export interface SiteConfig {
  language: string;
  brandName: string;
  copyright: string;
}

export interface NavigationConfig {
  infoLinkLabel: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href?: string;
}

export interface InfoPageConfig {
  backLinkLabel: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  contactLabel: string;
  contactEntries: ContactEntry[];
}

export interface OverlayConfig {
  frameDetailLabel: string;
  fileLabel: string;
  seriesLabel: string;
  closeLabel: string;
}

export interface ImageItem {
  src: string;
  category: string;
  title: string;
  description: string;
}

export interface GalleryConfig {
  images: ImageItem[];
}

export const siteConfig: SiteConfig = {
  language: "ar",
  brandName: "ORCHIDIA STUDIO",
  copyright: "Â© 2026 Orchidia Studio â€” Dubai, UAE",
};

export const navigationConfig: NavigationConfig = {
  infoLinkLabel: "",
};

export const infoPageConfig: InfoPageConfig = {
  backLinkLabel: "",
  eyebrow: "",
  title: "",
  paragraphs: [],
  contactLabel: "",
  contactEntries: [],
};

export const overlayConfig: OverlayConfig = {
  frameDetailLabel: "Orchidia Studio",
  fileLabel: "Collection â€¢ Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø©",
  seriesLabel: "Series â€¢ Ø§Ù„Ø³Ù„Ø³Ù„Ø©",
  closeLabel: "Close â€¢ Ø¥ØºÙ„Ø§Ù‚",
};

export const galleryConfig: GalleryConfig = {
  images: [
    { src: "/images/portfolio-purple-couture.jpg", category: "Evening Wear", title: "Purple Evening Collection", description: "" },
    { src: "/images/portfolio-grey-abaya.jpg", category: "Luxury Abayas", title: "Grey Abaya Collection", description: "" },
    { src: "/images/portfolio-black-abayas.jpg", category: "Luxury Abayas", title: "Black & Grey Collection", description: "" },
    { src: "/images/portfolio-atelier.jpg", category: "Atelier", title: "Inside the Studio", description: "" },
    { src: "/images/gallery-white-abaya.jpg", category: "Luxury Abayas", title: "White Silk Abaya", description: "" },
    { src: "/images/gallery-lavender-jalabiya.jpg", category: "Jalabiya", title: "Lavender Silk Jalabiya", description: "" },
    { src: "/images/gallery-mukhawar.jpg", category: "Mukhawar", title: "Floral Mukhawar", description: "" },
    { src: "/images/gallery-kids-couture.jpg", category: "Kids Fashion", title: "Little Couture", description: "" },
    { src: "/images/gallery-fabrics.jpg", category: "Fabrics", title: "Silk & Chiffon Library", description: "" },
    { src: "/images/gallery-sketches.jpg", category: "Design", title: "Collection Sketches", description: "" },
    { src: "/images/gallery-embroidery.jpg", category: "Craftsmanship", title: "Hand Embroidery", description: "" },
    { src: "/images/gallery-violet-gown.jpg", category: "Evening Wear", title: "Violet Cape Gown", description: "" },
    { src: "/images/gallery-black-detail.jpg", category: "Craftsmanship", title: "Crystal Sleeve Detail", description: "" },
    { src: "/images/gallery-boutique.jpg", category: "Boutique", title: "Retail Experience", description: "" },
  ],
};
