import React from "react";
import {
  Container,
  Box,
  Stack,
  Text,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useTab,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import CustomButton from "../../component/custom-button";

const Informasi = ({ data }) => {
  return (
    <Box id="informasi">
      <Container
        maxW="7xl"
        height="100%"
        py={{ xs: 10, md: 20 }}
        px={{ xs: 10, md: 0 }}
      >
        <Box
          borderRadius="15px"
          px={{ xs: "1rem", md: "10rem" }}
          py={15}
          color="white"
          bg="info.500"
        >
          <Text
            fontSize={{ xs: "18px", md: "32px" }}
            lineHeight={{ xs: "35px", md: "50px" }}
            textAlign="center"
          >
            Informasi Penerimaan Peserta Didik Baru 2022-2023 SD Muhammadiyah
            Klaten Utara Binaan SD Muh Sapen Yogyakarta
          </Text>
        </Box>
        <Stack direction={{ xs: "column", md: "row" }} pt={{ xs: 10, md: 20 }}>
          <Tabs orientation="vertical" variant="soft-rounded">
            <TabList>
              {data.map((el) => (
                <Tab
                  key={el.id}
                  as={Box}
                  _selected={{
                    color: "white",
                    bg: "primary.600",
                    boxShadow: "xl",
                  }}
                  color="primary.600"
                  _hover={{
                    color: "white",
                    bg: "primary.600",
                    cursor: "pointer",
                    boxShadow: "xl",
                  }}
                  _focus={{
                    color: "white",
                    bg: "primary.600",
                    cursor: "pointer",
                    boxShadow: "xl",
                  }}
                  display="flex"
                  mb={5}
                  flexDir="row"
                  borderRadius="20px"
                  width={{ xs: "100px", md: "305px" }}
                  borderWidth="1px"
                  alignItems="center"
                  p={5}
                >
                  <Image
                    src={`https://actions-api-sd.sandboxindonesia.id/storage/${el.icon}`}
                    alt="icon"
                    w="50"
                    h="50"
                    mr={{ xs: 0, md: 5 }}
                  />
                  <Text
                    display={{ xs: "none", md: "flex" }}
                    fontSize={{ xs: "14px", md: "20px" }}
                    fontWeight="400"
                  >
                    {el.nama}
                  </Text>
                </Tab>
              ))}
            </TabList>
            <TabPanels ml="24px">
              {data.map((el) => (
                <TabPanel
                  as={Box}
                  key={el.id}
                  display="flex"
                  flexDir="column"
                  pt="0"
                >
                  {el.informasi?.map((item) => (
                    <Box
                      key={item.id}
                      display="flex"
                      flexDir="row"
                      pb={{ xs: 2, md: 8 }}
                    >
                      {el.informasi?.length > 1 && (
                        <Box
                          borderWidth={{ xs: "2px", md: "3px" }}
                          borderColor="info.500"
                          borderRadius="full"
                          px={1}
                          py={{ xs: 0, md: 1 }}
                          w={{ xs: "28px", md: "38px" }}
                          h={{ xs: "28px", md: "38px" }}
                        >
                          <CheckIcon
                            w={{ xs: 4, md: 6 }}
                            h={{ xs: 4, md: 6 }}
                            color="info.500"
                          />
                        </Box>
                      )}

                      <Text
                        key={item.id}
                        ml={5}
                        color="primary.600"
                        fontSize={{ xs: "18px", md: "24px" }}
                        lineHeight={{ xs: "25px", md: "35px" }}
                      >
                        {item.deskripsi}
                      </Text>
                    </Box>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Stack>
        <CustomButton
          text="DAFTAR SEKARANG"
          href="/pendaftaran"
          color="white"
          bg="primary.600"
          hoverBg="primary.700"
        />
      </Container>
    </Box>
  );
};

export default Informasi;
