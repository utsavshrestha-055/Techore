import React from "react";
import {
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Center,
  SimpleGrid,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import Banner from "../Home/image/banner.jpg";
import Banner2 from "./images/banner2.jpg";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Techore Solutions</title>
      </Helmet>
      <Container id="about" maxW={"8xl"} isLazy>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} ba>
          <Stack
            spacing={4}
            mr={{ base: 0, lg: 12, xl: 12 }}
            ml={{ base: 0, md: "3rem" }}
            order={{ base: 1, md: 0 }}
          >
            <Center>
              <Heading
                fontWeight={"italic"}
                className="section_title"
                color={useColorModeValue("#042483", "white")}
                mt={{ base: "2rem" }}
              >
                Who we are
              </Heading>
            </Center>
            <Text
              color={useColorModeValue("#242424", "white")}
              fontSize={"lg"}
              align={"justify"}
            >
              Techore Solutions was established with a mission to empower
              businesses and individuals with cutting-edge technology solutions
              that streamline processes, increase productivity, and drive
              growth. Our founders have experience working with startups and big
              companies all over Europe and USA. We are dedicated to delivering
              innovative and efficient solutions that meet the unique needs of
              each of our clients. Our team of experts, with their combined
              experience in computer science and IT, brings a wealth of
              knowledge and expertise to the table.
            </Text>
            <Text
              color={useColorModeValue("#242424", "white")}
              fontSize={"lg"}
              align={"justify"}
            >
              We are committed to staying on top of industry trends and
              advancements, and to continuously improving our offerings to
              ensure that our clients always have access to the latest and
              greatest technology. Our passion for innovation is what sets us
              apart, and it drives us to constantly push the boundaries of
              what's possible. If you're looking for a technology partner that
              is dedicated to your success, look no further. We're here to help
              you achieve your goals and reach new heights.
            </Text>
          </Stack>
          <Flex>
            <Box
              boxSize={{ base: "100%", lg: "550px", xl: "550px" }}
              ml={{ base: 0, lg: 12, xl: 12 }}
              mt={{ base: "2rem", md: "5rem" }}
            >
              {" "}
              <Image
                width={"100%"}
                rounded={"md"}
                alt={"feature image"}
                src={Banner}
                objectFit={"cover"}
              />
            </Box>
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={5}>
          <Flex order={{ base: 0 }}>
            <Box
              boxSize={{ lg: "550px", xl: "550px" }}
              ml={{ base: 0, lg: 12, xl: 12 }}
              mt={"5rem"}
            >
              <Image
                width={"100%"}
                rounded={"md"}
                alt={"feature image"}
                src={Banner2}
                objectFit={"cover"}
              />
            </Box>
          </Flex>
          <Stack spacing={4} mr={{ base: 0, lg: 12, xl: 12 }}>
            <Center>
              <Heading
                fontWeight={"italic"}
                className="section_title"
                color={useColorModeValue("#042483", "white")}
              >
                What we offer
              </Heading>
            </Center>
            <Text
              color={useColorModeValue("#242424", "white")}
              fontSize={"lg"}
              align={"justify"}
            >
              Our company offers a comprehensive range of IT services, including
              Web Development, Mobile App Development, Software Development, SEO
              optimization, Process automation, IT sourcing and many more. We
              understand that every business is unique, and we work closely with
              our clients to understand their specific requirements and provide
              tailored solutions to meet their goals.
            </Text>
            <Text
              color={useColorModeValue("#242424", "white")}
              fontSize={"lg"}
              align={"justify"}
            >
              Our team is equipped to work with businesses in different time
              zones, ensuring that our services are available when you need
              them. Our IT sourcing services allow our clients to focus on their
              core competencies while we take care of the complex and
              time-consuming tasks of sourcing and managing IT resources. We
              have a proven track record of delivering high-quality IT solutions
              that drive business growth and success. Whether you are looking
              for support for an existing project, or are starting a new
              initiative, our team is here to help you achieve your goals.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default About;
