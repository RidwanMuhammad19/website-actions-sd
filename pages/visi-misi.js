import React from "react";
import {
  Container,
  Stack,
  Box,
  Text,
  Heading,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import Layouts from "../layouts";
import CarouselSub from "../component/carousel-full";

const VisiMisi = () => {
  const slides = [
    {
      img: "/assets/slider/visimisi/1.JPG",
    },
    {
      img: "/assets/slider/visimisi/2.jpg",
    },
    {
      img: "/assets/slider/visimisi/3.jpg",
    },
    {
      img: "/assets/slider/visimisi/4.jpg",
    },
    {
      img: "/assets/slider/visimisi/5.jpg",
    },
  ];
  return (
    <Layouts>
      <Box py={20}>
        <Container maxW="7xl">
          <Box textAlign="center" pt={10}>
            <Heading>SD MUHAMMADIYAH KLATEN UTARA</Heading>
            <Heading>BINAAN SD MUHAMMADIYAH SAPEN YOGYAKARTA</Heading>
          </Box>
          <CarouselSub slides={slides} />
          <Box pt={10}>
            <Text fontSize="1.9rem" fontWeight="600">
              VISI
            </Text>
            <Text fontSize="18px">
              Menjadikan Pribadi Muslim yang cerdas, kreatif dan berakhlak mulia
              dengan iman dan taqwa
            </Text>
          </Box>
          <Box pt={10}>
            <Text fontSize="1.9rem" fontWeight="600">
              MISI
            </Text>
            <OrderedList fontSize="18px" lineHeight="35px" w="80%">
              <ListItem>
                Merancang pembelajaran yang menarik dan menyenangkan yang mampu
                memotivasi peserta didik untuk selalu belajar serta giat untuk
                menjadi muslim sejati.
              </ListItem>
              <ListItem>
                Membangun lingkungan sekolah yang membentuk peserta didik
                memiliki akhlak mulia melalui rutinitas kegiatan keagamaan dan
                menerapkan ajaran agama melaui cara berinteraksi di sekolah.
              </ListItem>
              <ListItem>
                Membangun lingkungan sekolah yang bertoleransi dalam kebhinekaan
                global, mencintai budaya lokal dan menjunjung nilai gotong
                royong.
              </ListItem>
              <ListItem>
                Mengembangkan kemandirian, nalar kritis dan kreativitas yang
                memfasilitasi keragaman minat dan bakat peserta didik.
              </ListItem>
              <ListItem>
                Mengembangkan program sekolah yang membentuk ide dan gagasan
                cepat tanggap terhadap perubahan yang terjadi untuk merancang
                inovasi.
              </ListItem>
              <ListItem>
                Mengembangkan dan memfasilitasi peningkatan prestasi peserta
                didik sesuai minat dan bakatnya melalui proses pendampingan dan
                kerja sama dengan orang tua.
              </ListItem>
            </OrderedList>
          </Box>
        </Container>
      </Box>
    </Layouts>
  );
};

export default VisiMisi;
