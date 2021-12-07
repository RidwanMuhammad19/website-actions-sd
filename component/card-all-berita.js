import { Box, Stack, Image, Text, Avatar, Icon } from "@chakra-ui/react";
import { Calendar as CalendarIcon } from "react-feather";
import Link from "next/link";

const AllBerita = ({
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
  const dumyText =
    "Bencana Alam Terjadi di Lumajang Jawa Timur, Gunung Semeru Meletus dengan Kencang, Jam 4 Sore sudah terasa jam 8 Malam";
  return (
    <Stack
      mb="4.688rem"
      direction={{ base: "column", lg: "row" }}
      spacing={0}
      alignItems="center"
    >
      <Box flex={1.5} position="relative">
        {idx === 0 && (
          <Box
            position="absolute"
            p={{ xs: ".8rem", md: ".5rem" }}
            display="flex"
            right="3"
          >
            <Box
              px={4}
              py={1}
              bgColor="info.400"
              color="white"
              display="flex"
              borderRadius="0.625rem"
              justifyContent="center"
              alignItems="center"
              fontSize="0.975rem"
            >
              New
            </Box>
          </Box>
        )}
        <Image
          boxShadow="xl"
          borderRadius="1.25rem"
          w={{ base: "100%", md: "400px" }}
          h={{ base: "auto", md: "290px" }}
          src={`https://actions-api-sd.sandboxindonesia.id/storage/${gambar}`}
          alt="berita"
        />
      </Box>

      <Stack flex={3} spacing={3} px="1rem" py=".2rem">
        <Text fontSize="1.28rem" color="info.500" fontWeight={400}>
          {kategori}
        </Text>

        <Text color="text.subtitle" fontSize="1.825rem" fontWeight={400}>
          {judul}
        </Text>

        <Text color="text.description" fontSize="1.175rem">
          {isi?.length <= 150 ? isi : `${isi?.slice(0, 150)} ...`}
        </Text>

        <Text
          color="info.500"
          _hover={{ color: "info.600" }}
          fontSize="1.28rem"
        >
          <Link href={`/berita/${slug}`}>Baca Selengkapnya</Link>
        </Text>

        <Stack direction="row" alignItems="center" spacing={3}>
          {avatar ? (
            <Image
              src={`https://actions-api-sd.sandboxindonesia.id/storage/${avatar}`}
              alt="image-user"
              w="50px"
            />
          ) : (
            <Avatar name={penulis} alt="image-user" />
          )}

          <Stack spacing={1}>
            <Text color="text.subtitle" fontSize="0.975rem">
              {penulis}
            </Text>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Icon color="secondary.700" as={CalendarIcon} />
              <Text color="secondary.700" fontSize="0.975rem">
                {waktu_publikasi}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AllBerita;
