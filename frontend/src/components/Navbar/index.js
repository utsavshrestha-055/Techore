import {
  Box,
  Button,
  Center,
  Link as ChakraLink,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import React, { Fragment, useState } from 'react';

import { RiAccountCircleFill } from "react-icons/ri";
import logo from './image/logo_2.png';

const Navbar = () => {
  const { colorMode,toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navbar_option_color = useColorModeValue('white', '#1a202c');
let client_email = localStorage.getItem('client_email');
console.log(client_email);
let admin_email = localStorage.getItem("admin_email");
const logout=()=>{
  localStorage.removeItem('client_email');
  localStorage.removeItem("admin_email");
}
  const navigate = useNavigate();
const checklogin=()=>{
  if(client_email){
  navigate("/get-in-touch/dashboard");
  }else{
alert('login first')
    navigate("/client/login");

  }
}

  return (
    <>
      <Box
        bg={useColorModeValue("white", "#1A202C")}
        boxShadow="base"
        zIndex={999}
      >
        <Center py={5}>
          <Flex
            id="navbar"
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack spacing={8} alignItems={"center"}>
              {/* Logo starts here */}
              <Box>
                <Link to="/">
                  <Image
                    alt={"Techore Solutions"}
                    fit={"cover"}
                    align={"center"}
                    boxSize={"150px"}
                    objectFit={"cover"}
                    src={logo}
                    mr={40}
                    id="main-logo"
                  />
                </Link>
              </Box>
              {/* Logo ends here */}
              <HStack
                as={"nav"}
                spacing={9}
                display={{ base: "none", md: "flex" }}
              >
                <ChakraLink
                  as={Link}
                  fontWeight={"bold"}
                  px={2}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "#FF3E54"),
                    color: useColorModeValue("black", "white"),
                  }}
                  to={"/"}
                >
                  Home
                </ChakraLink>
                <ChakraLink
                  px={2}
                  as={Link}
                  fontWeight={"bold"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "#FF3E54"),
                    color: useColorModeValue("black", "white"),
                  }}
                  to={"/about-us"}
                >
                  About Us
                </ChakraLink>
                <Menu closeOnSelect placement="auto">
                  <MenuButton
                    as={Button}
                    rightIcon={
                      <ChevronDownIcon
                        ml={{ base: "0rem", md: "1rem", xl: "0" }}
                      />
                    }
                    bg={useColorModeValue("white", "#1a202c")}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "#FF3E54"),
                      color: useColorModeValue("black", "white"),
                    }}
                  >
                    Services
                  </MenuButton>

                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/website-development");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Web Development
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/mobile-development");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Mobile Development
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/software-development");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Software Development
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/it-outsourcing");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      IT Outsourcing
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/digital-marketing-and-seo");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Digital Marketing
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/data-analytics-and-visualization");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Data Analytics
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/hosting");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Hosting and Mantainence
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/training");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Training
                    </MenuItem>
                  </MenuList>
                </Menu>
                <ChakraLink
                  as={Link}
                  fontWeight={"bold"}
                  px={2}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "#FF3E54"),
                    color: useColorModeValue("black", "white"),
                  }}
                  to={"/team"}
                >
                  Our Team
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  fontWeight={"bold"}
                  px={2}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "#FF3E54"),
                    color: useColorModeValue("black", "white"),
                  }}
                  to={"/blogs"}
                >
                  Blogs
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  fontWeight={"bold"}
                  px={2}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "#FF3E54"),
                    color: useColorModeValue("black", "white"),
                  }}
                  to={"/careers"}
                >
                  Careers
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  fontWeight={"bold"}
                  px={2}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "#FF3E54"),
                    color: useColorModeValue("black", "white"),
                  }}
                  to={"/careers"}
                >
                  Contact Us
                </ChakraLink>
                <Button

                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"bold"}
                  color="white"
                  px={6}
                  backgroundColor="#FF3E54"
                  _hover={{ transform: "scale(1.1)", color: "white" }}
                  onClick={checklogin}
                >
                  Get in Touch
                </Button>
                <ChakraLink
                  as={Link}
                  fontWeight={"bold"}
                  px={2}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "#FF3E54"),
                    color: useColorModeValue("black", "white"),
                  }}
                  to={"/"}
                >
                  {client_email && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <RiAccountCircleFill size={30} />
                      {client_email}
                      <div onClick={logout}>log out</div>
                    </div>
                  )}
                  {admin_email && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <RiAccountCircleFill size={30} />
                      {admin_email}
                      <div onClick={logout}>log out</div>
                    </div>
                  )}
                </ChakraLink>
              </HStack>
            </HStack>
            <Flex
              ml={{ lg: 10, base: 5 }}
              mr={{ base: 5 }}
              alignItems={"center"}
            >
              <HStack>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
                <IconButton
                  size={"lg"}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  display={{ md: "none" }}
                  onClick={isOpen ? onClose : onOpen}
                />
              </HStack>
            </Flex>
          </Flex>
        </Center>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} mr={"60%"} ml={7} mt={5}>
            <Stack as={"nav"} spacing={3}>
              <ChakraLink
                as={Link}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                to={"/"}
                onClick={isOpen ? onClose : onOpen}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={Link}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                to={"/about-us"}
                onClick={isOpen ? onClose : onOpen}
              >
                About Us
              </ChakraLink>
              <Menu closeOnSelect>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bgColor={navbar_option_color}
                  fontWeight="normal"
                  variant="text"
                  justifyContent="flex-start"
                  left={"-6"}
                >
                  Services
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/website-development");
                    }}
                  >
                    Web Development
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/mobile-development");
                    }}
                  >
                    Mobile Development
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/software-development");
                    }}
                  >
                    Software Development
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/it-outsourcing");
                    }}
                  >
                    IT Outsourcing
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/digital-marketing-and-seo");
                    }}
                  >
                    Digital Marketing
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/data-analytics-and-visualization");
                    }}
                  >
                    Data Analytics
                  </MenuItem>
                </MenuList>
              </Menu>
              <ChakraLink
                as={Link}
                py={1}
                _hover={{
                  textDecoration: "none",
                }}
                to={"/team"}
                onClick={isOpen ? onClose : onOpen}
              >
                Team
              </ChakraLink>
              <ChakraLink
                as={Link}
                py={1}
                _hover={{
                  textDecoration: "none",
                }}
                to={"/blogs"}
                onClick={isOpen ? onClose : onOpen}
              >
                Blogs
              </ChakraLink>
              <ChakraLink
                as={Link}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                to={"/careers"}
                onClick={isOpen ? onClose : onOpen}
              >
                Careers
              </ChakraLink>
              <Button
                as={Link}
                rounded={"full"}
                size={"lg"}
                fontWeight={"bold"}
                color="white"
                px={6}
                backgroundColor="#FF3E54"
                _hover={{ transform: "scale(1.1)" }}
                to={"/contact-us"}
                onClick={isOpen ? onClose : onOpen}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
