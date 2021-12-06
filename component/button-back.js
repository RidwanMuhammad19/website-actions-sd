import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const ButtonBack = () => {
  const router = useRouter();
  return (
    <Box display="flex" justifyContent="center" my={{ xs: 10, md: 20 }}>
      <Button
        letterSpacing="1%"
        height={{ xs: "45", md: "66px" }}
        fontSize={{ xs: "15px", md: "20px" }}
        bg="success.500"
        px={{ xs: 6, md: 10 }}
        color="white"
        borderRadius="100px"
        boxShadow="xl"
        _hover={{
          bg: "success.600",
        }}
        onClick={() => router.back()}
      >
        BACK
      </Button>
    </Box>
  );
};

export default ButtonBack;
