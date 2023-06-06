import { forwardRef, IconButton, type IconButtonProps } from '@chakra-ui/react';
import React from 'react';

import { LinkButton, LinkButtonProps } from '.';

export interface SocialButtonProps extends IconButtonProps {
  href: LinkButtonProps['href'];
}

// The UI for this component is based on Chakra's smallWithLogoLeft template
// https://github.com/hauptrolle/chakra-templates/blob/main/src/pages/templates/page-sections/footer/smallWithLogoLeft.tsx
export const SocialButton = forwardRef<SocialButtonProps, typeof LinkButton>(
  ({ href, 'aria-label': ariaLabel, ...delegated }: SocialButtonProps, ref) => (
    <LinkButton
      ref={ref}
      href={href}
      as={IconButton}
      aria-label={ariaLabel}
      display='inline-flex'
      alignItems='center'
      justifyContent='center'
      w='8'
      h='8'
      cursor='pointer'
      rounded='full'
      bg='blackAlpha.100'
      _hover={{ bg: 'blackAlpha.300' }}
      transition='background 0.3s ease'
      {...delegated}
    />
  )
);
