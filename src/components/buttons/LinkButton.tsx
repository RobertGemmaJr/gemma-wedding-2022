import { forwardRef, Button, type ButtonProps, Link, LinkProps } from "@chakra-ui/react";

/** Extension of {@link ButtonProps}  */
export interface LinkButtonProps extends ButtonProps {
  href: LinkProps["href"];
}

/** A Chakra Button component that exposes a `ref`.
 *
 * Component is styled as Chakra's Button and uses the logic of RemixLink
 * @param props {@link LinkButtonProps}
 */
// TODO: Does this link work correctly?
export const LinkButton = forwardRef<LinkButtonProps, typeof Button>(
  ({ href, children, ...delegated }: LinkButtonProps, ref) => (
    <Button ref={ref} as={Link} href={href} {...delegated}>
      {children}
    </Button>
  )
);
