import { GridItem, Stack, HStack, Text } from '@chakra-ui/react';
import { EmailIcon, InfoIcon } from '@chakra-ui/icons';
import React from 'react';

// import { Logo, SocialButton } from "@components/common";

// The UI for this component is based on a Chakra template https://chakra-templates.dev
export function Footer() {
  return (
    <GridItem area='footer' as='footer' bg='gray.200' color='gray.700'>
      <Stack
        maxW='7xl'
        mx='auto'
        p='5'
        spacing='4'
        align='center'
        // Footer stacks vertically on phones
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
      >
        <Text textAlign='center' colorScheme='facebook'>
          © 2022 Brown University. All rights reserved
        </Text>
        <HStack>
          <SocialButton aria-label='Contact Page' href='/contact' icon={<EmailIcon />} />
          <SocialButton aria-label='Info' href='/info' icon={<InfoIcon />} />
        </HStack>
      </Stack>
    </GridItem>
  );
}
