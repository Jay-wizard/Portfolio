import {
  Button,
  Flex,
  Heading,
  Card,
  Image,
  CardBody,
  Text,
  Icon,
} from "@chakra-ui/react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectGrid = ({ project }) => {
  return (
    <Link to={`/projects/${project.url}`}>
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
        <Image
          src={project.mainImage}
          alt={project.name}
          borderRadius="20"
          h="350px"
          objectFit="fill"
        />
        <CardBody py={5}>
          <Flex justifyContent="space-between" alignItems="center" width="full">
            <Heading color="#7889b3" size="lg" fontWeight="semibold">
              {project.name}
            </Heading>
            <Button
              color="#85a4c4"
              boxShadow="inset -6px -6px 10px #fff, inset 6px 6px 10px rgba(174, 174, 192, .4)"
              fontWeight="none"
              borderRadius="full"
              _hover={{
                boxShadow:
                  "inset -6px -6px 10px #fff, inset 6px 6px 10px rgba(174, 174, 192, .4)",
              }}
            >
              {project.type}
            </Button>
          </Flex>
        </CardBody>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="full"
          color="#85a4c4"
          px="5"
          py="3"
        >
          <Text fontSize="sm" textTransform="uppercase">
            view project
          </Text>
          <Icon as={BsArrowUpRightCircle} boxSize={8} />
        </Flex>
      </Card>
    </Link>
  );
};

export default ProjectGrid;
