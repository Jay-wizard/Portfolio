import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Heading,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FlowerSpinner } from "react-epic-spinners";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Socials from "./Socials";

const MotionDrawerContent = motion(DrawerContent);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleDrawer = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <>
      <Flex px="10" py={8} justifyContent="space-between" alignItems="center">
        <Link to="/">
          <Heading
            backgroundImage="linear-gradient(135deg, #9ec5ff, #e1a6f8)"
            bgClip="text"
            size="xl"
          >
            Portfolio
          </Heading>
        </Link>
        <Button
          zIndex="999999"
          onClick={toggleDrawer}
          boxShadow="-6px -6px 10px #fff, 6px 6px 10px rgba(174, 174, 192, .4)"
          borderRadius="full"
          width="70px"
          height="70px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _hover={{
            boxShadow:
              "-11px -11px 20px #fff, 11px 11px 20px rgba(174, 174, 192, .4)",
          }}
          _active={{
            boxShadow:
              "inset -6px -6px 10px #fff, inset 6px 6px 10px rgba(174, 174, 192, .4)",
          }}
        >
          <FlowerSpinner size={40} color="#7889b3" />
        </Button>
        <AnimatePresence>
          {isOpen && (
            <Drawer onClose={onClose} isOpen={isOpen} size="full">
              <MotionDrawerContent
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                bgColor="#f0f0f3"
              >
                <DrawerBody>
                  <Flex
                    direction="column"
                    mt="10%"
                    alignItems="center"
                    gap={12}
                  >
                    <Stack spacing={10}>
                      <Button
                        bgColor="transparent"
                        boxShadow="-7px -7px 12px #fff, 7px 7px 12px rgba(174, 174, 192, .4)"
                        py="8"
                        size="lg"
                        fontSize="3xl"
                        fontWeight="500"
                        borderRadius="xl"
                        color="#7889b3"
                        _hover={{
                          boxShadow:
                            "-13px -13px 20px #fff, 13px 13px 20px rgba(174, 174, 192, .4)",
                        }}
                        _active={{
                          boxShadow:
                            "inset -6px -6px 10px #fff, inset 6px 6px 10px rgba(174, 174, 192, .4)",
                        }}
                      >
                        <Link to="/">Home</Link>
                      </Button>

                      <Button
                        bgColor="transparent"
                        boxShadow="-7px -7px 12px #fff, 7px 7px 12px rgba(174, 174, 192, .4)"
                        py="8"
                        size="lg"
                        fontSize="3xl"
                        fontWeight="500"
                        borderRadius="xl"
                        color="#7889b3"
                        _hover={{
                          boxShadow:
                            "-13px -13px 20px #fff, 13px 13px 20px rgba(174, 174, 192, .4)",
                        }}
                        _active={{
                          boxShadow:
                            "inset -6px -6px 10px #fff, inset 6px 6px 10px rgba(174, 174, 192, .4)",
                        }}
                      >
                        <Link to="/about">About</Link>
                      </Button>

                      <Button
                        bgColor="transparent"
                        boxShadow="-7px -7px 12px #fff, 7px 7px 12px rgba(174, 174, 192, .4)"
                        py="8"
                        size="lg"
                        fontSize="3xl"
                        fontWeight="500"
                        borderRadius="xl"
                        color="#7889b3"
                        _hover={{
                          boxShadow:
                            "-13px -13px 20px #fff, 13px 13px 20px rgba(174, 174, 192, .4)",
                        }}
                        _active={{
                          boxShadow:
                            "inset -6px -6px 10px #fff, inset 6px 6px 10px rgba(174, 174, 192, .4)",
                        }}
                      >
                        <Link to="/projects">Work</Link>
                      </Button>

                      <Button
                        bgColor="transparent"
                        boxShadow="-7px -7px 12px #fff, 7px 7px 12px rgba(174, 174, 192, .4)"
                        p="8"
                        size="lg"
                        fontSize="3xl"
                        fontWeight="500"
                        borderRadius="xl"
                        color="#7889b3"
                        _hover={{
                          boxShadow:
                            "-13px -13px 20px #fff, 13px 13px 20px rgba(174, 174, 192, .4)",
                        }}
                        _active={{
                          boxShadow:
                            "inset -6px -6px 10px #fff, inset 6px 6px 10px rgba(174, 174, 192, .4)",
                        }}
                      >
                        <Link to="/contact">Contact</Link>
                      </Button>
                    </Stack>

                    {/* socialsa */}
                    <Socials buttonSize="45px" boxSize="5" />
                  </Flex>
                </DrawerBody>
              </MotionDrawerContent>
            </Drawer>
          )}
        </AnimatePresence>
      </Flex>
    </>
  );
};

export default Header;
