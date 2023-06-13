import { GridItem, Flex, Text, Spacer } from '@chakra-ui/react';
import React from 'react';

import { SocialButton } from '@components/buttons';
import { LayoutFlex } from '@components/layout';

// The UI for this component is based on a Chakra template https://chakra-templates.dev
export function Footer() {
  return (
    <GridItem area='footer' as='footer' bg='gray.200' color='gray.700'>
      <LayoutFlex
        // Footer stacks vertically on phones, horizontally otherwise
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
      >
        <Spacer />
        <Flex gap='2'>
          <SocialButton
            aria-label='Link to Noras Instagram'
            href='https://www.instagram.com/eleanor.j.gemma/'
          />
          <SocialButton
            aria-label='Link to Robs Instagram'
            href='https://www.instagram.com/robertgemmajr/'
          />
        </Flex>
        <Text textAlign='center' colorScheme='facebook'>
          © 2022 Robert Gemma
        </Text>
      </LayoutFlex>
    </GridItem>
  );
}
