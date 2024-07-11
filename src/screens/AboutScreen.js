import {
  Box,
  Card,
  Icon,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import ContentGrid from "../components/ContentGrid";
import { FaHandPeace } from "react-icons/fa6";
import Socials from "../components/Socials";
import { FaFaceSmileWink } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaLaptopCode, FaUser } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import SingleGrid from "../components/SingleGrid";

const AboutScreen = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" templateRows="auto" gap={6} w="100%">
      <GridItem colSpan={3}>
        <ContentGrid
          icon={FaHandPeace}
          children={
            <Stack spacing={8}>
              <Heading size="2xl" color="#7889b3" lineHeight="1.2em">
                Hello,
                <br /> I am Jay Reddy, a Full Stack Developer.
              </Heading>
              <Socials />
            </Stack>
          }
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Card
          bgColor="transparent"
          boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
          borderRadius={30}
          _hover={{
            boxShadow:
              "11px 11px 18px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
          }}
        >
          <Image
            borderRadius={30}
            p={3}
            objectFit="cover"
            src="https://assets.website-files.com/642c1cd7bcb742b83f7049e8/6432b7261ddcb08a78e3b7ff_img-hero-01.jpg"
          />
        </Card>
      </GridItem>
      <GridItem colSpan={2}>
        <ContentGrid
          icon={FaFaceSmileWink}
          children={
            <Flex direction="column" gap="6">
              <Heading color="#7889b3" fontWeight="semibold">
                About me
              </Heading>
              <Text fontSize="xl">
                Ambitious and self-esteemed web developer with a passion of
                developing interactive web applications and working across the
                full stack. Looking forward to work in a competitive environment
                to continue to grow my skill set while contributing to the
                positive outcome.
              </Text>
            </Flex>
          }
        />
      </GridItem>
      <GridItem colSpan={3}>
        <ContentGrid
          icon={BsPersonWorkspace}
          children={
            <Flex direction="column" gap="6">
              <Heading color="#7889b3" fontWeight="semibold">
                Experience
              </Heading>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                fontSize="xl"
              >
                <Text fontSize="xl">MasterTech Web Applications</Text>
                <Box
                  bgColor="#85a4c4"
                  height="1px"
                  width="40%"
                  opacity="0.5"
                ></Box>
                <span style={{ color: "#85a4c4", fontWeight: "bold" }}>
                  2023 - 2024
                </span>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                fontSize="xl"
              >
                <Text fontSize="xl">Freelance Full Stack Dev</Text>
                <Box
                  bgColor="#85a4c4"
                  height="1px"
                  width="40%"
                  opacity="0.5"
                ></Box>
                <span style={{ color: "#85a4c4", fontWeight: "bold" }}>
                  2023 - Present
                </span>
              </Flex>
            </Flex>
          }
        />
      </GridItem>

      <GridItem colSpan={1}>
        <SingleGrid
          url="/projects"
          text="explore"
          heading="See my works"
          icon={<Icon as={FaLaptopCode} boxSize={12} color="#9ec5ff" />}
        />
      </GridItem>

      <GridItem colSpan={3}>
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

      <GridItem colSpan={1}>
        <SingleGrid
          url="/resume"
          text="See more"
          heading="See my resume"
          icon={<Icon as={FaUser} boxSize={12} color="#9ec5ff" />}
        />
      </GridItem>
    </Grid>
  );
};

export default AboutScreen;
