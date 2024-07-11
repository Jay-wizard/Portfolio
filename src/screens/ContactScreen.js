import {
  Avatar,
  Flex,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ContactForm from "../components/ContactForm";

const ContactScreen = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      templateRows="auto"
      gap={6}
      w="100%"
      fontSize="xl"
      color="#85a4c4"
    >
      {/* Grid 1 */}
      <Flex
        direction="column"
        gap={7}
        boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
        borderRadius={30}
        p={10}
        _hover={{
          boxShadow:
            "11px 11px 18px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
        }}
      >
        <Avatar
          size="xl"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Stack spacing="5">
          <Heading size="2xl" color="#7889b3">
            Get in touch
          </Heading>
          <Text>
            Customer service is very important, as a result of customer service.
            For the casino hangs on the sad earth. The course of the house, I
            would like to decorate the cartoons, sometimes there was no pain, so
            that the advantage of the backyard was a free life.
          </Text>
        </Stack>

        <Stack spacing="6">
          <Stack
            boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
            borderRadius={30}
            p={8}
            spacing="4"
          >
            <Text fontSize="2xl">Send me an email</Text>
            <Text>jayreddy56@gmail.com</Text>
          </Stack>
          <Stack
            boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
            borderRadius={30}
            p={8}
            spacing="4"
          >
            <Text fontSize="2xl">Give me a call</Text>
            <Text>+919082110300</Text>
          </Stack>
        </Stack>
      </Flex>

      {/* Form */}
      <Flex
        direction="column"
        gap={7}
        boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
        borderRadius={30}
        p={10}
        _hover={{
          boxShadow:
            "11px 11px 18px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
        }}
      >
        <ContactForm />
      </Flex>
    </Grid>
  );
};

export default ContactScreen;
