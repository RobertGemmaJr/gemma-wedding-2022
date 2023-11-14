import {
  LinkOverlay as ChakraLinkOverlay,
  LinkOverlayProps as ChakraLinkOverlayProps,
  LinkBox,
  forwardRef,
  type LinkBoxProps,
} from '@chakra-ui/react';

export interface LinkOverlayProps extends LinkBoxProps {
  href: ChakraLinkOverlayProps['href'];
  isExternal?: ChakraLinkOverlayProps['isExternal'];
}

export const LinkOverlay = forwardRef<LinkOverlayProps, typeof LinkBox>(
  ({ href, isExternal, children, ...delegated }: LinkOverlayProps, ref) => (
    <LinkBox ref={ref} {...delegated}>
      <ChakraLinkOverlay href={href} isExternal={isExternal}>
        {children}
      </ChakraLinkOverlay>
    </LinkBox>
  )
);
