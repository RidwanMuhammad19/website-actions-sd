import { Box } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

const Layouts = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layouts;
