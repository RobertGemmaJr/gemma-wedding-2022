import { GridItem, Flex, Text } from "@chakra-ui/react";

import { SocialButton } from "@components/buttons";
import { LayoutFlex } from "@components/layout/partials";

// The UI for this component is based on a Chakra template https://chakra-templates.dev
// TODO: Set buttons in center, copyright on the right
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <GridItem area="footer" as="footer" bg="gray.200" color="gray.700">
      <LayoutFlex
        // Footer stacks vertically on phones, horizontally otherwise
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-around" }}
      >
        <Flex gap="2">
          <SocialButton
            aria-label="Link to Nora's Instagram"
            to="https://www.instagram.com/eleanor.j.gemma/"
          />
          <SocialButton
            aria-label="Link to Rob's Instagram"
            to="https://www.instagram.com/robertgemmajr/"
          />
        </Flex>
        <Text textAlign="center" colorScheme="facebook">
          © {year} Robert Gemma
        </Text>
      </LayoutFlex>
    </GridItem>
  );
}
