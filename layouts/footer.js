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
  console.log(data, "here is data");

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
      id: 5,
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
          fontSize="1.1rem"
          py={{ xs: 10, md: 20 }}
        >
          <Box flex={1}>
            <Box pb={{ xs: 10, md: 16 }}>
              <TextHeaderFooter text="Alamat" />
              <Text color="white" lineHeight="2.188rem">
                {data?.alamat}
              </Text>
            </Box>
            <Box pb={{ xs: 10, md: 16 }}>
              <TextHeaderFooter text="Email" />
              <Text color="white" lineHeight="2.188rem">
                {data?.email}
              </Text>
            </Box>
            <Box pb={{ xs: 10, md: 16 }}>
              <TextHeaderFooter text="Telphone" />
              <Text color="white" lineHeight="2.188rem">
                {data?.telepon}
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
            <Link href={item.link}>
              <Icon key={item.id} as={item.icon} w="24px" />
            </Link>
          ))}
        </Stack>
        <Divider />
        <Box display="flex" justifyContent="center" py={5}>
          <Text color="white" fontSize="1rem">
            &copy; {` ${data?.nama_sekolah}`}
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
