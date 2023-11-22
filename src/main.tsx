import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { theme } from "./theme";

const ROOT_ELEMENT = document.getElementById("root")!;
ReactDOM.createRoot(ROOT_ELEMENT).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
