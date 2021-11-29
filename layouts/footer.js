import { Container, Box, Stack, Text, Icon, Divider } from "@chakra-ui/react";
import InstagramIcon from "../icons/instagram";
import FacebookIcon from "../icons/facebook";
import YoutubeIcon from "../icons/youtube";

const TextHeaderFooter = ({ text }) => {
  return (
    <Text
      fontSize={{ xs: "1.3rem", md: "1.625rem" }}
      fontWeight="600"
      color="white"
    >
      {text}
    </Text>
  );
};

const Footer = () => {
  const IconSosmed = [
    {
      id: 1,
      icon: InstagramIcon,
    },

    {
      id: 2,
      icon: FacebookIcon,
    },

    {
      id: 3,
      icon: YoutubeIcon,
    },
  ];

  const listProfil = [
    {
      id: 1,
      list: "Visi Misi",
    },
    {
      id: 2,
      list: "Sejarah",
    },
    {
      id: 3,
      list: "Ekstra & Intra Kurikuler",
    },
  ];

  const listMenu = [
    {
      id: 1,
      list: "Beranda",
    },
    {
      id: 2,
      list: "Profil",
    },
    {
      id: 3,
      list: "Program",
    },
    {
      id: 4,
      list: "Artikel",
    },
    {
      list: "Kontak Kami",
    },
  ];
  return (
    <Box bg="#292C37">
      <Container maxW="7xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 20 }}
          px={{ xs: 5, md: 0 }}
          fontSize="1.125rem"
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
              <TextHeaderFooter text="Telphone" />
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
              {IconSosmed.map((item) => (
                <Icon key={item.id} as={item.icon} w="24px" />
              ))}
            </Stack>
          </Box>
          <Stack direction="row" flex={1}>
            <Box flex={1}>
              <TextHeaderFooter text="Profil Sekolah" />
              {listProfil.map((item) => (
                <Text key={item.id} color="white" lineHeight="3.125rem">
                  {item.list}
                </Text>
              ))}
            </Box>
            <Box flex={0.5}>
              <TextHeaderFooter text="Menu" />
              {listMenu.map((item) => (
                <Text key={item.id} color="white" lineHeight="3.125rem">
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
            <Icon key={item.id} as={item.icon} w="24px" />
          ))}
        </Stack>
        <Divider />
        <Box display="flex" justifyContent="center" py={5}>
          <Text color="white" fontSize="1rem">
            &copy; 2021 SD Muhammadiyah Klaten Utara
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
