import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import NotFoundImage from "./images/notfound.jpg";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Techore Solutions</title>
      </Helmet>
      <Center mt={20}>
        <Box boxSize={"500px"}>
          <Image src={NotFoundImage} />
        </Box>
      </Center>
    </>
  );
}
