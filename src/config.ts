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
  copyright: "© 2026 Orchidia Studio — Dubai, UAE",
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
  fileLabel: "Collection • المجموعة",
  seriesLabel: "Series • السلسلة",
  closeLabel: "Close • إغلاق",
};

export const galleryConfig: GalleryConfig = {
  images: [
    { src: "/orchidia-studio/images/portfolio-purple-couture.jpg", category: "Evening Wear", title: "Purple Evening Collection", description: "" },
    { src: "/orchidia-studio/images/portfolio-grey-abaya.jpg", category: "Luxury Abayas", title: "Grey Abaya Collection", description: "" },
    { src: "/orchidia-studio/images/portfolio-black-abayas.jpg", category: "Luxury Abayas", title: "Black & Grey Collection", description: "" },
    { src: "/orchidia-studio/images/portfolio-atelier.jpg", category: "Atelier", title: "Inside the Studio", description: "" },
    { src: "/orchidia-studio/images/gallery-white-abaya.jpg", category: "Luxury Abayas", title: "White Silk Abaya", description: "" },
    { src: "/orchidia-studio/images/gallery-lavender-jalabiya.jpg", category: "Jalabiya", title: "Lavender Silk Jalabiya", description: "" },
    { src: "/orchidia-studio/images/gallery-mukhawar.jpg", category: "Mukhawar", title: "Floral Mukhawar", description: "" },
    { src: "/orchidia-studio/images/gallery-kids-couture.jpg", category: "Kids Fashion", title: "Little Couture", description: "" },
    { src: "/orchidia-studio/images/gallery-fabrics.jpg", category: "Fabrics", title: "Silk & Chiffon Library", description: "" },
    { src: "/orchidia-studio/images/gallery-sketches.jpg", category: "Design", title: "Collection Sketches", description: "" },
    { src: "/orchidia-studio/images/gallery-embroidery.jpg", category: "Craftsmanship", title: "Hand Embroidery", description: "" },
    { src: "/orchidia-studio/images/gallery-violet-gown.jpg", category: "Evening Wear", title: "Violet Cape Gown", description: "" },
    { src: "/orchidia-studio/images/gallery-black-detail.jpg", category: "Craftsmanship", title: "Crystal Sleeve Detail", description: "" },
    { src: "/orchidia-studio/images/gallery-boutique.jpg", category: "Boutique", title: "Retail Experience", description: "" },
  ],
};
