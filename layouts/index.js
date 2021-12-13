import { Box } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";
import Backtotop from "../component/back-to-top";

const Layouts = ({ children, data }) => {
  return (
    <Box>
      <Header data={data} />
      {children}
      <Footer data={data} />
      <Backtotop />
    </Box>
  );
};

export default Layouts;
