import { GridItem } from "@chakra-ui/react";

import { LayoutFlex } from ".";

export function Header() {
  return (
    <GridItem area="header" as="header" bg="white">
      <LayoutFlex justifyContent="space-between"></LayoutFlex>
    </GridItem>
  );
}
