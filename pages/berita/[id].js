import {
  Box,
  Stack,
  Container,
  Text,
  Image,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Row, Col } from "react-grid-system";
import Layouts from "../../layouts";
import ButtonBack from "../../component/button-back";
import CardBeritaOther from "../../component/card-berita-other";
import { showImage } from "../../utils/helper";

export async function getServerSideProps(context) {
  const { params: id } = context;

  const requestDetailBerita = await fetch(
    `${process.env.REACT_APP_API_URL}/api/berita/slug/${id.id}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const requestOther = await fetch(
    `${process.env.REACT_APP_API_URL}/api/berita/?except=${id.id}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const beritaOther = await requestOther.json();
  const dataDetail = await requestDetailBerita.json();

  return {
    props: { dataDetail, beritaOther },
  };
}

const DetailBerita = ({ dataDetail, beritaOther }) => {
  const data = dataDetail?.data;
  const listBeritaOther = beritaOther?.data;

  return (
    <Layouts>
      <Container maxW="6xl" py="100px" h="100%">
        <Box display="flex" alignItems="center" flexDir="column">
          <Box py={5}>
            <Heading
              pt={5}
              color="primary.600"
              fontWeight="700"
              fontSize={{ xs: "20px", md: "30px" }}
              textAlign="center"
            >
              {data?.judul?.toUpperCase()}
            </Heading>
            <Text
              fontWeight="600"
              textAlign="center"
              py={1}
              fontSize={{ xs: "14px", md: "20px" }}
            >{`# ${data?.kategori?.nama}`}</Text>
          </Box>
          <Image
            boxShadow="lg"
            borderRadius="20px"
            src={showImage(data?.gambar)}
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
        <Box pt={16}>
          <Text
            pb={10}
            fontSize={{ xs: "1.5rem", md: "1.9rem" }}
            fontWeight="600"
            color="primary.600"
          >
            BERITA LAINNYA :
          </Text>
          <Box as={Row}>
            {listBeritaOther?.slice(0, 4)?.map((el, idx) => (
              <Box as={Col} sm={12} lg={6} key={el.id}>
                <CardBeritaOther {...el} idx={idx} />
              </Box>
            ))}
          </Box>
        </Box>

        <ButtonBack />
      </Container>
    </Layouts>
  );
};

export default DetailBerita;
