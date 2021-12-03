import { Modal, ModalContent, ModalOverlay, Spinner } from "@chakra-ui/react";

const LoadingGlobal = () => {
  return (
    <Modal isOpen isCentered motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent bg="white" width={{ xs: "30%", md: "10%" }} padding="1rem">
        <Spinner
          display="block"
          mx="auto"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </ModalContent>
    </Modal>
  );
};

export default LoadingGlobal;