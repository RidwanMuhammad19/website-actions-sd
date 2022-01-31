import React from "react";
import { Container, Stack, Box, Image } from "@chakra-ui/react";
import TextHeader from "../../component/text-heder-section";
import { showImage } from "../../utils/helper";

const Produk = ({ data }) => {
  return (
    <Box id="produk">
      <Container maxW="7xl" py={20}>
        <TextHeader text="PRODUK" />
        <Stack
          direction="row"
          spacing={{ xs: 10, md: 20 }}
          py={20}
          justifyContent="center"
        >
          {data?.map((el) => (
            <Box key={el.image}>
              <Image
                h={{ xs: "40px", md: "70px" }}
                src={showImage(el.logo)}
                alt="gambarprestasi"
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Produk;
