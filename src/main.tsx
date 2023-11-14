import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./theme";
import App from "./App.tsx";

const ROOT_ELEMENT = document.getElementById("root")!;
ReactDOM.createRoot(ROOT_ELEMENT).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
