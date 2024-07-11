import {
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { projects } from "../data/projects";
import { Link, useParams, useNavigate } from "react-router-dom";

const ProjectScreen = () => {
  const { url } = useParams();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex((project) => project.url === url);
  const project = projects[projectIndex];

  const handleNextProject = () => {
    let nextProjectIndex = projectIndex + 1;
    if (nextProjectIndex >= projects.length) {
      nextProjectIndex = 0;
    }
    const nextProjectUrl = projects[nextProjectIndex].url;
    navigate(`/projects/${nextProjectUrl}`);
  };

  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="auto"
        gap={6}
        w="100%"
      >
        {/* 1st Row */}
        <GridItem colSpan={3}>
          <Card
            bgColor="transparent"
            boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
            borderRadius={30}
            p={3}
            _hover={{
              boxShadow:
                "11px 11px 18px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
            }}
          >
            <Image
              h="600px"
              src={project.mainImage}
              alt={project.name}
              borderRadius="20"
              objectFit="fill"
            />
          </Card>
        </GridItem>

        {/* 2nd Row */}
        <GridItem colSpan={1}>
          <Card
            h="100%"
            maxH="400px"
            bgColor="transparent"
            boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
            borderRadius={30}
            p={3}
            _hover={{
              boxShadow:
                "11px 11px 18px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
            }}
          >
            <Image
              h="100%"
              maxH="400px"
              src={project.image1}
              alt={project.name}
              borderRadius="20"
              objectFit="fill"
            />
          </Card>
        </GridItem>

        <GridItem colSpan={2}>
          <Card
            h="100%"
            bgColor="transparent"
            boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
            borderRadius={30}
            p={3}
            _hover={{
              boxShadow:
                "11px 11px 18px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
            }}
          >
            <CardBody>
              <Stack spacing={5}>
                <Heading color="#7889b3">About</Heading>
                <Text color="#85a4c4">
                  Velit euismod in pellentesque massa placerat volutpat lacus
                  laoreet non curabitur gravida odio aenean sed adipiscing diam
                  donec adipiscing tristique risus. amet est placerat in egestas
                  erat imperdiet sed euismod nisi. Eget lorem dolor sed viverra
                  ipsum nunc aliquet bibendum felis donec et odio pellentesque
                  diam volutpat commodo. ‍ Eget lorem dolor sed viverra ipsum
                  nunc aliquet bibendum felis donec Nisi quis eleifend quam
                  adipiscing vitae aliquet bibendum enim facilisis At risus
                  viverra adipiscing at in tellus integer feugiat nisl pretium
                  fusce Velit euismod in pellentesque massa placerat volutpat
                  lacus semper
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>

        {/* 3rd Row */}
        <GridItem colSpan={2}>
          <Card
            h="100%"
            bgColor="transparent"
            boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
            borderRadius={30}
            p={3}
            _hover={{
              boxShadow:
                "11px 11px 18px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
            }}
          >
            <CardBody>
              <Stack spacing={5}>
                <Heading color="#7889b3">About</Heading>
                <Text color="#85a4c4">
                  Velit euismod in pellentesque massa placerat volutpat lacus
                  laoreet non curabitur gravida odio aenean sed adipiscing diam
                  donec adipiscing tristique risus. amet est placerat in egestas
                  erat imperdiet sed euismod nisi. Eget lorem dolor sed viverra
                  ipsum nunc aliquet bibendum felis donec et odio pellentesque
                  diam volutpat commodo. Eget lorem dolor sed viverra ipsum nunc
                  aliquet bibendum felis donec Nisi quis eleifend quam
                  adipiscing vitae aliquet bibendum enim facilisis At risus
                  viverra adipiscing at in tellus integer feugiat nisl pretium
                  fusce Velit euismod in pellentesque massa placerat volutpat
                  lacus semper
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem colSpan={1}>
          <Card
            h="100%"
            maxH="400px"
            bgColor="transparent"
            boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
            borderRadius={30}
            p={3}
            _hover={{
              boxShadow:
                "11px 11px 18px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
            }}
          >
            <Image
              src={project.image2}
              alt={project.name}
              borderRadius="20"
              h="100%"
              objectFit="fill"
            />
          </Card>
        </GridItem>
      </Grid>

      {/* Button */}
      <Flex justifyContent="center" w="100%" my="10">
        <Flex gap={5}>
          <Link to={project.website}>
            <Button
              bgColor="transparent"
              boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
              size="lg"
              fontSize="sm"
              letterSpacing="widest"
              fontWeight="none"
              borderRadius="xl"
              color="#85a4c4"
              _hover={{
                boxShadow:
                  "10px 10px 16px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
              }}
              _active={{
                boxShadow:
                  "inset 10px 10px 16px rgba(174, 174, 192, .4), inset -10px -10px 16px #fff",
              }}
            >
              VIEW LIVE WEBSITE
            </Button>
          </Link>
          <Button
            bgColor="transparent"
            boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
            size="lg"
            fontSize="sm"
            letterSpacing="widest"
            fontWeight="none"
            borderRadius="xl"
            color="#85a4c4"
            _hover={{
              boxShadow:
                "10px 10px 16px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
            }}
            _active={{
              boxShadow:
                "inset 10px 10px 16px rgba(174, 174, 192, .4), inset -10px -10px 16px #fff",
            }}
            onClick={handleNextProject}
          >
            NEXT PROJECT
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ProjectScreen;
