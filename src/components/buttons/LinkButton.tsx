import { Button, forwardRef, type ButtonProps } from '@chakra-ui/react';
import React from 'react';

// TODO: Fix this? Just import from '@components'
import { LinkOverlay, type LinkOverlayProps } from '@components/LinkOverlay';

export interface LinkButtonProps extends ButtonProps {
  href: LinkOverlayProps['href'];
}
export const LinkButton = forwardRef<LinkButtonProps, typeof LinkOverlay>(
  ({ href, children, ...delegated }: LinkButtonProps, ref) => (
    <LinkOverlay ref={ref} href={href}>
      <Button variant='link' {...delegated}>
        {children}
      </Button>
    </LinkOverlay>
  )
);
