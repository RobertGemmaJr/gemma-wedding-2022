import { Flex, type FlexProps } from '@chakra-ui/react';
import React from 'react';

export type LayoutFlexProps = FlexProps;
export function LayoutFlex({ children, ...delegated }: LayoutFlexProps) {
  return (
    <Flex maxW='7xl' mx='auto' p='5' gap='4' align='center' {...delegated}>
      {children}
    </Flex>
  );
}
