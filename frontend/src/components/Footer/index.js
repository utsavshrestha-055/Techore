import {
  Box,
  Link as ChakraLink,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../Navbar/image/logo_2.png';

export default function Footer() {
  return (
    <Box bg="#0E1F51" color="white" zIndex={1} bottom={0}>
      <Container
        as={Stack}
        maxW={"8xl"}
        px={{ base: 5, md: 12 }}
        paddingTop={10}
        paddingBottom={5}
      >
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            sm: "3fr 3fr 3fr  3fr",
            md: "3fr 2fr  2fr 4fr",
          }}
          spacing={10}
        >
          <Stack spacing={3}>
            <Box>
              <Image
                alt={"REDA"}
                fit={"cover"}
                align={"center"}
                boxSize={"160px"}
                objectFit={"cover"}
                src={logo}
                mt={-10}
                ml={{ base: -5, md: 5 }}
              />
              <Text fontSize={"md"} fontWeight={"bold"} mt={-4}>
                Delivering technology solutions
              </Text>{" "}
              <HStack spacing={10} mt={5} ml={{ base: 0, md: 6 }}>
                <ChakraLink
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/techoresolutions",
                      "_blank"
                    );
                  }}
                  _hover={{ transform: "scale(1.1)", color: "hotpink" }}
                >
                  <FaFacebook fontSize={"25px"} />
                </ChakraLink>
                <ChakraLink
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/techoresolutions/",
                      "_blank"
                    );
                  }}
                  _hover={{ transform: "scale(1.1)", color: "hotpink" }}
                >
                  <FaInstagram fontSize={"25px"} />
                </ChakraLink>
                <ChakraLink
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/techore-solutions/",
                      "_blank"
                    );
                  }}
                  _hover={{ transform: "scale(1.1)", color: "hotpink" }}
                >
                  <FaLinkedinIn fontSize={"25px"} />
                </ChakraLink>
              </HStack>
            </Box>
          </Stack>
          <Stack ml={{ base: 0, xl: 10 }}>
            <HStack>
              <Heading fontSize={"20"} mb={2}>
                Company
                <Divider borderColor="hotpink" mt={1} borderWidth={2} />
              </Heading>
            </HStack>
            <ChakraLink
              as={Link}
              to="/"
              fontWeight={"bold"}
              _hover={{ color: "hotpink" }}
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/about-us"}
              fontWeight={"bold"}
              _hover={{ color: "hotpink" }}
            >
              About Us
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/blogs"}
              fontWeight={"bold"}
              _hover={{ color: "hotpink" }}
            >
              Blogs
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/team"}
              fontWeight={"bold"}
              _hover={{ color: "hotpink" }}
            >
              Our Team
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/privacy-policy"}
              fontWeight={"bold"}
              _hover={{ color: "hotpink" }}
            >
              Privacy Policy
            </ChakraLink>
          </Stack>
          <Stack ml={{ base: 0, xl: 10 }}>
            <HStack>
              {" "}
              <Heading fontSize={"20"} mb={2}>
                Top Services
                <Divider borderColor="hotpink" mt={1} borderWidth={2} />
              </Heading>
            </HStack>
            <ChakraLink
              as={Link}
              to="/services/software-development"
              fontWeight={"bold"}
              _hover={{ color: "hotpink" }}
            >
              Web Development
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/services/mobile-development"}
              fontWeight={"bold"}
              _hover={{ color: "hotpink" }}
            >
              App Development
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/services/software-development"}
              fontWeight={"bold"}
              _hover={{ color: "hotpink" }}
            >
              Software Development
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/services/it-outsourcing"}
              fontWeight={"bold"}
              _hover={{ color: "hotpink" }}
            >
              IT Outsourcing
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/services/process-automation"}
              fontWeight={"bold"}
              _hover={{ color: "hotpink" }}
            >
              Process Automation
            </ChakraLink>
          </Stack>
          <Stack ml={{ base: 0, md: "4rem" }}>
            <HStack>
              <Heading fontSize={"20"} mb={2} alignContent={"center"}>
                Contact <Divider borderColor="hotpink" mt={1} borderWidth={2} />
              </Heading>
            </HStack>
            <HStack>
              <ChakraLink
                fontWeight={"bold"}
                color={"white"}
                href="mailto:info@techoresolutions.com"
                _hover={{ color: "hotpink" }}
                mb={2}
              >
                info@techoresolutions.com
              </ChakraLink>
            </HStack>
            <SimpleGrid
              templateColumns={{
                base: "1fr",
                sm: "3fr 3fr  ",
                md: "3fr 3fr",
              }}
              spacing={{ base: 8, md: 12 }}
            >
              {" "}
              <Stack>
                {" "}
                <Text color={"white"} fontWeight={"bold"}>
                  Nepal
                </Text>
                <Text
                  color={"gray"}
                  as={ChakraLink}
                  href="https://goo.gl/maps/q6dCBv6t37QpFY5D6"
                  _hover={{ color: "hotpink" }}
                >
                  Sitapaila, Kathmandu
                </Text>
                <ChakraLink
                  fontWeight={"bold"}
                  color={"white"}
                  href="tel:+9779810296312"
                  _hover={{ color: "hotpink" }}
                  mb={4}
                >
                  +977 9810296312
                </ChakraLink>
              </Stack>{" "}
              <Stack>
                {" "}
                <Text fontWeight={"bold"}>Germany</Text>
                <Text
                  color={"gray"}
                  as={ChakraLink}
                  href="https://goo.gl/maps/Ja2NgDVY4accpeFT7"
                  _hover={{ color: "hotpink" }}
                >
                  Falkensee,Berlin
                </Text>{" "}
                <ChakraLink
                  fontWeight={"bold"}
                  color={"white"}
                  href="tel:+4917659516192"
                  _hover={{ color: "hotpink" }}
                  mb={4}
                >
                  +49 17659516192
                </ChakraLink>{" "}
              </Stack>
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
      </Container>
      <Divider />
      <HStack justifyContent={"center"} p={4}>
        <Text>
          &copy; Copyright 2023 | Techore Solutions | All Rights Preserved
        </Text>
      </HStack>
    </Box>
  );
}
