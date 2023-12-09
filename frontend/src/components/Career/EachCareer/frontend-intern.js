import "../../../index.css";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { MdDateRange, MdLocationOn } from "react-icons/md";

import NewListToBr from "../../../newList";
import React from "react";
import { careers } from "../constants";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Career() {
  const [data, setData] = useState(useLocation().state || careers[1]);
  return (
    <Container py={12} maxWidth={"3xl"}>
      <Card borderRadius={"0"} border={"0"}>
        <CardHeader>
          <Text fontStyle="italic">{data.type}</Text>
          <Heading mb={3}>{data.position}</Heading>
          <hr style={{ width: "50%" }}></hr>
        </CardHeader>
        <CardBody>
          <Image
            src="https://envoy.com/wp-content/uploads/2022/09/At-work-UK-Blog-1-Feature.jpg"
            objectFit="cover"
            w={"100%"}
            h={{ base: "100%", md: 250 }}
          />{" "}
          <HStack mt={4} color="gray.500">
            <MdLocationOn /> <Text>{data.location}</Text>
          </HStack>
          <HStack color="gray.500">
            {" "}
            <MdDateRange />
            <Text> {data.date}</Text>
          </HStack>
          <Text mt={5} mb={2} fontWeight={700}>
            ABOUT US
          </Text>
          <Text mt={2} align={"justify"}>
            Techore Solutions is a leading software company that provides
            innovative solutions to businesses and consumers. Our company offers
            a comprehensive range of IT services, including Web Development,
            Mobile App Development, Software Development, SEO optimization,
            Process automation, IT sourcing and many more.
          </Text>
          <Text mt={5} mb={2} fontWeight={700}>
            ABOUT THE POSITION
          </Text>
          <Text mt={2} align={"justify"}>
            {data.about}
          </Text>
          <Text mt={5} mb={2} fontWeight={700}>
            YOUR WORK
          </Text>
          <UnorderedList>
            <NewListToBr>{data.your_work}</NewListToBr>
          </UnorderedList>{" "}
          <Text mt={5} mb={2} fontWeight={700}>
            YOU HAVE
          </Text>
          <UnorderedList>
            <NewListToBr>{data.you_have}</NewListToBr>
          </UnorderedList>
          <Box mt={5}>
            <Text>
              If you are interested in the position please send us your
              CV/Resume and Marksheets if available by clicking the button below
            </Text>
          </Box>
        </CardBody>
        <CardFooter mx={"auto"}>
          <Button
            as={Link}
            href="mailto:hr@techoresolutions.com"
            colorScheme="blue"
            variant="outline"
            style={{ textDecoration: "none" }}
          >
            {" "}
            #APPLY
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}
