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
import { CalendarIcon, EditIcon } from "@chakra-ui/icons";

export async function getServerSideProps(context) {
  const { params: id } = context;

  const requestDetailBerita = await fetch(
    `https://actions-api-sd.sandboxindonesia.id/api/berita/slug/${id.id}`,
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
  
  return (
    <Layouts>
      <Container maxW="6xl" py="100px" h="100%">
        <Box display="flex" alignItems="center" flexDir="column">
          <Box py={5}>
            <Heading pt={5} color="primary.600" fontWeight="700">
              {data?.judul?.toUpperCase()}
            </Heading>
            <Text
              fontWeight="600"
              textAlign="center"
              py={1}
              fontSize="20px"
            >{`# ${data?.kategori}`}</Text>
          </Box>
          <Image
            boxShadow="lg"
            borderRadius="20px"
            src={`https://actions-api-sd.sandboxindonesia.id/storage/${data?.gambar}`}
            alt="gambarberita"
            width="100%"
            height="450px"
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
            <Text fontSize="0.875rem">{data?.waktu_publikasi}</Text>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon as={EditIcon} />
            <Text fontSize="0.875rem">{data?.penulis}</Text>
          </Stack>
        </Stack>
        <Box py={10} textAlign="justify">
          <Text color="primary.600" fontSize="18px">
            {data?.isi}
          </Text>
        </Box>

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
