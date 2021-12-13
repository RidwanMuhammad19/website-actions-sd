import React from "react";
import { Container, Box, Heading, Text } from "@chakra-ui/react";
import Layouts from "../layouts";
import CarouselSub from "../component/carousel-full";
import ButtonBack from "../component/button-back";

const SambutanKepsek = () => {
  const slides = [
    {
      img: "/assets/slider/tentangkami/1.jpeg",
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
            <Heading>SAMBUTAN KEPALA SEKOLAH</Heading>
          </Box>
          <CarouselSub slides={slides} />
          <Box py={10}>
            <Text fontSize={"18px"} color="secondary.600">
              Assalamu’alaikum
            </Text>
            <Text fontSize={"18px"} color="secondary.600" textAlign={"justify"}>
              Puji syukur Kami dari sd muhammadiyah klaten utara Menyampaikan
              rasa syukur kami kepada Allah swt, karena sampai pada saat ini SD
              Muhammadiyah Klaten utara menjadi sekolah yang sangat di percayai
              oleh masyarakat khususnya di kabupaten klaten dan sekitarnya dan
              tak lupa kami sampaikan kepada berbagai pihak yang tidak bisa kami
              sebutkan satu persatu ,yang telah mendukung dan mensupport segala
              hal yang berkaitan dengan sd muhammadiyah klaten utara. semoga
              dengan adanya website ini, dapat memudahkan berbagai pihak untuk
              menemukan informasi tentang sekolah sd muhammadiyah klaten utara.
              Terima kasih
            </Text>
          </Box>
          <ButtonBack />
        </Container>
      </Box>
    </Layouts>
  );
};

export default SambutanKepsek;
