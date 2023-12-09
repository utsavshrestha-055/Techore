import "./styles.css";
import "../../index.css";

import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";
import { our_partners } from "./constants/constants";

const Partner = () => {
  return (
    <Container maxW={"8x1"} mb={10} id="partners">
      <Center>
        <Heading
          fontWeight={"italic"}
          className="section_title"
          color={useColorModeValue("#042483", "white")}
        >
          Our Trusted Partners
        </Heading>
      </Center>
      <Center >
        <Box maxW={"8x1"} py={12}>

          <List className="logogrid">
         
            {our_partners.map(({ image, name }) => (
              <ListItem >
                <Image src={image} className="logogrid__Image" alt={name} />
              </ListItem>
            ))}
          </List>

        </Box>
      </Center>
    </Container>
  );
};

export default Partner;
