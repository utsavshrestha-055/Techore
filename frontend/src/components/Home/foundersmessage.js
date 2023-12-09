import React from "react";
import {
  Box,
  Image,
  Text,
  Container,
  Heading,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import founderImg from "./founder.jpg";
import "./styles.css";
import ModernBlockquote from "./BlockQuote";

const FounderMessage = () => {
  return (
    <Container
      className="founder-message"
      style={{ backgroundColor: "rgba(252, 62, 84, 0.6)" }}
      minW="100%"
      minH={"600px"}
    >
      <Container maxW={"8xl"}>
        <Flex
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 2fr)",
            sm: "repeat(1, 2fr)",
            md: "repeat(1, 2fr)",
            lg: "repeat(1, 1.5fr)",
            xl: "1fr 1.5fr",
          }}
          marginLeft={{ base: "0%", xl: "5%" }}
          mb={{ base: "5px", lg: "20px" }}
          mt={{ base: "5px", lg: "50px" }}
        >
          <Box mt={{ base: 5, md: 0, lg: 0, xl: 0 }}>
            <Image src={founderImg} alt="Founder" width="400px" />
          </Box>
          <Box mt={{ base: 5, md: 0, lg: 0, xl: 0 }}>
            <Box>
              <Heading color="white">Message from the Founder</Heading>
              <Text
                color={useColorModeValue("black", "white")}
                fontSize={20}
                mt={5}
                align={"justify"}
              >
                I am proud to lead this dynamic and innovative company on the
                forefront of technology. At Techore Solutions our mission is to
                provide cutting-edge solutions that simplify and enhance the way
                people work and live. I am confident in our talented team of
                developers and designers, who are constantly pushing the
                boundaries of what is possible in our industry. With their
                creativity and expertise, we are able to deliver products that
                not only meet, but exceed the expectations of our customers.
              </Text>
              <Text
                color={useColorModeValue("black", "white")}
                fontSize={20}
                mt={5}
                align={"justify"}
              >
                At Techore Solutions we believe that technology has the power to
                transform lives, and we are dedicated to making this a reality.
                Whether it's through streamlining processes, improving
                communication, or enabling new forms of creativity, our goal is
                to provide solutions that bring real value to people's lives.
              </Text>
            </Box>
            <Box mt={10}>
              <ModernBlockquote
                quote="Software is not just about solving problems, but about creating new possibilities."
                author="Tim O'Reilly"
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default FounderMessage;
