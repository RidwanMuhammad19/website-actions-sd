import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

const CustomButton = ({ text, bg, color, hoverBg, href }) => {
  return (
    <Box display="flex" justifyContent="center" my={{ xs: 10, md: 20 }}>
      <Link href={href}>
        <Button
          letterSpacing="1%"
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
      </Link>
    </Box>
  );
};

export default CustomButton;
