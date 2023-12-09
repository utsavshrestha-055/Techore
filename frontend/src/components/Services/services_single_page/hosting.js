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
import Banner7 from '../../Home/image/Banner7.png';

export default function ProcessAutomation() {
  return (
    <Container
      minW="100%"
      bgColor={useColorModeValue('white', '#1A202C')}
      mb={10}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} ba>
        <Stack
          id="process-automation"
          spacing={4}
          mr={{ base: 0, lg: 12, xl: 12 }}
          ml={{ base: 0, md: '3rem' }}
          order={{ base: 1, md: 0 }}
          mt={{ base: '-5rem', md: '2rem' }}
        >
          <Center>
            <Heading
              fontWeight={'italic'}
              className="section_title"
              color={useColorModeValue('#042483', 'white')}
              mt={{ base: '2rem' }}
            >
              Hosting and Mantinance
            </Heading>
          </Center>
          <Text
            color={useColorModeValue('#242424', 'white')}
            fontSize={'lg'}
            align={'justify'}
          >
            At Techore Solutions, we understand the importance of hosting involves providing server space and resources to store and serve websites and web applications.When you have a website, it needs to be hosted on a server so that users can access it online. Whereas, website maintenance involves regular updates, security checks, bug fixes, and overall upkeep to ensure the website or application runs smoothly and securely. That's
            why we offer comprehensive web hosting and mantinance services to help our
            clients.
            <Text my={3}>Our hosting services include:</Text>
            <OrderedList
              color={useColorModeValue('#242424', 'white')}
              spacing={2}
            >
              <ListItem>
              Shared Hosting: In shared hosting, multiple websites share the same server resources. It is cost-effective but may have limitations on performance and resources.
              </ListItem>
              <ListItem>
              Cloud Hosting: Cloud hosting utilizes multiple interconnected servers to host websites, providing scalability and flexibility.
              </ListItem>
              <ListItem>
              Managed Hosting: Managed hosting includes server setup, maintenance, and support, allowing you to focus on your website or application without worrying about server management.
              </ListItem>
              <ListItem>
              Content Updates: Keeping the website content up-to-date, including text, images, and other media.
              </ListItem>
              <ListItem>
              Performance Optimization: Improving website speed and performance to enhance user experience.
              </ListItem>
              <ListItem>
              Bug Fixes: Addressing and resolving any technical issues or bugs that may arise.
              </ListItem>
              <ListItem>
              Backup and Disaster Recovery: Regularly backing up data and having a disaster recovery plan in place to minimize data loss in case of any unexpected issues.
              </ListItem>
            </OrderedList>
          </Text>
        </Stack>
        <Flex>
          <Box
            boxSize={{ base: '100%', lg: '550px', xl: '550px' }}
            ml={{ base: 0, lg: 12, xl: 12 }}
            mt={{ base: '0rem', md: '8rem' }}
          >
            {' '}
            <Image
              width={'100%'}
              rounded={'md'}
              alt={'feature image'}
              src={Banner7}
              objectFit={'cover'}
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
