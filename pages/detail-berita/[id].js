import { useEffect, useState } from "react";
import { Box, Stack, Container, Text, Image, Heading } from "@chakra-ui/react";
import Layouts from "../../layouts";
import CustomButton from "../../component/custom-button";

export async function getServerSideProps(context) {
  const { params: id } = context;

  const requestDetailBerita = await fetch(
    `https://actions-api-sd.sandboxindonesia.id/api/berita/${id.id}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const dataDetail = await requestDetailBerita.json();

  return {
    props: { dataDetail },
  };
}

const DetailBerita = ({ dataDetail }) => {
  const data = dataDetail?.data;
  console.log(data, "is here");
  return (
    <Layouts>
      <Container maxW="6xl" py="100px" h="100%">
        <Box display="flex" alignItems="center" flexDir="column">
          <Heading py={5} color="primary.600" fontWeight="700">
            {data?.judul?.toUpperCase()}
          </Heading>
          <Image
            src={`https://actions-api-sd.sandboxindonesia.id/storage/${data.gambar}`}
            alt="gambarberita"
            width="100%"
            height="450px"
            objectFit="cover"
          />
        </Box>
        <Stack justifyContent="space-between" direction="row">
          <Text
            py={2}
            as="i"
            color="primary.600"
          >{`Penulis : ${data?.penulis}`}</Text>
          <Text
            py={2}
            as="i"
            color="primary.600"
          >{`Kategori : ${data?.kategori}`}</Text>
        </Stack>
        <Box py={10} textAlign="justify">
          <Text color="primary.600" fontSize="18px">
            {data?.isi}
          </Text>
        </Box>
        <Text textAlign="right">{data?.waktu_publikasi}</Text>
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

export default DetailBerita;
