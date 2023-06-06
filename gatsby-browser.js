import React from 'react';
import { ChakraProvider, Heading } from '@chakra-ui/react';
import theme from '@src/theme';
// TODO: Add prettier
// TODO:
export const wrapPageElement = ({ element }) => {
  return React.createElement(
    ChakraProvider,
    { theme: theme, resetCSS: true },
    React.createElement(Heading, null, 'Hello, World!'),
    element
  );
};
