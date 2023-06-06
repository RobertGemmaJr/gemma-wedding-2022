import { ChakraProvider, Grid, Heading } from '@chakra-ui/react';
import type { GatsbyBrowser } from 'gatsby';
import React from 'react';

import { Footer } from '@components/layout';
import theme from '@src/theme';

// TODO: Add prettier
// TODO:

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Grid
        templateAreas={`'header' 'main' 'footer'`}
        gridTemplateRows='auto 1fr auto'
        minHeight='100vh'
        minWidth='100vw'
        maxWidth='100vw'
      >
        <Heading>Hello, World!</Heading>
        {element}
        <Footer />
      </Grid>
    </ChakraProvider>
  );
};
