import { forwardRef, Button, type ButtonProps } from "@chakra-ui/react";
import { NavLink, NavLinkProps } from "react-router-dom";

/** Extension of {@link ButtonProps}  */
export interface LinkButtonProps extends ButtonProps {
  to: NavLinkProps["to"];
}

/** A Chakra Button component that exposes a `ref`.
 *
 * Component is styled as Chakra's Button and uses the logic of RemixLink
 * @param props {@link LinkButtonProps}
 */
// TODO: Does this link work correctly?
export const LinkButton = forwardRef<LinkButtonProps, typeof Button>(
  ({ to, children, ...delegated }: LinkButtonProps, ref) => (
    <Button ref={ref} as={NavLink} to={to} {...delegated}>
      {children}
    </Button>
  )
);
