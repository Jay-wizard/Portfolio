import {
  FormControl,
  Input,
  Flex,
  useToast,
  Textarea,
  Spacer,
  Button,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const form = useRef();
  const toast = useToast();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_f0kja2s", //YOUR_SERVICE_ID
        "template_nii2xx8", //YOUR_TEMPLATE_ID
        form.current,
        "5gCM2sc6EUwqxh6pR" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          navigate("/");
          toast({
            title: "Form Submitted",
            description: "Thank you for reaching out",
            status: "success",
            duration: 2000,
          });
        },
        (error) => {
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <Flex direction="column" py={12}>
      <form ref={form} onSubmit={sendEmail}>
        {/* Name */}
        <FormControl id="name" isRequired>
          <Input
            type="text"
            name="from_name"
            boxShadow="inset 6px 6px 10px rgba(174, 174, 192, .4), inset -6px -6px 10px #fff"
            _focus={{
              boxShadow:
                "inset 6px 6px 10px rgba(174, 174, 192, .4), inset -6px -6px 10px #fff",
            }}
            fontSize="sm"
            borderRadius={16}
            placeholder="Full Name"
            h="60px"
          />
        </FormControl>
        <Spacer h="16" />
        <FormControl id="email" isRequired>
          <Input
            type="email"
            name="from_name"
            boxShadow="inset 6px 6px 10px rgba(174, 174, 192, .4), inset -6px -6px 10px #fff"
            _focus={{
              boxShadow:
                "inset 6px 6px 10px rgba(174, 174, 192, .4), inset -6px -6px 10px #fff",
            }}
            fontSize="sm"
            borderRadius={16}
            placeholder="Email Address"
            h="60px"
          />
        </FormControl>
        <Spacer h="16" />

        <FormControl id="number" isRequired>
          <Input
            type="number"
            name="from_name"
            boxShadow="inset 6px 6px 10px rgba(174, 174, 192, .4), inset -6px -6px 10px #fff"
            _focus={{
              boxShadow:
                "inset 6px 6px 10px rgba(174, 174, 192, .4), inset -6px -6px 10px #fff",
            }}
            fontSize="sm"
            borderRadius={16}
            placeholder="Phone number"
            h="60px"
          />
        </FormControl>
        <Spacer h="16" />

        <FormControl id="message" isRequired>
          <Textarea
            type="text"
            name="from_name"
            boxShadow="inset 6px 6px 10px rgba(174, 174, 192, .4), inset -6px -6px 10px #fff"
            _focus={{
              boxShadow:
                "inset 6px 6px 10px rgba(174, 174, 192, .4), inset -6px -6px 10px #fff",
            }}
            fontSize="sm"
            borderRadius={16}
            placeholder="Message"
            h="120px"
          />
        </FormControl>
        <Spacer h="16" />

        <Button
          isLoading={isLoading}
          loadingText="Sending"
          type="submit"
          boxShadow="6px 6px 10px rgba(174, 174, 192, .4), -6px -6px 10px #fff"
          size="lg"
          fontSize="sm"
          letterSpacing="widest"
          fontWeight="none"
          borderRadius="xl"
          color="#85a4c4"
          transition="box-shadow .15s, transform .15s"
          _hover={{
            boxShadow:
              "10px 10px 16px rgba(174, 174, 192, .4), -10px -10px 16px #fff",
          }}
          _active={{
            boxShadow:
              "inset 10px 10px 16px rgba(174, 174, 192, .4), inset -10px -10px 16px #fff",
          }}
        >
          SEND
        </Button>
      </form>
    </Flex>
  );
};

export default ContactForm;
