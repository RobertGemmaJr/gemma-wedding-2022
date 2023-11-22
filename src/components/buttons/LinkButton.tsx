import { forwardRef, Button, type ButtonProps } from "@chakra-ui/react";
import { Link, LinkProps } from "react-router-dom";

/** Extension of {@link ButtonProps}  */
export interface LinkButtonProps extends ButtonProps {
  to: LinkProps["to"];
}

/** A Chakra Button component that uses the logic of React Router's Link
 *
 * @param props {@link LinkButtonProps}
 */
// TODO: Link to an external page? For the Footer
export const LinkButton = forwardRef<LinkButtonProps, typeof Button>(
  ({ to, children, ...delegated }: LinkButtonProps, ref) => (
    <Button ref={ref} as={Link} to={to} {...delegated}>
      {children}
    </Button>
  )
);
