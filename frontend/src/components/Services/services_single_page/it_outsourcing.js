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
} from '@chakra-ui/react';
import Banner4 from '../../Home/image/Banner4.png';

export default function ItOutsourcing() {
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
            mt={{ base: '2rem', md: '7rem' }}
          >
            <Image
              width={'100%'}
              rounded={'md'}
              alt={'feature image'}
              src={Banner4}
              objectFit={'cover'}
            />
          </Box>
        </Flex>
        <Stack
          id="it-outsourcing"
          spacing={4}
          mr={{ base: 0, lg: 12, xl: 12 }}
          mt={{ base: '-2rem', md: 0 }}
        >
          <Center>
            <Heading
              fontWeight={'italic'}
              className="section_title"
              color={useColorModeValue('#042483', 'white')}
            >
              IT Outsourcing
            </Heading>
          </Center>
          <Text
            color={useColorModeValue('#242424', 'white')}
            fontSize={'lg'}
            align={'justify'}
          >
            At Techore Solutions, we understand the challenges of managing
            technology in today's fast-paced business world. That's why we offer
            IT outsourcing services to help our clients offload their technology
            needs to a trusted partner. Our team of experts has extensive
            experience in a variety of technology domains, including cloud
            computing, cybersecurity, software development, and more. We provide
            a full range of IT outsourcing services, including application
            management, network management, and technical support.
            <Text my={3}>Our IT outsourcing services include:</Text>
            <OrderedList
              color={useColorModeValue('#242424', 'white')}
              spacing={2}
            >
              <ListItem>
                Application Management: We manage and maintain our clients'
                applications, ensuring they're running smoothly and providing
                the support they need.
              </ListItem>
              <ListItem>
                Network Management: We manage and maintain our clients'
                networks, ensuring they're secure and providing the support they
                need.
              </ListItem>
              <ListItem>
                Technical Support: We provide 24/7 technical support to help our
                clients resolve any issues that arise and ensure their
                technology is always working for them.
              </ListItem>
              <ListItem>
                Cloud Computing: We help our clients offload their cloud
                computing needs to a trusted partner, freeing them up to focus
                on their core business.
              </ListItem>
              <ListItem>
                Cybersecurity: We provide expert cybersecurity support and help
                our clients protect their sensitive information and systems.
              </ListItem>
            </OrderedList>
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
