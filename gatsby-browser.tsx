import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { ChakraProvider, Heading } from '@chakra-ui/react';

import theme from '@src/theme';

// TODO: Add prettier
// TODO:

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Heading>Hello, World!</Heading>
      {element}
    </ChakraProvider>
  );
};
