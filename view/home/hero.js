import {
  Container,
  Box,
  Stack,
  Text,
  Button,
  Image as ImageChakra,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box pt="24">
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
        <Stack height="calc(100vh - 80px)" direction="row">
          <Box
            flex={1}
            display="flex"
            flexDir="column"
            mt="80px"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Text
              textAlign={{ xs: "center", md: "left" }}
              fontSize={{ xs: "30px", md: "55px" }}
              fontWeight="600"
              lineHeight={{ xs: "45px", md: "75px" }}
              color="primary.600"
            >
              SD Muhammadiyah Klaten Utara
            </Text>
            <Button
              mt="100px"
              color="white"
              bg="primary.600"
              width="269px"
              height="66px"
              fontSize="20px"
              fontWeight="600"
              borderRadius="50px"
              boxShadow="xl"
              _hover={{
                bg: "primary.700",
              }}
            >
              DAFTAR SEKARANG
            </Button>
          </Box>
          <Box
            flex={1}
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            position="relative"
          >
            <Box
              width="409px"
              height="283px"
              borderRadius="1.875rem"
              border="10px solid white"
              bgSize="cover"
              bgRepeat="no-repeat"
              bgImage="url('/assets/image/2.JPG')"
            />
            <Box
              display="flex"
              alignItems="center"
              top="120px"
              position="absolute"
            >
              <Box
                w="346px"
                h="224px"
                mr={8}
                borderRadius="1.875rem"
                border="10px solid white"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgImage="url('/assets/polcil.JPG')"
              />

              <Box
                right="3%"
                w="279px"
                h="355px"
                bg="warning.500"
                borderRadius="1.875rem"
                border="10px solid white"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgImage="url('/assets/image/4.JPG')"
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
