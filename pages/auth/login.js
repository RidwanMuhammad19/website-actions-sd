import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Image,
  InputGroup,
  FormErrorMessage,
  InputRightElement,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Login() {
  const toast = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [passwordShow, setPasswordShow] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShow(passwordShow ? false : true);
  };

  const onSubmitData = (values) => {
    toast({
      description: `Selamat Datang ${values?.username}`,
      status: "success",
      duration: 9000,
      position: "top",
      isClosable: true,
    });
    router.push("/");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack maxW={"2xl"}>
        <Stack
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          direction="row"
        >
          <Box flex={1}>
            <Image
              borderTopLeftRadius="lg"
              borderBottomLeftRadius="lg"
              src="/assets/image/5.JPG"
              alt="imagelogin"
              h="100%"
              w="100%"
              objectFit="cover"
            />
          </Box>
          <Box flex={1} p={8} display="flex" flexDir="column">
            <Stack pb={4}>
              <Heading fontSize={"2xl"}>Masuk Sebagai Siswa</Heading>
            </Stack>
            <Stack>
              <form onSubmit={handleSubmit(onSubmitData)}>
                <FormControl id="username" isInvalid={errors?.username}>
                  <FormLabel color="#6E6E6E">Email address</FormLabel>
                  <Input
                    {...register("username", { required: true })}
                    type="email"
                    placeholder="e.g. mail@address.com"
                  />
                  {errors.username && (
                    <FormErrorMessage>Enter a valid email.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl id="password" isInvalid={errors?.password}>
                  <FormLabel color="#6E6E6E">Password</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="********"
                      {...register("password", { required: true })}
                      type={passwordShow ? "text" : "password"}
                    />
                    <InputRightElement onClick={togglePasswordVisiblity}>
                      {passwordShow ? <FaEye /> : <FaEyeSlash />}
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && (
                    <FormErrorMessage>
                      Please enter your password.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                    fontSize="14px"
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    type="submit"
                    variant="solid"
                    bg="#1176BC"
                    color="white"
                    _hover={{ bg: "#166FAC" }}
                    disabled={!isValid}
                  >
                    Log In
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Flex>
  );
}
