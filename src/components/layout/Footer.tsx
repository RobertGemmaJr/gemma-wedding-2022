import { EmailIcon, InfoIcon } from '@chakra-ui/icons';
import { GridItem, Flex, Box, Text, Heading } from '@chakra-ui/react';
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
        <Box display={{ base: 'none', md: 'block' }}>
          <Heading>Logo Goes Here</Heading>
        </Box>
        <Text textAlign='center' colorScheme='facebook'>
          © 2022 Robert Gemma
        </Text>
        <Flex gap='2'>
          <SocialButton aria-label='Contact Page' href='/contact' icon={<EmailIcon />} />
          <SocialButton aria-label='Info' href='/info' icon={<InfoIcon />} />
        </Flex>
      </LayoutFlex>
    </GridItem>
  );
}
