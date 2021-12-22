import { Stack, Box, Avatar, Divider, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const CardELearning = ({ yt, kelas, materi, jml, pemateri }) => {
  return (
    <Stack alignItems="center" borderRadius={"md"} borderWidth={"1px"} spacing={0}>
      <Box p={5}>
        <ReactPlayer width="100%" height="170px" url={yt} />
        <Text
          bg={"primary.400"}
          borderRadius={"md"}
          px={2}
          my={3}
          textAlign={"center"}
          color="white"
        >
          {`Kelas ${kelas} SD`}
        </Text>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDir={"row"}
          py={2}
        >
          <Text fontWeight={600} fontSize={"18px"}>
            {materi}
          </Text>
          <Text>{`${jml} materi`}</Text>
        </Box>
      </Box>
      <Divider />
      <Box w="100%" pl={5} py={3} display={"flex"} flexDir={"row"} alignItems={"center"}>
        <Avatar name={pemateri} w="10" h="10" />
        <Text pl={3} fontSize={"14px"}>
          {pemateri}
        </Text>
      </Box>
    </Stack>
  );
};

export default CardELearning;
