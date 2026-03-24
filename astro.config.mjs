import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://ecompilot.org",
  integrations: [
    starlight({
      title: "EcomPilot",
      logo: {
        src: "./src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/yakden/ecompilot.org",
      },
      customCss: ["./src/styles/custom.css"],
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
      },
      sidebar: [
        {
          label: "Overview",
          items: [
            { label: "What is EcomPilot?", link: "/overview/what-is-ecompilot/" },
            { label: "Architecture", link: "/overview/architecture/" },
            { label: "Tech Stack", link: "/overview/tech-stack/" },
          ],
        },
        {
          label: "Getting Started",
          items: [
            { label: "Quick Start", link: "/getting-started/quick-start/" },
            { label: "Create Account", link: "/getting-started/create-account/" },
            { label: "Connect Marketplace", link: "/getting-started/connect-marketplace/" },
          ],
        },
        {
          label: "Features",
          collapsed: false,
          items: [
            { label: "Niche Analysis", link: "/features/niche-analysis/" },
            { label: "Margin Calculator", link: "/features/margin-calculator/" },
            { label: "Supplier Database", link: "/features/supplier-database/" },
            { label: "AI Assistant", link: "/features/ai-assistant/" },
            { label: "Barcode Scanner", link: "/features/barcode-scanner/" },
            { label: "KSeF e-Invoices", link: "/features/ksef-invoices/" },
            { label: "Inventory Management", link: "/features/inventory-management/" },
            { label: "Legal Guides", link: "/features/legal-guides/" },
            { label: "Contractor Verification", link: "/features/contractor-verification/" },
            { label: "Paczkomat Locator", link: "/features/paczkomat-locator/" },
            { label: "Content Generator", link: "/features/content-generator/" },
            { label: "Marketplace Hub", link: "/features/marketplace-hub/" },
            { label: "Logistics", link: "/features/logistics/" },
            { label: "Community Forum", link: "/features/community-forum/" },
            { label: "Academy", link: "/features/academy/" },
            { label: "Geo Data", link: "/features/geo-data/" },
          ],
        },
        {
          label: "Pricing",
          items: [
            { label: "Plans & Pricing", link: "/pricing/plans/" },
          ],
        },
        {
          label: "Integrations",
          items: [
            { label: "Marketplaces", link: "/integrations/marketplaces/" },
            { label: "Logistics Carriers", link: "/integrations/logistics/" },
            { label: "Payment Gateways", link: "/integrations/payments/" },
            { label: "Data Sources", link: "/integrations/data-sources/" },
          ],
        },
        {
          label: "API Reference",
          items: [
            { label: "Introduction", link: "/api/introduction/" },
            { label: "Authentication", link: "/api/authentication/" },
            { label: "Endpoints", link: "/api/endpoints/" },
          ],
        },
        { label: "FAQ", link: "/faq/" },
      ],
    }),
  ],
});
