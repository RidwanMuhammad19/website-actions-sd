import { Box } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

const Layouts = ({ children, data }) => {
  return (
    <Box>
      <Header data={data} />
      {children}
      <Footer data={data} />
    </Box>
  );
};

export default Layouts;
