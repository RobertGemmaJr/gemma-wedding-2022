import { ChakraProvider, Grid } from '@chakra-ui/react';
import type { GatsbyBrowser } from 'gatsby';
import React from 'react';

import { Header, Footer, Main } from '@components/layout';
import theme from '@src/theme';

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
        <Header />
        <Main>{element}</Main>
        <Footer />
      </Grid>
    </ChakraProvider>
  );
};
