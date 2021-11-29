import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { overrides } from "./overrides";
import Fonts from "./collects/font";

const theme = extendTheme(overrides);

const ThemeActions = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

export default ThemeActions;
