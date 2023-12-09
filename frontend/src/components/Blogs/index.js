import React from "react";
import {
  Container,
  Stack,
  Box,
  Image,
  Text,
  Heading,
  Center,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import "./styles.css";
import { blogs } from "./constants";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs | Techore Solutions</title>
      </Helmet>
      <Stack>
        <Container mt={12} maxWidth={"6xl"}>
          <Center mb={"50px"}>
            <Heading color={useColorModeValue("#042483", "white")}>
              Our Latest Blogs
            </Heading>
          </Center>
          <Box id="blog">
            {blogs.map(
              ({  title, content, image, date, author, to, id, tag }) => (
                <Box className="blog-box">
                  <Box className="blog-image" p={"2rem"}>
                    <Image src={image} />
                  </Box>
                  <Box  className="blog-details">
                    <Badge p={1.5} mb={2} colorScheme="purple">
                      {tag}
                    </Badge>
                    <Heading fontSize={"25px"} mb={5}>
                      {title}
                    </Heading>
                    <Text noOfLines={[2, 3]}>{content}</Text>
                    {/* <a href="#">Continue reading</a> */}
                    <Link to={to}>Continue reading </Link>
                  </Box>
                  <Heading className="heading-date" style={{ fontSize: '40px' }}>{date}</Heading>
                </Box>
              )
            )}
          </Box>
        </Container>
      </Stack>
    </>
  );
}
