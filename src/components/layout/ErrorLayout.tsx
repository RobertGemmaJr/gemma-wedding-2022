import { Text, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { DefaultLayout } from "./DefaultLayout";

export function ErrorLayout() {
  const error = useRouteError();

  console.error(error);
  return (
    <DefaultLayout>
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <Text as="i">
          {isRouteErrorResponse(error)
            ? // Error came from invalid routing
              error.statusText
            : // Some other error was thrown
              (error as Error).message}
        </Text>
      </Text>
    </DefaultLayout>
  );
}
