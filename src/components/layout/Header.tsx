import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Collapse,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useMemo } from "react";

import { LinkOverlay } from "@src/components";

import { NAV_ITEMS, NavLink } from "./partials";

import { LayoutFlex } from ".";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const DesktopNavBar = useMemo(
    () => (
      <HStack as="nav" display={{ base: "none", md: "flex" }}>
        {NAV_ITEMS.map((navItem) => (
          <NavLink key={navItem.label} variant="desktop" navItem={navItem} />
        ))}
      </HStack>
    ),
    []
  );
  const MobileNavBar = useMemo(
    () => (
      // TODO: Clicking on white space after collapse is registering the link click not closing the collapse
      <Collapse in={isOpen} animateOpacity>
        <Stack as="nav" display={{ base: "flex", md: "none" }}>
          {NAV_ITEMS.map((navItem) => (
            <NavLink key={navItem.label} variant="mobile" navItem={navItem} />
          ))}
        </Stack>
      </Collapse>
    ),
    [isOpen]
  );

  return (
    <GridItem area="header" as="header" bg="white">
      <LayoutFlex justifyContent="space-between">
        {/* Dropdown button on Mobile */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
          display={{ base: "block", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Logo links to home page */}
        <LinkOverlay href="/">
          <Heading>Gemma Wedding 2022</Heading>
        </LinkOverlay>

        {/* nav on Desktop */}
        {DesktopNavBar}
      </LayoutFlex>

      {/* nav on Mobile */}
      {MobileNavBar}
    </GridItem>
  );
}
