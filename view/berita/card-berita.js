import { Box, Stack, Image, Text, Avatar, Icon } from "@chakra-ui/react";
import { Calendar as CalendarIcon } from "react-feather";
import Link from "next/link";
import { showImage } from "../../utils/helper";

const CardBerita = ({
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
    <Stack
      mb="4.688rem"
      direction={{ base: "column", lg: "row" }}
      spacing={0}
      alignItems="center"
    >
      <Box flex={1} position="relative">
        {idx === 0 && (
          <Box position="absolute" right="5" p={{ xs: ".8rem", md: ".5rem" }}>
            <Box
              px={3}
              py={1}
              bgColor="info.400"
              color="white"
              display="flex"
              borderRadius="0.625rem"
              justifyContent="center"
              alignItems="center"
              fontSize="0.875rem"
            >
              New
            </Box>
          </Box>
        )}
        <Image
          boxShadow="xl"
          borderRadius="1.25rem"
          w={{ base: "100%", md: "300px" }}
          h={{ base: "auto", md: "220px" }}
          src={showImage(gambar)}
          alt="berita"
        />
      </Box>

      <Stack flex={1.5} spacing={3} px="1rem" py=".2rem">
        <Text fontSize="1rem" color="info.500" fontWeight={400}>
          {kategori.nama}
        </Text>

        <Text color="text.subtitle" fontSize="1.125rem" fontWeight={400}>
          {judul?.length <= 35 ? judul : `${judul?.slice(0, 35)} ...`}
        </Text>

        <Text
          color="text.description"
          fontSize="0.875rem"
          // dangerouslySetInnerHTML={{
          //   __html: isi?.length <= 90 ? isi : `${isi?.slice(0, 45)} ...`,
          // }}
        >
          {isi?.length <= 90 ? isi : `${isi?.slice(0, 45)} ...`}
        </Text>

        <Text color="info.500" fontSize="sm">
          <Link href={`/berita/${slug}`}>Baca Selengkapnya</Link>
        </Text>

        <Stack direction="row" alignItems="center" spacing={3}>
          {avatar ? (
            <Image src={showImage(avatar)} alt="image-user" w="50px" />
          ) : (
            <Avatar name={penulis} alt="image-user" />
          )}

          <Stack spacing={0}>
            <Text color="text.subtitle" fontSize="0.875rem">
              {penulis}
            </Text>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Icon color="secondary.700" as={CalendarIcon} />
              <Text color="secondary.700" fontSize="0.875rem">
                {waktu_publikasi}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardBerita;
