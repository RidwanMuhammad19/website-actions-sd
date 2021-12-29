import React from "react";
import { Box, Stack, Heading, Container } from "@chakra-ui/react";
import { Row, Col } from "react-grid-system";
import Layouts from "../layouts";
import CardELearning from "../component/card-elearning";

const ELearningMateri = () => {
  const datas = [
    {
      id: 1,
      materi: "Matematika",
      yt: "https://youtu.be/74145rwwdL8",
      kelas: "5",
      jml: 1,
      pemateri: "Ustadzah Heni Setiyawati, S.Pd",
    },
    {
      id: 2,
      yt: "https://youtu.be/3RyxJASrf-w",
      materi: "Bahasa Arab",
      kelas: "5",
      jml: 1,
      pemateri: "Ustadz Ahmad Zaini, S. S",
    },
    {
      id: 3,
      materi: "Lagu Siji Loro Telu",
      yt: "https://youtu.be/Urlm6kGGiFw",
      kelas: "5",
      jml: 1,
      pemateri: "Ustazah Galuh",
    },
    {
      id: 4,
      materi: "Bahasa Jawa",
      yt: "https://youtu.be/RQ1i7vQV-xc",
      kelas: "5",
      jml: 1,
      pemateri: "Ustazah Galuh",
    },
    {
      id: 5,
      yt: "https://youtu.be/2AqWmr9gCk0",
      materi: "Bahasa Inggris",
      kelas: "5",
      jml: 1,
      pemateri: "Ustazah Icha",
    },
    {
      id: 6,
      materi: "TIK",
      yt: "https://youtu.be/gjw_p1zFoeY",
      kelas: "5",
      jml: 1,
      pemateri: "Ustadz Angga",
    },
  ];

  return (
    <Layouts>
      <Container maxW={"6xl"}>
        <Stack py={20}>
          <Heading py={10}>BERAGAM MATERI ONLINE</Heading>
          <Stack as={Row} color="secondary.500" spacing={0}>
            {datas.map((item) => (
              <Box mb={14} key={item.id} sm={12} md={6} lg={4} as={Col}>
                <CardELearning
                  yt={item.yt}
                  pemateri={item.pemateri}
                  jml={item.jml}
                  materi={item.materi}
                  kelas={item.kelas}
                />
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Layouts>
  );
};

export default ELearningMateri;
