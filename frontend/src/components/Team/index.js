import "./styles.css";

import {
  Box,
  Center,
  Link as ChakraLink,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  UnorderedList,
  transition,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import NewListToBr from "../../newList";
import React from "react";
import { SiInstagram } from "react-icons/si";
import { leaders } from "./constant";

export default function Team(email) {
  return (
    <>
      <Helmet>
        <title>Our Team | Techore Solutions</title>
      </Helmet>
      <Container maxW={"8xl"} mb={6} id="teams">
        <Center mb={"50px"} mt={12}>
          <Heading color={useColorModeValue("#042483", "white")}>
            Meet Our Team
          </Heading>
        </Center>
        <Box id="model4">
          <Box className="members">
            {leaders.map(
              ({ name, title, phone, email, linkedin, image, instagram }) => (
                <Box className="member">
                  <Image width={200} height={200} src={image} />
                  <Box className="description">
                    <Heading
                      fontSize={"24px"}
                      fontWeight={600}
                      mb={2}
                      textAlign="center"
                      fontFamily={"Poppins"}
                    >
                      {name}
                    </Heading>
                    <Heading
                      mb={10}
                      fontSize={"18px"}
                      fontWeight={600}
                      textAlign="center"
                      fontFamily={"Poppins"}
                      color="#FF3E54"
                    >
                      {title}
                    </Heading>
                    <HStack mt={10} align={"left"} spacing={8}>
                      <Box
                        as={Link}
                        onClick={() => {
                          {
                            linkedin && window.open(linkedin, "_blank");
                            instagram && window.open(instagram, "_blank");
                          }
                        }}
                        _hover={{ transform: "scale(1.1)" }}
                      >
                        <div class="button">
                          {instagram ? (
                            <>
                              <div className="icon">
                                <SiInstagram color="white" fontSize={25} />
                              </div>
                              <span>Instagram</span>
                            </>
                          ) : (
                            <>
                              <div className="icon">
                                <FaLinkedin color="white" fontSize={25} />{" "}
                              </div>
                              <span>Linkedin</span>
                            </>
                          )}
                        </div>
                      </Box>
                      <Box
                        as={ChakraLink}
                        _hover={{ transform: "scale(1.1)" }}
                        href={email}
                      >
                        <div class="button">
                          <div class="icon">
                            <MdEmail fontSize={"25"} color="white" />
                          </div>
                          <span>Mail</span>
                        </div>
                      </Box>
                      <Box as={Link} _hover={{ transform: "scale(1.1)" }}>
                        <div class="button">
                          <div class="icon">
                            <FaPhoneSquareAlt color="white" fontSize={25} />
                          </div>
                          <span>
                            {phone}
                          </span>
                        </div>
                      </Box>
                    </HStack>
                  </Box>
                </Box>
              )
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
