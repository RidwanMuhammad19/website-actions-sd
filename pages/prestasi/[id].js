import {
  Box,
  Stack,
  Container,
  Text,
  Image,
  Heading,
  Icon,
} from "@chakra-ui/react";
import Layouts from "../../layouts";
import CustomButton from "../../component/custom-button";
import { CalendarIcon } from "@chakra-ui/icons";

export async function getServerSideProps(context) {
  const { params: id } = context;

  const requestDetailPrestasi = await fetch(
    `${process.env.REACT_APP_API_URL}/api/prestasi/slug/${id.id}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const dataDetail = await requestDetailPrestasi.json();

  return {
    props: { dataDetail },
  };
}

const DetailPrestasi = ({ dataDetail }) => {
  const data = dataDetail?.data;

  return (
    <Layouts>
      <Container maxW="6xl" py="100px" h="100%">
        <Heading textAlign="center" py={5} color="primary.600" fontWeight="700">
          {data?.judul?.toUpperCase()}
        </Heading>
        <Box display="flex" alignItems="center" flexDir="column">
          <Image
            boxShadow="lg"
            borderRadius="20px"
            src={showImage(data?.gambar)}
            alt="gambarberita"
            width="100%"
            height="550px"
            objectFit="cover"
          />
        </Box>
        <Stack
          direction="row"
          color="secondary.600"
          spacing={5}
          pt={5}
          pr={5}
          justifyContent="flex-end"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon as={CalendarIcon} />
            <Text fontSize="0.875rem">{data?.created_at}</Text>
          </Stack>
        </Stack>

        <Box py={10} textAlign="justify">
          <Text color="primary.600" fontSize="18px">
            {data?.deskripsi}
          </Text>
        </Box>

        <CustomButton
          text="BACK"
          href="/#prestasi"
          bg="success.500"
          color="white"
          hoverBg="success.600"
        />
      </Container>
    </Layouts>
  );
};

export default DetailPrestasi;
