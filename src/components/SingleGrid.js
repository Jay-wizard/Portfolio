import { Card, CardBody, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const SingleGrid = ({
  text,
  topheading,
  heading,
  icon,
  url,
  target,
  weight = "semibold",
  size = "lg",
  color = "#7889b3",
}) => {
  return (
    <Link to={url} target={target}>
      <Card
        h="100%"
        bgColor="transparent"
        boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
        borderRadius={30}
        p={5}
        _hover={{
          boxShadow:
            "11px 11px 18px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
        }}
      >
        <CardBody pb={3}>
          <Flex direction="column" gap={7} justifyContent="flex-end" h="100%">
            <Heading size={size} color={color} fontWeight="semibold">
              {topheading}
            </Heading>
            {icon}
            <Heading size={size} color={color} fontWeight={weight}>
              {heading}
            </Heading>
          </Flex>
        </CardBody>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="full"
          color="#85a4c4"
          px="5"
          py="2"
        >
          <Text fontSize="sm" textTransform="uppercase">
            {text}
          </Text>
          <Icon as={BsArrowUpRightCircle} boxSize={8} />
        </Flex>
      </Card>
    </Link>
  );
};

export default SingleGrid;
