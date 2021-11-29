import {
  Box,
  Container,
  InputGroup,
  Input,
  Text,
  Stack,
  Image,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Row, Col } from "react-grid-system";
import CustomButton from "../../component/custom-button";
import CardBerita from "../berita/card-berita";
import TextHeader from "../../component/text-heder-section";

const Berita = ({ categoryBerita, listBerita }) => {
  console.log(listBerita, "list berita")
  return (
    <Box as="section" px={{ xs: 5, md: 0 }}>
      {/* SUBSTRACT BACKGROUND */}

      <Box>
        <TextHeader text="BERITA" width="78px" />
      </Box>

      {/* BERITA */}

      <Box mt={{ xs: "5rem", md: "10rem" }} maxW="6xl" as={Container}>
        <Box as={Row}>
          <Box sm={12} md={8} lg={8} as={Col}>
            {listBerita?.data?.slice(0, 3).map((el) => (
              <CardBerita {...el} />
            ))}
          </Box>

          <Box sm={12} md={8} lg={4} as={Col}>
            <Box color="secondary.600">
              <InputGroup>
                <Input
                  name="search"
                  borderRadius="10px"
                  placeholder="Cari Berita"
                />
                <InputRightElement>
                  <Search2Icon color="green.500" />
                </InputRightElement>
              </InputGroup>
              <Box
                borderRadius="10px"
                borderWidth="1px"
                lineHeight="35px"
                p={5}
                mt={5}
                height="273px"
              >
                <Text fontSize="1.125rem" fontWeight="600">
                  Kategori
                </Text>
                {categoryBerita?.map((el) => (
                  <Box
                    key={el.id}
                    display="flex"
                    flexDir="row"
                    justifyContent="space-between"
                    fontWeight="400"
                  >
                    <Text>{el.nama}</Text>
                  </Box>
                ))}
              </Box>
              <Box
                borderRadius="10px"
                borderWidth="1px"
                lineHeight="35px"
                p={5}
                mt={5}
                height="273px"
              >
                <Stack
                  direction="row"
                  spacing={10}
                  display="flex"
                  align="center"
                  justifyContent="center"
                  pb={3}
                  borderBottomWidth="3px"
                >
                  <Image
                    src="/assets/icon/icon-ig.png"
                    alt="icon-sosmed"
                    w="10"
                    h="10"
                  />
                  <Box px={8} borderRightWidth="3px" borderLeftWidth="3px">
                    <Image
                      src="/assets/icon/icon-fb.png"
                      alt="icon-sosmed"
                      w="10"
                      h="10"
                    />
                  </Box>
                  <Image
                    src="/assets/icon/icon-yt.png"
                    alt="icon-sosmed"
                    w="12"
                    h="12"
                  />
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>

        <CustomButton
          text="LIHAT SEMUA"
          bg="primary.600"
          color="white"
          hoverBg="primary.700"
        />
      </Box>
    </Box>
  );
};

export default Berita;
