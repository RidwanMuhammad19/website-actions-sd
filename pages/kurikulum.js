import React from "react";
import Layouts from "../layouts";
import { Stack, Box, Text, Container, Image } from "@chakra-ui/react";
import { Row, Col } from "react-grid-system";
import { listKurikulum } from "../constant";
import CustomButton from "../component/custom-button";
import TextHeader from "../component/text-heder-section";

const Kurikulum = () => {
  return (
    <Layouts>
      <Container pt="100px" maxW="6xl" h="100%">
        <TextHeader text="KURIKULUM" width={{ xs: "148px", md: "188px" }} />
        <Stack as={Row} spacing={0} py={20}>
          {listKurikulum.map((el) => (
            <Box
              key={el.id}
              flex={1}
              display="flex"
              flexDir="column"
              alignItems="center"
              sm={12}
              md={6}
              lg={4}
              xl={3}
              as={Col}
            >
              <Box
                bg={el.bg}
                borderRadius="full"
                w={{ xs: "130px", md: "150px" }}
                h={{ xs: "130px", md: "150px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={el.icon}
                  alt="icon"
                  w={{ xs: "50px", md: "60px" }}
                />
              </Box>
              <Text
                fontSize="24px"
                fontWeight="500"
                color="black"
                my={{ xs: 8, md: 10 }}
              >
                {el.header}
              </Text>
              <Text
                fontSize="18px"
                textAlign="center"
                px={{ xs: "50px", md: "0" }}
                mb={10}
                w="90%"
              >
                {el.text}
              </Text>
            </Box>
          ))}
        </Stack>
        <CustomButton
          text="BACK"
          href="/"
          bg="success.500"
          color="white"
          hoverBg="success.600"
        />
      </Container>
    </Layouts>
  );
};

export default Kurikulum;
