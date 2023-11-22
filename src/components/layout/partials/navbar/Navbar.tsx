import { HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { NAV_ITEMS } from "./navbar.constants";

/** NavBar with links */
// TODO: Switch between NavBar on mobile and web
export function NavBar() {
  return (
    <HStack as="nav" gap="10">
      {NAV_ITEMS.map(({ label, pathname }) => (
        <Link as={NavLink} to={pathname}>
          {label}
        </Link>
      ))}
    </HStack>
  );
}
