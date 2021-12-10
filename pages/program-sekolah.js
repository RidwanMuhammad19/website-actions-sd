import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CarouselSub from "../component/carousel-full";
import Layouts from "../layouts";

const ProgramSekolah = () => {
  const slides = [
    {
      img: "/assets/slider/programsekolah/1.JPG",
    },
    {
      img: "/assets/slider/programsekolah/2.jpg",
    },
    {
      img: "/assets/slider/programsekolah/3.jpg",
    },
    {
      img: "/assets/slider/programsekolah/4.jpg",
    },
    {
      img: "/assets/slider/programsekolah/5.jpg",
    },
    {
      img: "/assets/slider/programsekolah/6.JPG",
    },
    {
      img: "/assets/slider/programsekolah/7.jpg",
    },
    {
      img: "/assets/slider/programsekolah/8.jpg",
    },
    {
      img: "/assets/slider/programsekolah/9.jpg",
    },
  ];

  const data = [
    {
      no: "1.",
      item: "Polisi Anak",
    },
    {
      no: "2.",
      item: "Hafal Jux 30",
    },
    {
      no: "3.",
      item: "Program Wisuda Al-Quran kelas 1 dan 2",
    },
    {
      no: "4.",
      item: "Lebih dari 20 ekstrakurikuler sesuai minat dan bakat anak",
    },
    {
      no: "5.",
      item: "Psikolog, BK, homevisit",
    },
    {
      no: "6.",
      item: "Pembiasaan sholat dhuha setiap pagi",
    },
    {
      no: "7.",
      item: "Outing class, fieldtrip dan outbond",
    },
    {
      no: "8.",
      item: "Tahfidz camp",
    },
    {
      no: "9.",
      item: "Market day",
    },
    {
      no: "10.",
      item: "Literacy day",
    },
    {
      no: "11.",
      item: "Cooking day",
    },
    {
      no: "12.",
      item: "ESQ setiap 3 bulan",
    },
    {
      no: "13.",
      item: "Penyiapan dai kids",
    },
    {
      no: "14.",
      item: "Parent teaching day",
    },
    {
      no: "15.",
      item: "Penerapan budaya islami",
    },
    {
      no: "16.",
      item: "Kegiatan hari besar dan agama",
    },
    {
      no: "17.",
      item: "SD Muhammadiyah Klaten Utara Got Talent",
    },
  ];

  return (
    <Layouts>
      <Box py={20}>
        <Container maxW="7xl">
          <Box textAlign="center" py={10}>
            <Heading>PROGRAM SEKOLAH</Heading>
          </Box>
          <CarouselSub slides={slides} />
          <Box py={10}>
            {data.slice(0, 13).map((el) => (
              <Box key={el.no} display="flex" flexDir="row">
                <Text fontSize="18px" w="7">
                  {el.no}
                </Text>
                <Text fontSize="18px">{el.item}</Text>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Layouts>
  );
};

export default ProgramSekolah;
