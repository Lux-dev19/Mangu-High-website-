export type NavChild = {
  label: string;
  path: string;
  description: string;
};

export type NavItem = {
  label: string;
  path: string;
  children?: NavChild[];
};

export const schoolInfo = {
  name: "Mangu High School",
  shortName: "Mangu High",
  motto: "Jishinde Ushinde",
  mottoMeaning: "Educate yourself, and be educated",
  founded: 1925,
  founder: "Fr. Michael Witte",
  tagline: "Excellence in Character, Leadership and Academic Achievement.",
  county: "Kiambu County, Kenya",
};

export const contactInfo = {
  phone: "+254 672 220 270",
  phoneHref: "+254672220270",
  email: "info@manguhigh.com",
  addressLines: ["Mangu High School", "Mangu, Thika", "Kiambu County, Kenya"],
  addressOneLine: "Mangu, Thika, Kiambu County, Kenya",
  mapQuery: "Mangu High School Thika Kenya",
  officeHours: "Monday – Friday, 8:00 am – 5:00 pm",
};

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Academics",
    path: "/academics",
    children: [
      {
        label: "Academics",
        path: "/academics",
        description: "Curriculum, subjects and academic programmes",
      },
      {
        label: "Departments",
        path: "/departments",
        description: "Explore our academic departments",
      },
    ],
  },
  {
    label: "Community",
    path: "/administration",
    children: [
      {
        label: "Administration",
        path: "/administration",
        description: "Meet the school leadership and teaching staff",
      },
      {
        label: "Student Life",
        path: "/students",
        description: "Leadership, boarding, clubs, sports and service",
      },
      {
        label: "Clubs & Societies",
        path: "/clubs",
        description: "Co-curricular clubs, societies and programmes",
      },
    ],
  },
  { label: "Admissions", path: "/admissions" },
  { label: "News & Events", path: "/news" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export const socialLinks = [
  {
    label: "Facebook",
    icon: "ri-facebook-fill",
    href: "https://www.facebook.com/search/top?q=mangu%20high%20school",
  },
  {
    label: "X",
    icon: "ri-twitter-x-fill",
    href: "https://twitter.com/search?q=mangu%20high%20school",
  },
  {
    label: "YouTube",
    icon: "ri-youtube-fill",
    href: "https://www.youtube.com/results?search_query=mangu+high+school",
  },
  {
    label: "Instagram",
    icon: "ri-instagram-line",
    href: "https://www.instagram.com/explore/tags/manguhighschool/",
  },
];

export const footerGroups = [
  {
    title: "The School",
    links: [
      { label: "About Mangu", path: "/about" },
      { label: "Academics", path: "/academics" },
      { label: "Departments", path: "/departments" },
      { label: "Admissions", path: "/admissions" },
      { label: "Student Life", path: "/students" },
      { label: "Clubs & Societies", path: "/clubs" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Administration", path: "/administration" },
      { label: "News & Events", path: "/news" },
      { label: "Photo Gallery", path: "/gallery" },
      { label: "Alumni", path: "/about#alumni" },
      { label: "Contact Us", path: "/contact" },
    ],
  },
];

export const schoolStats = [
  { value: 100, suffix: "+", label: "Years of Academic Tradition" },
  { value: 12, suffix: "", label: "Academic Departments" },
  { value: 30, suffix: "+", label: "Clubs & Societies" },
  { value: 15, suffix: "+", label: "Sports & Co-curricular Areas" },
];

export const schoolValues = [
  {
    icon: "ri-award-line",
    title: "Academic Excellence",
    description:
      "A relentless pursuit of scholarship, curiosity and depth of understanding in every classroom.",
  },
  {
    icon: "ri-shield-star-line",
    title: "Discipline & Integrity",
    description:
      "Order, self-control and honesty form the backbone of daily life and of every Mangu gentleman.",
  },
  {
    icon: "ri-team-line",
    title: "Leadership",
    description:
      "Students are entrusted with real responsibility and grow into confident, service-minded leaders.",
  },
  {
    icon: "ri-book-open-line",
    title: "Christian Values",
    description:
      "Faith, compassion and respect for human dignity guide our community and shape character.",
  },
  {
    icon: "ri-lightbulb-flash-line",
    title: "Innovation & Technology",
    description:
      "From aviation inspiration to ICT and STEM, we prepare learners for a fast-changing world.",
  },
  {
    icon: "ri-flag-2-line",
    title: "National Pride",
    description:
      "For a century, Mangu has served Kenya, producing leaders, scholars and citizens of impact.",
  },
];