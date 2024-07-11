import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import SingleGrid from "../components/SingleGrid";
import { FaLaptopCode, FaPalette, FaUser } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { GiMeltingIceCube } from "react-icons/gi";

const Homescreen = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" templateRows="auto" gap={6} w="100%">
      <GridItem colSpan={1}>
        <SingleGrid
          url="/projects"
          text="explore"
          heading="See my works"
          icon={<Icon as={FaLaptopCode} boxSize={12} color="#9ec5ff" />}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <SingleGrid
          url="/resume"
          text="See more"
          heading="See my resume"
          icon={<Icon as={FaUser} boxSize={12} color="#9ec5ff" />}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <SingleGrid
          url="/about"
          text="Full stack developer"
          heading="Hi, I'm Jay Reddy"
          size="2xl"
          icon={
            <Avatar
              size="xl"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          }
        />
      </GridItem>
      <GridItem colSpan={2}>
        <SingleGrid
          topheading="What I do"
          icon={
            <Flex gap="7em">
              <VStack spacing={5}>
                <Icon as={FaCode} boxSize={14} color="#9ec5ff" />
                <Text fontSize="sm" color="#85a4c4">
                  DEVELOPEMENT
                </Text>
              </VStack>
              <VStack spacing={5}>
                <Icon as={FaPalette} boxSize={14} color="#9ec5ff" />
                <Text fontSize="sm" color="#85a4c4">
                  DESIGN
                </Text>
              </VStack>
              <VStack spacing={5}>
                <Icon as={GiMeltingIceCube} boxSize={14} color="#9ec5ff" />
                <Text fontSize="sm" color="#85a4c4">
                  GRAPHICS
                </Text>
              </VStack>
            </Flex>
          }
        />
      </GridItem>
      <GridItem colSpan={2}>
        <SingleGrid
          url="/contact"
          text="Lets work together"
          heading="Get in touch now"
          weight="bold"
          size="xl"
          color="#9ec5ff"
          icon={<Icon as={IoIosRocket} boxSize={12} color="#9ec5ff" />}
        />
      </GridItem>
    </Grid>
  );
};

export default Homescreen;
