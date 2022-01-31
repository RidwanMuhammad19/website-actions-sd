import { Box, Container, Stack } from "@chakra-ui/react";
import { Row, Col } from "react-grid-system";
import CardPrestasi from "../../component/card-prestasi";
import TextHeader from "../../component/text-heder-section";
import { showImage } from "../../utils/helper";

const Potensi = ({ listPrestasi }) => {
  return (
    <Box
      as="section"
      height="100%"
      position="relative"
      id="prestasi"
      bg="#F6F8FD"
    >
      {/* SUBSTRACT BACKGROUND */}

      <Stack flexDirection="row">
        <Box
          position="absolute"
          mt={8}
          backgroundImage="/assets/background/prestasi.png"
          width="100%"
          height="60%"
          backgroundRepeat="no-repeat"
        />
        <Box
          position="absolute"
          right="0"
          bottom="20"
          backgroundImage="./assets/background/setright.png"
          bgSize="cover"
          w="300px"
          h="500px"
          backgroundRepeat="no-repeat"
        />
      </Stack>

      <Container maxW="6xl">
        <Box py={{ xs: 0, md: 10 }} mt="6rem">
          <TextHeader text="PRESTASI" width="159px" />
        </Box>
        <Box as={Row} py="10">
          {listPrestasi?.data?.slice(0, 6).map((el) => (
            <Box key={el.id} my="2.75rem" sm={12} md={6} lg={4} as={Col}>
              <CardPrestasi
                title={el.judul}
                image={el?.gambar}
                href={el.slug}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Potensi;
