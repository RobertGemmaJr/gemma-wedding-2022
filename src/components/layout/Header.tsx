import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Collapse,
  GridItem,
  HStack,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';

import { LinkOverlay } from '@src/components';

import { NAV_ITEMS, NavLink } from './partials';

import { LayoutFlex } from '.';

// The UI for this component is based on Chakra's withDarkModeSwitcher and simple template
// https://github.com/hauptrolle/chakra-templates/blob/main/src/pages/templates/navigation/navbar/withDarkModeSwitcher.tsx
// https://github.com/hauptrolle/chakra-templates/blob/main/src/pages/templates/navigation/navbar/simple.tsx
export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const DesktopNavBar = useMemo(
    () => (
      <HStack as='nav' display={{ base: 'none', md: 'flex' }}>
        {NAV_ITEMS.map((navItem) => (
          <NavLink key={navItem.label} variant='desktop' navItem={navItem} />
        ))}
      </HStack>
    ),
    []
  );
  const MobileNavBar = useMemo(
    () => (
      // TODO: Clicking on white space after collapse is registering the link click not closing the collapse
      <Collapse in={isOpen} animateOpacity>
        <Stack as='nav' display={{ base: 'flex', md: 'none' }}>
          {NAV_ITEMS.map((navItem) => (
            <NavLink key={navItem.label} variant='mobile' navItem={navItem} />
          ))}
        </Stack>
      </Collapse>
    ),
    [isOpen]
  );

  return (
    <GridItem area='header' as='header' bg='white'>
      <LayoutFlex justifyContent='space-between'>
        {/* Dropdown button on Mobile */}
        <IconButton
          size='md'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant='ghost'
          aria-label='Toggle Navigation'
          display={{ base: 'block', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Logo links to home page */}
        <LinkOverlay href='/'>
          <Text>Gemma Wedding 2022</Text>
        </LinkOverlay>

        {/* nav on Desktop */}
        {DesktopNavBar}
      </LayoutFlex>

      {/* nav on Mobile */}
      {MobileNavBar}
    </GridItem>
  );
}
