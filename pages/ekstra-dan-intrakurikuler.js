import React from "react";
import { Container, Stack, Box, Text, Heading } from "@chakra-ui/react";
import Layouts from "../layouts";
import CarouselSub from "../component/carousel-full";

const ExtraIntra = () => {
  const slides = [
    {
      img: "/assets/slider/ekstra/1.jpg",
    },
    {
      img: "/assets/slider/ekstra/2.jpg",
    },
    {
      img: "/assets/slider/ekstra/3.jpg",
    },
    {
      img: "/assets/slider/ekstra/4.jpg",
    },
    {
      img: "/assets/slider/ekstra/5.jpg",
    },
    {
      img: "/assets/slider/ekstra/6.JPG",
    },
    {
      img: "/assets/slider/ekstra/7.jpg",
    },
    {
      img: "/assets/slider/ekstra/8.jpg",
    },
    {
      img: "/assets/slider/ekstra/9.jpg",
    },
    {
      img: "/assets/slider/ekstra/10.jpg",
    },
    {
      img: "/assets/slider/ekstra/11.JPG",
    },
    {
      img: "/assets/slider/ekstra/12.jpg",
    },
    {
      img: "/assets/slider/ekstra/13.jpg",
    },
    {
      img: "/assets/slider/ekstra/14.jpg",
    },
    {
      img: "/assets/slider/ekstra/15.jpg",
    },
  ];
  const data = [
    {
      no: "1.",
      item: "HW",
    },
    {
      no: "2.",
      item: "TS",
    },
    {
      no: "3.",
      item: "Drumband",
    },
    {
      no: "4.",
      item: "Paduan suara",
    },
    {
      no: "5.",
      item: "Polisi cilik",
    },
    {
      no: "6.",
      item: "Dokter Kecil",
    },
    {
      no: "7.",
      item: "Seni Lukis",
    },
    {
      no: "8.",
      item: "Seni Gambar",
    },
    {
      no: "9.",
      item: "Seni Tari",
    },
    {
      no: "10.",
      item: "Tahfidz",
    },
    {
      no: "11.",
      item: "Robotic",
    },
    {
      no: "12.",
      item: "Kaligrafi",
    },
    {
      no: "13.",
      item: "Khitobah",
    },
    {
      no: "14.",
      item: "Membatik",
    },
    {
      no: "15.",
      item: "Jurnalistik",
    },
    {
      no: "16.",
      item: "TIK",
    },
    {
      no: "17.",
      item: "Tilawah dan murotal",
    },
    {
      no: "18.",
      item: "Geguritan dan macapat",
    },
    {
      no: "19.",
      item: "Taekwondo",
    },
    {
      no: "20.",
      item: "Cinematografi dan photografi",
    },
    {
      no: "21.",
      item: "Panahan",
    },
    {
      no: "22.",
      item: "Futsal",
    },
    {
      no: "23.",
      item: "Renang",
    },
    {
      no: "24.",
      item: "Badminton",
    },
    {
      no: "25.",
      item: "Kids Band",
    },
    {
      no: "26.",
      item: "English club",
    },
  ];
  return (
    <Layouts>
      <Box py={20}>
        <Container maxW="7xl">
          <Box textAlign="center" pt={10}>
            <Heading>EKSTRA DAN INTRAKURIKULER</Heading>
          </Box>
          <CarouselSub slides={slides} />
          <Stack
            direction="row"
            justifyContent="center"
            lineHeight="35px"
            pt={10}
          >
            <Box flex={1}>
              {data.slice(0, 13).map((el) => (
                <Box key={el.no} display="flex" flexDir="row">
                  <Text fontSize="18px" w="7">
                    {el.no}
                  </Text>
                  <Text fontSize="18px">{el.item}</Text>
                </Box>
              ))}
            </Box>
            <Box flex={1}>
              {data.slice(13, 26).map((el) => (
                <Box key={el.no} display="flex" flexDir="row">
                  <Text fontSize="18px" w="7">
                    {el.no}
                  </Text>
                  <Text fontSize="18px">{el.item}</Text>
                </Box>
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>
    </Layouts>
  );
};

export default ExtraIntra;
