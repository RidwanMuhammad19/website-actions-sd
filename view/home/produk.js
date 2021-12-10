import React from "react";
import { Container, Stack, Box, Image } from "@chakra-ui/react";
import TextHeader from "../../component/text-heder-section";

const Produk = () => {
  const produkImage = [
    {
      image: "/assets/produk/Mentari.png",
    },
    {
      image: "/assets/produk/fullday.png",
    },
    {
      image: "/assets/produk/akreditasiA.png",
    },
    {
      image: "/assets/produk/Viralku.png",
    },
    {
      image: "/assets/produk/SP.png",
    },
  ];
  return (
    <Box bg="primary.100" boxShadow="md" id="produk">
      <Container maxW="7xl" py={20}>
        <TextHeader text="PRODUK" />
        <Stack
          direction="row"
          spacing={{ xs: 10, md: 20 }}
          py={20}
          justifyContent="center"
        >
          {produkImage?.map((el) => (
            <Box key={el.image}>
              <Image
                h={{ xs: "40px", md: "70px" }}
                src={el.image}
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
