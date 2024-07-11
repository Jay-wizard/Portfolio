import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { Flex, Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Socials = ({ boxSize = "6", buttonSize = "50px" }) => {
  const socials = [
    {
      icon: FaGithub,
      url: "#",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/jayreddy-sayshi",
    },
    {
      icon: SiGmail,
      url: "mailto:jayreddy56@gmail.com",
    },
    {
      icon: IoCall,
      url: "tel:+91 9082110300",
    },
  ];
  return (
    <Flex gap={5}>
      {socials.map((item, index) => (
        <Link to={item.url} key={index} target="_blank">
          <Button
            boxShadow="-6px -6px 10px #fff, 6px 6px 10px rgba(174, 174, 192, .4)"
            borderRadius="full"
            width={buttonSize}
            height={buttonSize}
            _hover={{
              boxShadow:
                "-11px -11px 20px #fff, 11px 11px 20px rgba(174, 174, 192, .4)",
            }}
            _active={{
              boxShadow:
                "inset -6px -6px 10px #fff, inset 6px 6px 10px rgba(174, 174, 192, .4)",
            }}
          >
            <Icon as={item.icon} boxSize={boxSize} color="#7889b3" />
          </Button>
        </Link>
      ))}
    </Flex>
  );
};

export default Socials;
