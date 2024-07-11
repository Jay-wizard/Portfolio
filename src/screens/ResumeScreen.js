import {
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  Box,
  UnorderedList,
  Icon,
} from "@chakra-ui/react";
import ContentGrid from "../components/ContentGrid";
import Socials from "../components/Socials";
import { FaUserCircle } from "react-icons/fa";
import { FaGraduationCap, FaDownload } from "react-icons/fa6";
import { SiCodersrank } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
import SingleGrid from "../components/SingleGrid";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { FaSmileBeam } from "react-icons/fa";

const ResumeScreen = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" templateRows="auto" gap={6} w="100%">
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
          icon={FaUserCircle}
          children={
            <Stack spacing={8}>
              <Heading fontWeight="semibold" size="2xl" color="#7889b3">
                Jay Reddy
              </Heading>
              <Text fontSize="xl">
                I am a skilled full-stack developer passionate about crafting
                exceptional websites and applications. With expertise in both
                front-end and back-end technologies, I enjoy tackling challenges
                and delivering impactful solutions.
              </Text>
              <Socials />
            </Stack>
          }
        />
      </GridItem>

      <GridItem colSpan={2}>
        <ContentGrid
          icon={FaGraduationCap}
          children={
            <Stack spacing={8}>
              <Heading fontWeight="semibold" size="2xl" color="#7889b3">
                My Eductaion
              </Heading>
              <UnorderedList fontSize="xl" spacing="5">
                <ListItem>Full Stack Developement - 2023</ListItem>
                <ListItem>B.E Mechanical Enginnering - 2017/2021</ListItem>
                <ListItem>Higher Secondary - 2015/2017</ListItem>
                <ListItem>SSC - 2015</ListItem>
              </UnorderedList>
            </Stack>
          }
        />
      </GridItem>

      <GridItem colSpan={2}>
        <ContentGrid
          icon={SiCodersrank}
          children={
            <Stack spacing={8}>
              <Heading fontWeight="semibold" size="2xl" color="#7889b3">
                Skills
              </Heading>
              <Flex gap={40} px="5" fontSize="xl">
                <UnorderedList spacing="3">
                  <ListItem>JavaScript</ListItem>
                  <ListItem>ReactJS</ListItem>
                  <ListItem>Redux</ListItem>
                  <ListItem>DOM</ListItem>
                  <ListItem>HTML</ListItem>
                  <ListItem>CSS</ListItem>
                </UnorderedList>
                <UnorderedList spacing="3">
                  <ListItem>NodeJS</ListItem>
                  <ListItem>ExpressJS</ListItem>
                  <ListItem>MongoDB</ListItem>
                  <ListItem>Mongoose</ListItem>
                  <ListItem>JWT</ListItem>
                </UnorderedList>
              </Flex>
            </Stack>
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

      <GridItem colSpan={1}>
        <SingleGrid
          url="/about"
          text="explore"
          heading="About me"
          icon={<Icon as={FaSmileBeam} boxSize={12} color="#9ec5ff" />}
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

      <GridItem colSpan={1}>
        <SingleGrid
          url="/assets/RESUME-JAYREDDY.pdf"
          target="_blank"
          heading="Download Resume"
          icon={<Icon as={FaDownload} boxSize={12} color="#9ec5ff" />}
        />
      </GridItem>
    </Grid>
  );
};

export default ResumeScreen;
