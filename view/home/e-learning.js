import React from "react";
import { Container, Stack, Box, Text, Icon, Image } from "@chakra-ui/react";
import TextHeader from "../../component/text-heder-section";
import CustomButton from "../../component/custom-button";

const ELearning = ({ data }) => {
  const medias = data?.media;

  console.log(medias, "here");

  return (
    <Box height="100%" bg="#F6F8FD">
      <Container maxW="7xl" py={{ xs: 10, md: 20 }} px={{ xs: 10, md: 0 }}>
        <TextHeader text="E-Learning" width="190px" />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={10}
          pt={{ xs: 10, md: 20 }}
        >
          <Box flex={1}>
            <Image
              // src={`https://actions-api-sd.sandboxindonesia.id/storage/${data?.gambar}`}
              src="/assets/e-learning.jpeg"
              alt="image"
              width="515px"
              height="344px"
              borderRadius="20px"
              boxShadow="2xl"
            />
          </Box>
          <Box flex={1.3}>
            <Text
              color="black"
              fontSize={{ xs: "1.2 rem", md: "1.5rem" }}
              lineHeight={{ xs: "2rem", md: "41px" }}
              letterSpacing="0.094rem"
              textAlign="justify"
            >
              {data?.deskripsi}
            </Text>
          </Box>
        </Stack>
        <Stack py={10}>
          <Text fontSize={{ xs: "1.2rem", md: "1.5rem" }} letterSpacing="1.5%">
            Beberapa media E - Learning yang kami gunakan :
          </Text>
          {medias.map((el) => (
            <Box
              key={el.id}
              pt={5}
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Box w="90px">
                <Image
                  src={`https://actions-api-sd.sandboxindonesia.id//storage/${el.icon}`}
                  alt="icon"
                  h={{ xs: "55px", md: "66px" }}
                />
              </Box>
              <Text
                fontSize={{ xs: "1.2rem", md: "1.5rem" }}
                letterSpacing="1.5%"
                ml={10}
              >
                {el.nama_media}
              </Text>
            </Box>
          ))}
        </Stack>
        <CustomButton
          text="KUNJUNGI E-LEARNING"
          href="#"
          color="white"
          bg="primary.400"
          hoverBg="primary.500"
        />
      </Container>
    </Box>
  );
};

export default ELearning;
