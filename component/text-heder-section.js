import React from "react";
import { Text, Box, Stack } from "@chakra-ui/react";

const TextHeader = ({ text, textLine, ...rest }) => {
  return (
    <Stack flexDir="column" alignItems="center">
      <Text fontSize="3.438rem" fontWeight="500" color="primary.600">
        {text}
      </Text>
      {textLine && (
        <Box
          {...rest}
          height="5px"
          borderRadius="15px"
          color="#FF7F59"
          bg="#FF7F59"
        />
      )}
    </Stack>
  );
};

export default TextHeader;
