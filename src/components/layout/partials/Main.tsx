import { GridItem, Box } from "@chakra-ui/react";

import { LayoutFlex, type LayoutFlexProps } from "./LayoutFlex";

/** Re-export of {@link LayoutFlexProps} */
export type MainProps = LayoutFlexProps;

export function Main({ children, ...delegated }: MainProps) {
  return (
    <GridItem area="main" as="main" bg="gray.50">
      {/* Default Main to top-left corner */}
      <LayoutFlex height="full" justifyContent="flex-start" alignItems="flex-start" {...delegated}>
        <Box>{children}</Box>
      </LayoutFlex>
    </GridItem>
  );
}
