import { Stack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const CardPrestasi = ({ image, title, href }) => {
  return (
    <Stack alignItems="center" spacing={10}>
      <Link href={`prestasi/${href}`} >
        <Image
          _hover={{
            boxShadow: "xl",
            w: "310px",
            h: "310px",
            transition: "0.2s",
            cursor:"pointer"
          }}
          borderRadius="1.875rem"
          w="300px"
          h="300px"
          objectFit="cover"
          src={image}
          alt={title}
        />
      </Link>

      <Text
        textAlign="center"
        fontSize="1.25rem"
        fontWeight={400}
        color="primary.600"
      >
        {title}
      </Text>
    </Stack>
  );
};

export default CardPrestasi;
