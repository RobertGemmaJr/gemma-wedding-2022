export interface NavItem {
  label: string;
  pathname: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", pathname: "/" },
  { label: "Our Story", pathname: "/our-story" },
  { label: "Bridal Party", pathname: "/bridal-party" },
  { label: "Travel", pathname: "/travel" },
  { label: "FAQs", pathname: "/faq" },
  { label: "Photos", pathname: "/photos" },
];
// TODO: /registry isn't in the navbar anymore but does exist
