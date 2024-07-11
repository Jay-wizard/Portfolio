import { Flex, Text } from "@chakra-ui/react";

import MenuItem from "./MenuItem";
import Socials from "./Socials";

const Footer = () => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        p="12"
        gap="8"
      >
        <Flex>
          <MenuItem label="HOME" url="/" />
          <MenuItem label="ABOUT" url="/about" />
          <MenuItem label="WORK" url="/projects" />
          <MenuItem label="CONTACT" url="/contact" />
        </Flex>
        <Socials />
        <Text color="#85a4c4" fontSize="sm">
          Copyright © {new Date().getFullYear()} Jay Reddy.
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
