import { Stack } from "@chakra-ui/react";
import { Footer, Header, Main, type MainProps } from "./partials";

/** Re-export of {@link MainProps} */
export interface DefaultLayoutProps extends MainProps {}

/** The default page layout */
export function DefaultLayout({ children, ...delegated }: DefaultLayoutProps) {
  return (
    <Stack gap="0" minHeight="100vh">
      <Header />
      <Main {...delegated}>{children}</Main>
      <Footer />
    </Stack>
  );
}
