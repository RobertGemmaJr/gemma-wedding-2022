import { Text, Heading } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

import { DefaultLayout } from "./DefaultLayout";

export function ErrorLayout() {
  // TODO: Type here?
  const error = useRouteError();
  console.error(error);

  return (
    <DefaultLayout>
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <Text as="i">{error.statusText || error.message}</Text>
      </Text>
    </DefaultLayout>
  );
}
