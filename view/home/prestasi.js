import {
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Stack,
} from "@chakra-ui/react";
import { Row, Col } from "react-grid-system";
import CardPrestasi from "../../component/card-prestasi";
import TextHeader from "../../component/text-heder-section";

const Potensi = ({ listPrestasi }) => {
  const images = [
    {
      id: 1,
      image: "/assets/potensi/potensi-1.png",
      title: "Juara 1 Tahfidz",
    },
    {
      id: 2,
      image: "/assets/potensi/potensi-2.png",
      title: "Juara Hafalan Quran",
    },
    {
      id: 3,
      image: "/assets/potensi/potensi-3.png",
      title: "Juara Futsal se provinsi",
    },
    {
      id: 4,
      image: "/assets/potensi/potensi-1.png",
      title: "Juara 1 Tahfidz",
    },
    {
      id: 5,
      image: "/assets/potensi/potensi-2.png",
      title: "Juara Hafalan Quran",
    },
    {
      id: 6,
      image: "/assets/potensi/potensi-3.png",
      title: "Juara Futsal se provinsi",
    },
    {
      id: 7,
      image: "/assets/potensi/potensi-1.png",
      title: "Juara 1 Tahfidz",
    },
    {
      id: 8,
      image: "/assets/potensi/potensi-2.png",
      title: "Juara Hafalan Quran",
    },
    {
      id: 9,
      image: "/assets/potensi/potensi-3.png",
      title: "Juara Futsal se provinsi",
    },
    // {
    //   id: 10,
    //   image: "/assets/potensi/potensi-1.png",
    //   title: "Juara 1 Tahfidz",
    // },
    // {
    //   id: 11,
    //   image: "/assets/potensi/potensi-2.png",
    //   title: "Juara Hafalan Quran",
    // },
    // {
    //   id: 12,
    //   image: "/assets/potensi/potensi-3.png",
    //   title: "Juara Futsal se provinsi",
    // },
  ];
  return (
    <Box as="section" height="100%" position="relative">
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
          bottom="0"
          backgroundImage="./assets/background/prestasiright.png"
          width={{ xs: "30%", md: "20%" }}
          height="30%"
          backgroundRepeat="no-repeat"
        />
      </Stack>

      <Container maxW="6xl">
        <Box py={{ xs: 0, md: 10 }} mt="6rem">
          <TextHeader text="PRESTASI" width="159px" />
        </Box>
        <Box as={Row} py="10">
          {listPrestasi?.data?.map((el) => (
            <Box key={el.id} my="5.25rem" sm={12} md={6} lg={4} as={Col}>
              <CardPrestasi
                title={el.judul}
                image={`https://actions-api-sd.sandboxindonesia.id/storage/${el.gambar}`}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Potensi;
