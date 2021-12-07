import React from "react";
import Layouts from "../layouts";
import { Stack, Box, Text, Container, Image } from "@chakra-ui/react";
import CustomButton from "../component/custom-button";
import TextHeader from "../component/text-heder-section";

export async function getServerSideProps() {
  //KURIKULUM
  const request = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/kurikulum",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const dataKurikulum = await request.json();

  return {
    props: {
      dataKurikulum,
    },
  };
}

const Kurikulum = ({ dataKurikulum }) => {
  const data = dataKurikulum?.data;
  return (
    <Layouts>
      <Container pt="100px" maxW="6xl" h="100%">
        <Box pb={16}>
          <TextHeader text="KURIKULUM" width={{ xs: "148px", md: "188px" }} />
        </Box>
        {data?.map((el) => (
          <Stack key={data.id} direction="row" spacing={6} py={10}>
            <Box
              flex={1}
              bg={el.color}
              h="300px"
              w="100%"
              borderRadius="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="xl"
            >
              <Image
                src={`https://actions-api-sd.sandboxindonesia.id/storage/${el?.gambar}`}
                h="80px"
              />
            </Box>
            <Box flex={2} pl={5}>
              <Text fontSize="24px" fontWeight="600" color="primary.600" pb={5}>
                {el.nama_kurikulum?.toUpperCase()}
              </Text>
              <Text color="secondary.500">{el?.deskripsi}</Text>
            </Box>
          </Stack>
        ))}
        <CustomButton
          text="BACK"
          href="/#kurikulum"
          bg="success.500"
          color="white"
          hoverBg="success.600"
        />
      </Container>
    </Layouts>
  );
};

export default Kurikulum;
