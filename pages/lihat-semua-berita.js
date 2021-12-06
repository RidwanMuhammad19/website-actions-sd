import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Row, Col } from "react-grid-system";
import TextHeader from "../component/text-heder-section";
import Layouts from "../layouts";
import CustomButton from "../component/custom-button";
import CardBerita from "../view/berita/card-berita";

export async function getServerSideProps() {
  const requestList = await fetch(
    `https://actions-api-sd.sandboxindonesia.id/api/berita`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const listData = await requestList.json();

  return {
    props: { listData },
  };
}

const LihatSemuaBerita = ({ listData }) => {
  const data = listData?.data;

  return (
    <Layouts>
      <Container py="100px" maxW="6xl" h="100%">
        <TextHeader textLine text="BERITA" width="78px" />
        <Box as={Row} py={20}>
          {data?.map((el, idx) => (
            <Box as={Col} sm={12} lg={6}>
              <CardBerita {...el} idx={idx} />
            </Box>
          ))}
        </Box>
        <Box>
          <CustomButton
            text="BACK"
            href="/"
            bg="success.500"
            color="white"
            hoverBg="success.600"
          />
        </Box>
      </Container>
    </Layouts>
  );
};

export default LihatSemuaBerita;
