export const navigationItems = [
  { name: "Features", href: "#features", hasDropdown: true },
  { name: "Press", href: "/press", hasDropdown: false },
  { name: "Company", href: "#company", hasDropdown: true },
];

export const dropdownContent = {
  Features: [
    { name: "Analytics", href: "/features/analytics" },
    { name: "Reporting", href: "/features/reporting" },
    { name: "Integrations", href: "/features/integrations" },
    { name: "API", href: "/features/api" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
};
