import { Box, Text, Heading } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // TODO: Type here?
  const error = useRouteError();
  console.error(error);

  return (
    <Box>
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <Text as="i">{error.statusText || error.message}</Text>
      </Text>
    </Box>
  );
}
