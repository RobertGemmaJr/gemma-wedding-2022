import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Box, Heading, Link, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";

// TODO: chakra, prettier, husky, @ imports
// TODO: Color mode

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box>
        <Link
          href="https://vitejs.dev"
          target="_blank"
        >
          <Image
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </Link>
        <Link
          href="https://react.dev"
          target="_blank"
        >
          <Image
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
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
    </>
  );
}
