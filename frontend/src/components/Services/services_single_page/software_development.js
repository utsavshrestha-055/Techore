import React from 'react';
import {
  Center,
  Heading,
  Text,
  useColorModeValue,
  Container,
  Box,
  Image,
  SimpleGrid,
  Stack,
  Flex,
  OrderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import Banner3 from '../../Home/image/Banner3.png';

export default function SoftwareDevelopment() {
  return (
    <Container
      minW="100%"
      bgColor={useColorModeValue('white', '#1A202C')}
      mb={10}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} ba>
        <Stack
          id="software-development"
          spacing={4}
          mr={{ base: 0, lg: 12, xl: 12 }}
          ml={{ base: 0, md: '3rem' }}
          order={{ base: 1, md: 0 }}
        >
          <Center>
            <Heading
              fontWeight={'italic'}
              className="section_title"
              color={useColorModeValue('#042483', 'white')}
              mt={{ base: '1rem', md: '3rem' }}
            >
              Software Development
            </Heading>
          </Center>
          <Text
            color={useColorModeValue('#242424', 'white')}
            fontSize={'lg'}
            align={'justify'}
          >
            At Techore Solutions, we understand the importance of software in
            today's fast-paced business world. That's why we offer comprehensive
            software development services to help our clients achieve their
            technology goals and stay ahead of the competition. Our team of
            experts has extensive experience in developing high-quality,
            user-friendly software applications for a variety of industries,
            including finance, healthcare, and e-commerce. Whether you're
            looking to develop a new software application or enhance an existing
            one, we have the skills and experience to help you achieve your
            goals.
            <Text my={3}>Our software development services include:</Text>
            <OrderedList
              color={useColorModeValue('#242424', 'white')}
              spacing={2}
            >
              <ListItem>
                Custom Software Development: We develop custom software
                applications that meet our clients' specific needs and support
                their business goals.
              </ListItem>
              <ListItem>
                Web Development: We develop high-quality, user-friendly websites
                that provide a great user experience for our clients' customers.
              </ListItem>
              <ListItem>
                Mobile App Development: We develop custom mobile applications
                that work seamlessly across multiple platforms, including iOS
                and Android.
              </ListItem>
              <ListItem>
                Maintenance and Support: We provide ongoing maintenance and
                support for our clients' software applications, ensuring they're
                always running smoothly and providing the support they need.
              </ListItem>
            </OrderedList>
          </Text>
        </Stack>
        <Flex>
          <Box
            boxSize={{ base: '100%', lg: '550px', xl: '550px' }}
            ml={{ base: 0, lg: 12, xl: 12 }}
            mt={{ base: '2rem', md: '5rem' }}
          >
            {' '}
            <Image
              width={'100%'}
              rounded={'md'}
              alt={'feature image'}
              src={Banner3}
              objectFit={'cover'}
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
