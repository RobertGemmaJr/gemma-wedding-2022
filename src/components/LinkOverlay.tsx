import {
  LinkOverlay as ChakraLinkOverlay,
  LinkOverlayProps as ChakraLinkOverlayProps,
  LinkBox,
  forwardRef,
  type LinkBoxProps,
} from '@chakra-ui/react';
import React from 'react';

export interface LinkOverlayProps extends LinkBoxProps {
  href: ChakraLinkOverlayProps['href'];
}

export const LinkOverlay = forwardRef<LinkOverlayProps, typeof LinkBox>(
  ({ href, children, ...delegated }: LinkOverlayProps, ref) => (
    <LinkBox ref={ref} {...delegated}>
      <ChakraLinkOverlay href={href}>{children}</ChakraLinkOverlay>
    </LinkBox>
  )
);
