import React from "react";
import { Container, Box, Stack, Text, Image } from "@chakra-ui/react";
import TextHeader from "../../component/text-heder-section";
import CustomButton from "../../component/custom-button";
import { showImage } from "../../utils/helper";

const Kurikulum = ({ data }) => {
  return (
    <Box bg="#F6F8FD" id="kurikulum">
      <Container maxW="7xl" py={24}>
        <TextHeader text="KURIKULUM" width={{ xs: "148px", md: "188px" }} />
        <Stack flexDir={{ xs: "column", md: "row" }} spacing={0} py={20}>
          {data?.slice(0, 4).map((el) => (
            <Box
              key={el.id}
              flex={1}
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <Box
                bg={el.color}
                borderRadius="full"
                w={{ xs: "130px", md: "140px" }}
                h={{ xs: "130px", md: "140px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={showImage(el?.gambar)}
                  alt="icon"
                  h={{ xs: "50px", md: "50px" }}
                />
              </Box>
              <Text
                fontSize="24px"
                fontWeight="500"
                color="black"
                my={{ xs: 8, md: 10 }}
              >
                {el.nama_kurikulum}
              </Text>
              <Text
                fontSize="18px"
                textAlign="center"
                px={{ xs: "50px", md: "0" }}
                mb={10}
                w={{ xs: "50%", md: "70%" }}
              >
                {el.deskripsi?.length <= 70
                  ? el?.deskripsi
                  : `${el?.deskripsi?.slice(0, 70)} ...`}
              </Text>
            </Box>
          ))}
        </Stack>
        <CustomButton
          text="LIHAT SEMUA"
          href="/kurikulum"
          bg="primary.600"
          color="white"
          hoverBg="primary.700"
        />
      </Container>
    </Box>
  );
};

export default Kurikulum;
