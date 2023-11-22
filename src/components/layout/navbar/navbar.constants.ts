export interface NavItem {
  label: string;
  subLabel?: string;
  href: string;
  external?: boolean;
  children?: Array<NavItem>;
}

// TODO 293: Move to constants folder
export const STUDIES: NavItem = {
  label: "Studies",
  href: "/studies",
  children: [
    {
      label: "My Studies",
      href: "/studies",
    },
    {
      label: "All Studies",
      subLabel: "View all public studies",
      href: "/studies/all",
    },
  ],
};

export const DOCUMENTATION: NavItem = {
  label: "Documentation",
  href: "https://gitbook.brown.edu/xromm/xromm-xmaportal-user-manual",
  external: true,
};

export const ADMINISTER: NavItem = {
  label: "Administer",
  href: "/admin",
  children: [
    {
      label: "Dashboard",
      subLabel: "Overview of portal statistics",
      href: "/admin/dashboard",
    },
    {
      label: "Users",
      subLabel: "Edit portal users",
      href: "/admin/users",
    },
  ],
};

export const NAV_ITEMS = [STUDIES, DOCUMENTATION, ADMINISTER];
