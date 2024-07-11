import { Card, CardBody, Icon, Flex } from "@chakra-ui/react";

const ContentGrid = ({ children, icon }) => {
  return (
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
      <CardBody>
        <Flex
          direction="column"
          gap={3}
          justifyContent="flex-start"
          h="100%"
          color="#85a4c4"
        >
          <Icon as={icon} boxSize={10} color="#9ec5ff" />
          {children}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ContentGrid;
