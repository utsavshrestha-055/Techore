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
import Banner2 from '../../Home/image/Banner2.png';

export default function MobDevelopment() {
  return (
    <Container
      minW="100%"
      bgColor={useColorModeValue('white', '#1A202C')}
      mb={10}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={5}>
        <Flex order={{ base: 0 }}>
          <Box
            boxSize={{ lg: '550px', xl: '550px' }}
            ml={{ base: 0, lg: 12, xl: 12 }}
            mt={{ base: '2rem', md: '6rem' }}
          >
            <Image
              width={'100%'}
              rounded={'md'}
              alt={'feature image'}
              src={Banner2}
              objectFit={'cover'}
            />
          </Box>
        </Flex>
        <Stack
          id="app-development"
          spacing={4}
          mr={{ base: 0, lg: 12, xl: 12 }}
          mt={{ base: '-3rem', md: '1rem' }}
        >
          <Center>
            <Heading
              fontWeight={'italic'}
              className="section_title"
              color={useColorModeValue('#042483', 'white')}
            >
              App Development
            </Heading>
          </Center>
          <Text
            color={useColorModeValue('#242424', 'white')}
            fontSize={'lg'}
            align={'justify'}
          >
            At Techore Solutions, we understand the importance of mobile
            technology in today's fast-paced business world. That's why we offer
            comprehensive mobile development services to help our clients take
            their business to the next level. Our team of experts has extensive
            experience in developing high-quality, user-friendly mobile
            applications for a variety of platforms, including iOS and Android.
            Whether you're looking to develop a new app or enhance an existing
            one, we have the skills and experience to help you achieve your
            goals.
            <Text my={3}>Our mobile development services include:</Text>
            <OrderedList
              color={useColorModeValue('#242424', 'white')}
              spacing={2}
            >
              <ListItem>
                Mobile App Development: We develop custom mobile applications
                that meet our clients' specific needs and support their business
                goals.
              </ListItem>
              <ListItem>
                Cross-Platform Development: We develop mobile applications that
                work seamlessly across multiple platforms, including iOS and
                Android.
              </ListItem>
              <ListItem>
                UI/UX Design: We design user-friendly, engaging interfaces that
                provide a great user experience for our clients' customers.
              </ListItem>
              <ListItem>
                Maintenance and Support: We provide ongoing maintenance and
                support for our clients' mobile applications, ensuring they're
                always running smoothly and providing the support they need.
              </ListItem>
            </OrderedList>
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
