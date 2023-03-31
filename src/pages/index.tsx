import React from 'react';
import type { PageProps } from 'gatsby';
import { Heading } from '@chakra-ui/react';

const IndexRoute: React.FC<PageProps> = ({ path }) => {
  //comment
  return (
    <main>
      <Heading size='sm'>Path: {path}</Heading>
    </main>
  );
};

export default IndexRoute;
