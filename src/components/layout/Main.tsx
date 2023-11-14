import { GridItem } from '@chakra-ui/react';
import { LayoutFlex, type LayoutFlexProps } from '@components/layout';

export type MainProps = LayoutFlexProps;

export function Main({ children, ...delegated }: MainProps) {
  return (
    <GridItem area='main' as='main' bg='gray.50'>
      {/* Default Main to top-left corner */}
      <LayoutFlex height='full' justifyContent='flex-start' alignItems='flex-start' {...delegated}>
        {children}
      </LayoutFlex>
    </GridItem>
  );
}
