import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Banner8 from '../../Home/image/soon.jpg';

export default function Training() {
  return (
    <>
      <Helmet>
        <title>Training | Techore Solutions</title>
      </Helmet>
      <Center mt={20}>
        <Box boxSize={"500px"}>
          <Image src={Banner8} />
        </Box>
      </Center>
    </>
  );
}
