"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import Fonts from "@/theme/fonts";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
}
