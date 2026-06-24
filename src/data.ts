// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  // {
  //   label: 'Testimonials',
  //   url: '#testimonials-section',
  // },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tawqeer-khursheed',
  },
  {
    label: 'Email',
    url: 'mailto:Tawqeerkhursheed7@gmail.com',
  },
];

const resourceLinks = [
  {
    label: 'Resume',
    url: '/Tawqeer_Khursheed_Full_Updated_CV.pdf',
  },
];

const heroText =
  'A UI/UX developer & frontend specialist, crafting responsive, user-centric web interfaces since 2022.';

const locationPlace = `28°27'N 77°01'E`;
const locationCountry = 'India, Gurugram';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = '';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
