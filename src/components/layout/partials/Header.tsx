import { GridItem, Heading } from "@chakra-ui/react";

import { LayoutFlex } from ".";
import { NavLink } from "react-router-dom";
import { NavBar } from "./navbar";

export function Header() {
  return (
    <GridItem area="header" as="header" bg="white">
      <LayoutFlex justifyContent="space-between">
        <Heading as={NavLink} to="/">
          Gemma Wedding 2022
        </Heading>
        <NavBar />
      </LayoutFlex>
    </GridItem>
  );
}
