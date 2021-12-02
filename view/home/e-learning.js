import React from "react";
import { Container, Stack, Box, Text, Icon, Image } from "@chakra-ui/react";
import TextHeader from "../../component/text-heder-section";
import CustomButton from "../../component/custom-button";

const ELearning = ({ data }) => {
  const media = [
    {
      id: 1,
      icon: "/assets/icon/microsoft-teams.png",
      text: "Microsoft Teams",
      width: "66px",
    },
    {
      id: 2,
      icon: "/assets/icon/youtube.png",
      text: "Youtube",
      width: "66px",
    },
  ];

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
              src={`https://actions-api-sd.sandboxindonesia.id/storage/${data?.gambar}`}
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
          {media.map((el) => (
            <Box
              key={el.id}
              pt={5}
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Image src={el.icon} alt="icon" w={{ xs: "55px", md: "66px" }} />
              <Text
                fontSize={{ xs: "1.2rem", md: "1.5rem" }}
                letterSpacing="1.5%"
                ml={10}
              >
                {el.text}
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
