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

const VisiMisi = () => {
  return (
    <Layouts>
      <Box py={20}>
        <Container maxW="7xl">
          <Box textAlign="center" py={20}>
            <Heading>SD MUHAMMADIYAH KLATEN UTARA</Heading>
            <Heading>BINAAN SD MUHAMMADIYAH SAPEN YOGYAKARTA</Heading>
          </Box>
          <Box>
            <Text fontSize="1.9rem" fontWeight="600">
              VISI
            </Text>
            <Text fontSize="18px">
              Menjadikan pribadi muslim yang cerdas, kreatif, dan beraklaq mulia
              dengan iman dan taqwa
            </Text>
          </Box>
          <Box pt={10}>
            <Text fontSize="1.9rem" fontWeight="600">
              MISI
            </Text>
            <OrderedList fontSize="18px" lineHeight="35px" w="80%">
              <ListItem>
                Melaksanakan pembelajaran dan pembimbibgan secar efektif untyuk
                mengoptimalkan kemampuan anak berdasarkan brdasarkan alquran dan
                as sunah.
              </ListItem>
              <ListItem>
                Menumbuhkembangkan penghayatan dan pengamalan terhadap agama
                islam untuk membentuk budi pekerti dan memiliki kepedulian
                terhadap lingkungan.
              </ListItem>
              <ListItem>
                Penddidikan yang manusiawi dengan suasana yang kondusif senang
                belajar dan belajar dengan senang.
              </ListItem>
            </OrderedList>
          </Box>
        </Container>
      </Box>
    </Layouts>
  );
};

export default VisiMisi;
