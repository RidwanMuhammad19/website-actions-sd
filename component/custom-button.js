import React from "react";
import { Box, Button } from "@chakra-ui/react";

const CustomButton = ({ text, bg, color, hoverBg }) => {
  return (
    <Box display="flex" justifyContent="center" my={{ xs: 10, md: 20 }}>
      <Button
        height={{ xs: "45", md: "66px" }}
        fontSize={{ xs: "15px", md: "20px" }}
        bg={bg}
        px={{ xs: 6, md: 10 }}
        color={color}
        borderRadius="100px"
        boxShadow="xl"
        _hover={{
          bg: hoverBg,
        }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default CustomButton;
