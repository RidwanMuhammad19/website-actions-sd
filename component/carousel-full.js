import React, { useState, useEffect } from "react";
import { Text, Box, Flex, Image, Stack } from "@chakra-ui/react";

const CarouselSub = ({ title, slides }) => {
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
    transition: "all .8s",
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
    <Flex w="full" alignItems="center" justifyContent="center" pt={10}>
      <Flex w="full" pos="relative" overflow="hidden" borderRadius={"1.8rem"}>
        <Flex h="500px" w="full" {...carouselStyle}>
          {slides?.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Image
                src={slide.img}
                boxSize="full"
                backgroundSize="cover"
                borderRadius={"1.8rem"}
                objectFit={"cover"}
              />
              {title && (
                <Stack
                  p="8px 12px"
                  pos="absolute"
                  bottom="24px"
                  textAlign="center"
                  w="full"
                  color="white"
                >
                  <Text fontSize="2xl">{slide.label}</Text>
                  <Text fontSize="lg">{slide.description}</Text>
                </Stack>
              )}
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
export default CarouselSub;
