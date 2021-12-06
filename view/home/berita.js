import { useEffect } from "react";
import {
  Box,
  Container,
  InputGroup,
  Input,
  Text,
  Stack,
  Image,
  InputRightElement,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Search2Icon } from "@chakra-ui/icons";
import { Row, Col } from "react-grid-system";
import { useDebounce } from "use-debounce";
import CustomButton from "../../component/custom-button";
import CardBerita from "../../view/berita/card-berita";
import TextHeader from "../../component/text-heder-section";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";

const Berita = ({ listKategoriBerita, listBerita }) => {
  const { register, watch } = useForm();
  const watchSearch = watch("search", null);
  const [debonceSearch] = useDebounce(watchSearch, 1000);

  // const router = useRouter();
  // useEffect(() => {
  //   router.push(`?search=${debonceSearch}`, "", {
  //     scroll: false,
  //   });
  // }, [debonceSearch]);

  return (
    <Box as="section" px={{ xs: 5, md: 0 }}>
      {/* SUBSTRACT BACKGROUND */}

      <Box>
        <TextHeader textLine text="BERITA" width="78px" />
      </Box>

      {/* BERITA */}

      <Box mt={{ xs: "5rem", md: "10rem" }} maxW="7xl" as={Container}>
        <Box as={Row}>
          <Box sm={12} md={8} lg={8} as={Col}>
            {listBerita?.slice(0, 3).map((el, idx) => (
              <CardBerita {...el} idx={idx} key={el.id} />
            ))}
          </Box>

          <Box sm={12} md={8} lg={4} as={Col}>
            <Box color="secondary.600">
              <InputGroup>
                <Input
                  {...register("search")}
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
                px={5}
                py={5}
                mt={5}
              >
                <Text fontSize="1.125rem" fontWeight="600">
                  Kategori
                </Text>
                {listKategoriBerita?.map((el) => (
                  <Box
                    key={el.id}
                    display="flex"
                    flexDir="row"
                    justifyContent="space-between"
                    fontWeight="300"
                  >
                    <Text fontWeight="300">{el.nama}</Text>
                    <Text>{`( ${el.berita_count} )`}</Text>
                  </Box>
                ))}
              </Box>
              <Box
                borderRadius="10px"
                borderWidth="1px"
                lineHeight="35px"
                p={5}
                mt={5}
                height="100%"
                as={Tabs}
                variant="rounded"
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
                  <TabList>
                    <Tab _focus={{ boxShadow: "none" }} px={8}>
                      <Image
                        src="/assets/icon/icon-ig.png"
                        alt="icon-sosmed"
                        w="10"
                        _hover={{ w: "12", transition: "0.2s" }}
                      />
                    </Tab>
                    <Tab
                      _focus={{ boxShadow: "none" }}
                      px={8}
                      borderRightWidth="3px"
                      borderLeftWidth="3px"
                    >
                      <Image
                        _hover={{ w: "12", transition: "0.2s" }}
                        src="/assets/icon/icon-fb.png"
                        alt="icon-sosmed"
                        w="10"
                      />
                    </Tab>
                    <Tab _focus={{ boxShadow: "none" }} px={8}>
                      <Image
                        _hover={{ w: "14", transition: "0.2s" }}
                        src="/assets/icon/icon-yt.png"
                        alt="icon-sosmed"
                        w="12"
                      />
                    </Tab>
                  </TabList>
                </Stack>
                <Box py={2}>
                  <TabPanels>
                    {/* <TabPanel>
                      <iframe
                        src="https://www.instagram.com/p/CWpWLz9v5CX/embed"
                        width="100%"
                        height="450"
                        frameBorder="0"
                        scrolling="no"
                        allowtransparency="true"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe>
                    </TabPanel> */}
                    {/* <TabPanel pl={2}>
                      <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fraksyedev&tabs=timeline&width=330&height=450&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="300"
                        height="450"
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe>
                    </TabPanel> */}
                    {/* <TabPanel>
                      <ReactPlayer
                        width="100%"
                        height="450"
                        url="https://www.youtube.com/watch?v=hfPrVBAT6Vc"
                      />
                    </TabPanel> */}
                  </TabPanels>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <CustomButton
          text="LIHAT SEMUA"
          href="/lihat-semua-berita"
          bg="primary.600"
          color="white"
          hoverBg="primary.700"
        />
      </Box>
    </Box>
  );
};

export default Berita;
