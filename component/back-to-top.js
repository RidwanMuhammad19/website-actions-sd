import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { ArrowUp } from "react-feather";

const Backtotop = () => {
  const [open, setOpen] = useState(false);

  const handleTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const listenScrollEvent = () => {
    if (window.scrollY > 190) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <IconButton
      position="fixed"
      right="30"
      aria-label="Up"
      bottom="23"
      opacity={open ? "1" : "0"}
      transition=".3s ease"
      colorScheme="info"
      icon={<ArrowUp />}
      onClick={handleTop}
    />
  );
};

export default Backtotop;