export type PortfolioProject = {
  title: string;
  category: string;
  summary: string;
  result: string;
  images: string[];
};

export type ContactPlaceholders = {
  email: string;
  phone: string;
  secondaryPhone: string;
  whatsappLink: string;
  footerEmail: string;
  footerPhone: string;
  footerSecondaryPhone: string;
};

// Replace only the portfolio placeholders below with real client work when available.
export const portfolioProjects: PortfolioProject[] = [
  {
    title: "E-commerce Website",
    category: "Premium Storefront Design",
    summary:
      "A refined e-commerce experience built for modern retail presentation, with a clean editorial layout, elevated product discovery, and a polished interface that makes browsing feel premium from the first screen.",
    result:
      "Result: Clear product navigation, stronger visual trust, and a storefront structure designed to support conversion-ready shopping journeys.",
    images: ["/portfolio/image1.png", "/portfolio/image2.png"]
  }
];

// Replace only the contact placeholders below with live business details.
export const contactPlaceholders: ContactPlaceholders = {
  email: "welvixoff@gmail.com",
  phone: "7397585684",
  secondaryPhone: "8668157340",
  whatsappLink: "https://wa.me/917397585684",
  footerEmail: "welvixoff@gmail.com",
  footerPhone: "7397585684",
  footerSecondaryPhone: "8668157340"
};
