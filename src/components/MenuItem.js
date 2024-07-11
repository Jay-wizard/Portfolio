import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const MenuItem = ({ url, label }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize={{ base: "xs", md: "sm", lg: "md" }}
      letterSpacing="wide"
      mr={{ base: "0", md: "0", lg: "5" }}
      display="flex"
      alignItems="center"
      color="#85a4c4"
      _hover={{ textDecor: "none", color: "#9ec5ff" }}
      onClick={() => {
        window.scrollTo({ top: "0", behavior: "auto" });
      }}
    >
      {label}
    </Link>
  );
};

export default MenuItem;
