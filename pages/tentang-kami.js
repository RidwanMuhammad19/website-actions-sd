import React from "react";
import { Container, Box, Heading, Text } from "@chakra-ui/react";
import Layouts from "../layouts";
import CarouselSub from "../component/carousel-full";
import ButtonBack from "../component/button-back";

const TentangKami = () => {
  const slides = [
    {
      img: "/assets/slider/tentangkami/1.jpg",
    },
    {
      img: "/assets/slider/tentangkami/2.jpg",
    },
    {
      img: "/assets/slider/tentangkami/3.jpg",
    },
    {
      img: "/assets/slider/tentangkami/4.jpg",
    },
    {
      img: "/assets/slider/tentangkami/5.jpg",
    },
    {
      img: "/assets/slider/tentangkami/6.jpg",
    },
    {
      img: "/assets/slider/tentangkami/7.jpg",
    },
  ];
  return (
    <Layouts>
      <Box py={20}>
        <Container maxW="7xl">
          <Box textAlign="center" py={10}>
            <Heading>TENTANG KAMI</Heading>
          </Box>
          <CarouselSub slides={slides} />
          <Box py={10}>
            <Text fontSize={"18px"} color="secondary.600" textAlign={"justify"}>
              Dengan adanya website ini, kami bertujuan memberikan informasi
              tentang sd muhamadiyah klaten utara dalam rangka agar masyarakat
              dan dari berbagai pihak dapat lebih mudah menemukan berbagai
              informasi terkait sd muhammadiyah klaten utara. Selain itu,
              khususnya juga kepada para wali murid dan siswa-siswi sd
              muhammadiyah klaten utara dapat lebih mudah dalam menjangkau
              informasi melalui website ini , sehingga pelayanan kami kepada
              wali murid, siswa-siswi sd muhammadiyah klaten utara dan
              masyarakat lebih efisien dalam menemukan segala informasi melalui
              website ini
            </Text>
          </Box>
          <ButtonBack />
        </Container>
      </Box>
    </Layouts>
  );
};

export default TentangKami;
