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
      <Container maxW="6xl">
        <Stack height="calc(100vh - 80px)" direction="row">
          <Box flex={1} display="flex" flexDir="column" mt="80px">
            <Text
              fontSize={{ base: "35px", md: "50px" }}
              fontWeight="600"
              lineHeight={{ base: "45px", md: "75px" }}
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
            <Box borderRadius="30px" display="flex" mt="80px">
              <ImageChakra
                src="/assets/image/2.jpg"
                alt="slider1"
                width="409px"
                height="283px"
                borderRadius="30px"
              />
            </Box>
            <Box
              borderRadius="40px"
              display="flex"
              position="absolute"
              top="230px"
              left="-110px"
              borderWidth="10px"
              borderColor="white"
            >
              <ImageChakra
                src="/assets/image/1.jpg"
                alt="slider1"
                width="346px"
                height="224px"
                borderRadius="30px"
                objectFit="cover"
              />
            </Box>
            <Box
              borderRadius="40px"
              display="flex"
              position="absolute"
              top="180px"
              right="-60px"
              borderWidth="10px"
              borderColor="white"
            >
              <ImageChakra
                src="/assets/image/5.JPG"
                alt="slider1"
                width="279px"
                height="355px"
                borderRadius="30px"
                objectFit="cover"
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
