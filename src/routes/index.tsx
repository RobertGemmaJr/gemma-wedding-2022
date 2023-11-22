import { Box, Heading, Link, Text } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import { useState } from "react";

import { DefaultLayout } from "@components/layout";

// Public assets
import reactLogo from "/assets/react.svg";
import viteLogo from "/assets/vite.svg";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <DefaultLayout>
      <Box>
        <Link href="https://vitejs.dev" target="_blank">
          <Image src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <Image src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Box>
      <Heading>Vite + React</Heading>
      <Box className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <Text>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </Box>
      <Text className="read-the-docs">Click on the Vite and React logos to learn more</Text>
    </DefaultLayout>
  );
}
