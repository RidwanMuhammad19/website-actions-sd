import React, { useState, useEffect } from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";

export const Carousel = ({ slides }) => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides?.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const carouselStyle = {
    transition: "all .7s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 4000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, []);

  return (
    <Flex
      width="627px"
      height="393px"
      alignItems="center"
      justifyContent="center"
      boxShadow={"md"}
      borderRadius="1.575rem"
    >
      <Flex
        overflow="hidden"
        pos="relative"
        borderRadius="1.575rem"
        borderWidth={"1px"}
        borderColor={"primary.600"}
      >
        <Flex h="400px" w="full" height="393px" {...carouselStyle}>
          {slides?.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Image src={slide.img} boxSize="full" backgroundSize="cover" />
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
};
