import React from "react";
import { Container, Box, Stack, Text, Image } from "@chakra-ui/react";
import TextHeader from "../../component/text-heder-section";
import CustomButton from "../../component/custom-button";

const Kurikulum = () => {
  const datas = [
    {
      id: 1,
      icon: "/assets/kurikulum/reading.png",
      header: "Reading/Writing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,ex.",
      bg: "primary.400",
    },
    {
      id: 2,
      icon: "/assets/kurikulum/match.png",
      header: "Math/Science",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,ex.",
      bg: "danger.500",
    },
    {
      id: 3,
      icon: "/assets/kurikulum/art.png",
      header: "Art",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,ex.",
      bg: "warning.600",
    },
    {
      id: 4,
      icon: "/assets/kurikulum/critical-thinking.png",
      header: "Critical Thinking",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,ex.",
      bg: "info.600",
    },
  ];
  return (
    <Box bg="#F6F8FD">
      <Container maxW="6xl" py={24}>
        <TextHeader text="KURIKULUM" width={{ xs: "148px", md: "188px" }} />
        <Stack flexDir={{ xs: "column", md: "row" }} spacing={0} py={20}>
          {datas.map((el) => (
            <Box
              key={el.id}
              flex={1}
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <Box
                bg={el.bg}
                borderRadius="full"
                w={{ xs: "130px", md: "150px" }}
                h={{ xs: "130px", md: "150px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={el.icon}
                  alt="icon"
                  w={{ xs: "50px", md: "60px" }}
                />
              </Box>
              <Text fontSize="24px" color="black" my={{ xs: 8, md: 10 }}>
                {el.header}
              </Text>
              <Text
                fontSize="18px"
                textAlign="center"
                px={{ xs: "50px", md: "0" }}
                mb={10}
              >
                {el.text}
              </Text>
            </Box>
          ))}
        </Stack>
        <CustomButton text="LIHAT SEMUA" bg="primary.600" color="white" hoverBg="primary.700" />
      </Container>
    </Box>
  );
};

export default Kurikulum;
