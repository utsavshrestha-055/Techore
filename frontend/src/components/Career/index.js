import React from 'react';
import {
  Container,
  Stack,
  Box,
  Text,
  Flex,
  SimpleGrid,
  Highlight,
  Image,
  Heading,
  Center,
  HStack,
  VStack,
  Button,
  Hide,
  useColorModeValue,
} from '@chakra-ui/react';
import { careers } from './constants';
import { Helmet } from 'react-helmet';
import careerbg from './careerbg.jpeg';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Career() {
  return (
    <>
      <Helmet>
        <title>Careers | Techore Solutions</title>
      </Helmet>
      <Stack>
        <Box position="relative" height="400px" width="100%">
          <Image src={careerbg} objectFit="cover" height="100%" width="100%" />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
          >
            <Text
              color={'white'}
              fontWeight={'bold'}
              fontSize={'40px'}
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
            >
              Your Career At Techore Solutions
            </Text>

            <Center mt={5}>
              {' '}
              <a href="#careerlist" class="cta">
                <HStack color="black">
                  <span>Join Us</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </HStack>
              </a>
            </Center>
          </Box>
        </Box>
      </Stack>

      <Container py={12} maxWidth={'6xl'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} p={{ md: 4 }} mr={'4rem'}>
            <Heading
              fontWeight={'italic'}
              className="section_title"
              color={useColorModeValue('#042483', 'white')}
              mt={{ base: '2rem', md: '5rem' }}
              mb={'1.3rem'}
            >
              Unlock Your Potential at Techore Solutions
            </Heading>
            <Text color={useColorModeValue('#242424', 'white')} fontSize={'lg'}>
              <Hide below="md"> We imagine a</Hide>{' '}
              <Highlight
                query="Socio-economic self-reliant society."
                styles={{
                  px: '1',
                  py: '1',
                  bg: 'orange.100',
                  borderRadius: '11px',
                }}
              >
                At On Techore Solutions, we strive to create a work environment
                that sparks innovative thinking, fosters a sense of ownership,
                and encourages highly motivated individuals to tap into their
                creativity. If you're a bright and determined individual looking
                to unleash your creative potential, then come join us at Nepal's
                most dynamic and successful software development company.
              </Highlight>
            </Text>
          </Stack>{' '}
          <Flex>
            <Box
              ml={{ base: 0, lg: 12, xl: 0 }}
              mt={{ base: '0.2rem', md: '2rem' }}
              p={{ md: 4 }}
            >
              <Image
                width={'100%'}
                rounded={'md'}
                alt={'feature image'}
                src="https://www.freevector.com/uploads/vector/preview/28478/teamwork2.jpg"
                objectFit={'cover'}
              />
            </Box>
          </Flex>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex order={{ base: 1, md: 0 }}>
            <Box
              ml={{ base: 0, lg: 12, xl: 0 }}
              mt={{ base: 0, md: '7rem' }}
              p={{ md: 4 }}
            >
              <Image
                width={'100%'}
                rounded={'md'}
                alt={'feature image'}
                src="https://media.istockphoto.com/id/1238595711/vector/office-people-vector-young-man-working-on-computer.jpg?s=170667a&w=0&k=20&c=2ueUajS2xNAgaRTvnb7DoOCKCArT10Oi99GlRwe6FeQ="
                objectFit={'cover'}
              />
            </Box>
          </Flex>
          <Stack spacing={4} p={{ md: 4 }} order={{ base: 0 }}>
            <Heading
              fontWeight={'italic'}
              className="section_title"
              color={useColorModeValue('#042483', 'white')}
              mt={{ base: '2rem', md: '6rem' }}
              mb={'1rem'}
            >
              A dynamic group of innovative thinkers pushing boundaries
            </Heading>
            <Text color={useColorModeValue('#242424', 'white')} fontSize={'lg'}>
              At Techore Solutions, we cultivate a collaborative and driven work
              culture. With a proud history of serving more than 15 satisfied
              clients, we are seeking individuals with dynamic creativity who
              are eager to make a lasting impact. As a member of our team, you
              will have the chance to unleash your full potential and contribute
              to our mission of delivering innovative products and services to
              our clients. Our supportive work environment, flexible remote work
              options, advantageous location, opportunities for growth, and
              dedicated team members are just a few of the many benefits you'll
              enjoy when you join us.
            </Text>
          </Stack>{' '}
        </SimpleGrid>

        <Center
          mb={'50px'}
          color={useColorModeValue('#042483', 'white')}
          mt={'7rem'}
          id="careerlist"
        >
          {' '}
          <VStack>
            <Stack>
              <Heading className="heading">Our Openings</Heading>
              <Box
                mt={1}
                width="100%"
                height="2px"
                background="linear-gradient(to right, #f69ec4, #f9dd94 100%)"
              />
            </Stack>
            <Stack>
              <Text my={'2rem'} mx={{ base: '0', md: '9rem' }}>
                {' '}
                Join our passionate team in our mission to empower the next
                generation of creators and shape the future of the online world.
                We seek individuals who share our excitement and drive to build
                a platform that fosters success.
              </Text>
            </Stack>
          </VStack>
        </Center>
        <Box boxShadow={'md'} borderRadius={'1rem'}>
          {' '}
          {careers.map(
            ({
              position,
              type,
              you_have,
              your_work,
              date,
              id,
              to,
              about,
              location,
            }) => (
              <Stack
                pb="6"
                m="4"
                borderBottom="1px solid"
                borderBottomColor="gray.200"
              >
                <VStack
                  display="grid"
                  gridTemplateColumns="repeat(2, 1fr)"
                  mt={5}
                >
                  <Box>
                    <Text fontWeight="Bold">{position}</Text>
                    <HStack mt={'2'} spacing={5}>
                      <Text fontSize={'sm'}>{location}</Text>
                      <Text fontSize={'sm'}>{type}</Text>
                    </HStack>
                  </Box>
                  <Box textAlign={'right'}>
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      as={Link}
                      to={to}
                      state={{
                        position: position,
                        type: type,
                        about: about,
                        location: location,
                        date: date,
                        your_work: your_work,
                        you_have: you_have,
                      }}
                    >
                      APPLY
                    </Button>
                  </Box>
                </VStack>
              </Stack>
            )
          )}
        </Box>
      </Container>
    </>
  );
}