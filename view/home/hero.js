import {
  Container,
  Box,
  Stack,
  Text,
  Button,
  Image as ImageChakra,
  StackDivider,
} from "@chakra-ui/react";
import { Carousel } from "../../component/carousel";
import { useRouter } from "next/router";
import "@fontsource/lobster/400.css";
import "@fontsource/comic-neue/400.css";

const Hero = ({ data }) => {
  const router = useRouter();

  const slides = [
    {
      img: `https://actions-api-sd.sandboxindonesia.id/storage/${data?.hero_image1}`,
    },
    {
      img: `https://actions-api-sd.sandboxindonesia.id/storage/${data?.hero_image2}`,
    },
    {
      img: `https://actions-api-sd.sandboxindonesia.id/storage/${data?.hero_image3}`,
    },
  ];

  return (
    <Box py="24">
      <Stack flexDirection="row">
        <Box
          zIndex="-1"
          position="absolute"
          mt="130px"
          backgroundImage="./assets/background/heroleft.png"
          width="100%"
          height="60%"
          backgroundRepeat="no-repeat"
        />
        <Box
          position="absolute"
          top="0"
          right="0"
          backgroundImage="./assets/background/heroright.png"
          width="15%"
          height="50%"
          backgroundRepeat="no-repeat"
        />
      </Stack>
      <Container maxW="7xl">
        <Stack height="80vh" direction="row" alignItems={"center"} pb={10}>
          <Stack
            flex={1}
            direction="column"
            alignItems={{ xs: "center", md: "flex-start" }}
            spacing={"60px"}
          >
            <Text
              textAlign={{ xs: "center", md: "left" }}
              fontSize={{ xs: "30px", md: "54px" }}
              fontWeight="400"
              lineHeight={{ xs: "45px", md: "60px" }}
              color="primary.600"
              fontFamily={"Lobster"}
              w="80%"
            >
              {data?.nama_sekolah}
            </Text>
            <Text
              fontFamily={"Comic Neue"}
              fontSize={"24px"}
              color="primary.600"
            >
              Cerdas, Kreatif dan Berakhlak mulia
            </Text>
            <Button
              color="white"
              bg="primary.600"
              width="250px"
              height="60px"
              fontSize="20px"
              fontWeight="600"
              borderRadius="50px"
              boxShadow="xl"
              _hover={{
                bg: "primary.700",
              }}
              onClick={() => router.push("/pendaftaran")}
            >
              DAFTAR SEKARANG
            </Button>
          </Stack>
          <Box
            flex={1}
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
          >
            <Box bgSize="cover" bgRepeat="no-repeat">
              <Carousel slides={slides} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
