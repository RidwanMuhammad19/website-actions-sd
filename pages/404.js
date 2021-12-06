import React from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      flexDir="column"
    >
      <Image src="../assets/404.png" alt="imagenotfound" w="40%" />
      <Text fontSize="1.9rem" fontWeight="500" color="primary.600">
        Oops... Halaman yang Anda Cari tidak Ditemukan
      </Text>
      <Button
        my={5}
        h="64px"
        px={20}
        color="white"
        bg="primary.600"
        borderRadius="30px"
        boxShadow="2xl"
        _hover={{ bg: "primary.700" }}
        onClick={() => router.back()}
      >
        Kembali ke Halaman Sebelumnya
      </Button>
    </Box>
  );
};

export default Custom404;
