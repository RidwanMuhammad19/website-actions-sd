import { Box, Stack, Image, Text, Avatar, Icon } from "@chakra-ui/react";
import { Calendar as CalendarIcon } from "react-feather";
import { showImage } from "../utils/helper";
import Link from "next/link";

const CardBeritaOther = ({
  slug,
  idx,
  gambar,
  kategori,
  isi,
  penulis,
  judul,
  waktu_publikasi,
  avatar,
}) => {
  return (
    <Stack mb="4.688rem" direction={{ base: "column", lg: "row" }} spacing={0}>
      <Box flex={1} position="relative">
        {idx === 0 && (
          <Box position="absolute" p={{ xs: ".8rem", md: ".5rem" }} right="0">
            <Box
              px={3}
              py={1}
              bgColor="info.400"
              color="white"
              display="flex"
              borderRadius="0.625rem"
              justifyContent="center"
              alignItems="center"
              fontSize="0.7rem"
            >
              New
            </Box>
          </Box>
        )}
        <Image
          boxShadow="xl"
          borderRadius="1.25rem"
          w={{ base: "100%", md: "250px" }}
          h={{ base: "auto", md: "150px" }}
          src={showImage(gambar)}
          alt="berita"
        />
      </Box>

      <Stack
        flex={1.5}
        w="100%"
        spacing={1}
        px={{ xs: 0, md: "1rem" }}
        pt={{ xs: 5, md: 0 }}
      >
        <Text fontSize="0.8rem" color="info.500" fontWeight={400}>
          {kategori.nama}
        </Text>

        <Text color="text.subtitle" fontSize="1.0rem" fontWeight={400}>
          {judul?.length <= 35 ? judul : `${judul?.slice(0, 30)} ...`}
        </Text>

        <Text color="text.description" fontSize="0.7rem">
          {isi?.length <= 90 ? isi : `${isi?.slice(0, 35)} ...`}
        </Text>

        <Text color="info.500" fontSize="0.8rem">
          <Link href={`/berita/${slug}`}>Baca Selengkapnya</Link>
        </Text>

        <Stack direction="row" alignItems="center" spacing={3}>
          {avatar ? (
            <Image src={showImage(avatar)} alt="image-user" w="40px" />
          ) : (
            <Avatar name={penulis} alt="image-user" />
          )}

          <Stack spacing={0}>
            <Text color="text.subtitle" fontSize="0.7rem">
              {penulis}
            </Text>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Icon color="secondary.700" as={CalendarIcon} w="3" />
              <Text color="secondary.700" fontSize="0.7rem">
                {waktu_publikasi}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardBeritaOther;
