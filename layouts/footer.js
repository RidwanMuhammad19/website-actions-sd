import {
  Container,
  Box,
  Stack,
  Text,
  Icon,
  Divider,
  Link,
} from "@chakra-ui/react";
import InstagramIcon from "../icons/instagram";
import FacebookIcon from "../icons/facebook";
import YoutubeIcon from "../icons/youtube";
import { useRouter } from "next/router";

const TextHeaderFooter = ({ text }) => {
  return (
    <Text
      fontSize={{ xs: "1.2rem", md: "1.3rem" }}
      fontWeight="600"
      color="white"
    >
      {text}
    </Text>
  );
};

const Footer = ({ data }) => {
  const router = useRouter();
  const IconSosmed = [
    {
      id: 1,
      icon: InstagramIcon,
      link: data?.instagram_url,
    },

    {
      id: 2,
      icon: FacebookIcon,
      link: data?.facebook_url,
    },

    {
      id: 3,
      icon: YoutubeIcon,
      link: data?.youtube_url,
    },
  ];

  const listProfil = [
    {
      id: 1,
      list: "Visi Misi",
      href: "/visi-misi",
    },
    {
      id: 2,
      list: "Tentang Kami",
      href: "/tentang-kami",
    },
    // {
    //   id: 2,
    //   list: "Sejarah",
    //   href: "/sejarah",
    // },
  ];

  const listProgram = [
    {
      id: 1,
      list: "Ekstra & Intra Kurikuler",
      href: "/ekstra-dan-intrakurikuler",
    },
    {
      id: 2,
      list: "Program Sekolah",
      href: "/program-sekolah",
    },
  ];

  const listMenu = [
    {
      id: 1,
      list: "Berita",
      href: "/#berita",
    },
    {
      id: 2,
      list: "Kurikulum",
      href: "/#kurikulum",
    },
    {
      id: 3,
      list: "Informasi",
      href: "/#informasi",
    },
    {
      id: 4,
      list: "E-Learning",
      href: "/#elearning",
    },
    {
      id: 5,
      list: "Produk",
      href: "/#produk",
    },
    {
      id: 6,
      list: "Prestasi",
      href: "/#prestasi",
    },
  ];
  return (
    <Box bg="#292C37" id="kontak">
      <Container maxW="7xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 20 }}
          px={{ xs: 5, md: 0 }}
          fontSize="1.1rem"
          py={{ xs: 10, md: 20 }}
        >
          <Box flex={1}>
            <Box pb={{ xs: 10, md: 16 }}>
              <TextHeaderFooter text="Alamat" />
              <Text color="white" lineHeight="2.188rem">
                Alamat JL. Kopral Sudibyo, RT. 1 RW. XI, Perak
                Gunungan,Barenglor, Gunungan, Bareng Lor, Kec. Klaten Utara,
                Kabupaten Klaten, Jawa Tengah 57438
              </Text>
            </Box>
            <Box pb={{ xs: 10, md: 16 }}>
              <TextHeaderFooter text="Email" />
              <Text color="white" lineHeight="2.188rem">
                sdmuhammadiyahklatenutara@gmail.com
              </Text>
            </Box>
            <Box pb={{ xs: 10, md: 16 }}>
              <TextHeaderFooter text="Telephone" />
              <Text color="white" lineHeight="2.188rem">
                (0272) 326984
              </Text>
            </Box>
            <Stack
              display={{ xs: "none", md: "flex" }}
              direction="row"
              spacing={7}
              alignItems="center"
            >
              {IconSosmed?.map((item) => (
                <Link
                  href={item.link}
                  target="_blank"
                  _focus={{ boxShadow: "none" }}
                >
                  <Icon key={item.id} as={item.icon} w="24px" />
                </Link>
              ))}
            </Stack>
          </Box>
          <Stack direction="row" flex={1}>
            <Box flex={1}>
              <TextHeaderFooter text="Profil Sekolah" />
              {listProfil?.map((item) => (
                <Text
                  key={item.id}
                  color="white"
                  lineHeight="3.125rem"
                  onClick={() => router.push(`${item.href}`)}
                  cursor={"pointer"}
                  _hover={{ color: "info.500" }}
                >
                  {item.list}
                </Text>
              ))}

              <Box mt={16}>
                <TextHeaderFooter text="Program" />
                {listProgram?.map((item) => (
                  <Text
                    key={item.id}
                    color="white"
                    lineHeight="3.125rem"
                    onClick={() => router.push(`${item.href}`)}
                    cursor={"pointer"}
                    _hover={{ color: "info.500" }}
                  >
                    {item.list}
                  </Text>
                ))}
              </Box>
            </Box>
            <Box flex={0.5}>
              <TextHeaderFooter text="Menu" />
              {listMenu.map((item) => (
                <Text
                  key={item.id}
                  color="white"
                  lineHeight="3.125rem"
                  onClick={() => router.push(`${item.href}`)}
                  cursor={"pointer"}
                  _hover={{ color: "info.500" }}
                >
                  {item.list}
                </Text>
              ))}
            </Box>
          </Stack>
        </Stack>
        <Stack
          display={{ xs: "flex", md: "none" }}
          direction="row"
          spacing={5}
          pb={6}
          justify="center"
          alignItems="center"
        >
          {IconSosmed.map((item) => (
            <Link href={item.link}>
              <Icon key={item.id} as={item.icon} w="24px" />
            </Link>
          ))}
        </Stack>
        <Divider />
        <Box display="flex" justifyContent="center" py={5}>
          <Text color="white" fontSize="1rem">
            &copy; SD Muhammadiyah Klaten Utara
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
