import { useState, useEffect } from "react";
import { Box, Container } from "@chakra-ui/react";
import TextHeader from "../component/text-heder-section";
import Layouts from "../layouts";
import CustomButton from "../component/custom-button";
import CardAllBerita from "../component/card-all-berita";

export async function getServerSideProps() {
  const requestList = await fetch(
    `${process.env.REACT_APP_API_URL}/api/berita`,
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
      <Container py="100px" maxW="7xl" h="100%">
        <TextHeader textLine text="BERITA" width="78px" />
        <Box py={20} w="100%">
          {data?.map((el, idx) => (
            <Box key={el.id}>
              <CardAllBerita {...el} idx={idx} />
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
