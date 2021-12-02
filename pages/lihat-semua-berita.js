import React from "react";
import { Box, Stack, Text, Container } from "@chakra-ui/react";
import TextHeader from "../component/text-heder-section";
import Layouts from "../layouts";
import CustomButton from "../component/custom-button";
// import CardBerita from "../view/berita/card-berita";

const LihatSemuaBerita = () => {
  return (
    <Layouts>
      <Container py="100px" maxW="6xl" h="100%">
        <TextHeader textLine text="BERITA" width="78px" />
        <Box>
          <CustomButton
            text="BACK"
            href="/"
            bg="success.500"
            color="white"
            hoverBg="success.600"
          />
        </Box>
      </Container>
    </Layouts>
  );
};

export default LihatSemuaBerita;
