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
import Banner6 from '../../Home/image/Banner6.png';

export default function WebDevelopment() {
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
            my={{ base: 0, md: '5rem' }}
          >
            <Image
              width={'100%'}
              rounded={'md'}
              alt={'feature image'}
              src={Banner6}
              objectFit={'cover'}
            />
          </Box>
        </Flex>
        <Stack
          id="seo"
          spacing={4}
          mr={{ base: 0, lg: 12, xl: 12 }}
          mt={{ base: '-7rem', md: '2rem' }}
        >
          <Center>
            <Heading
              fontWeight={'italic'}
              className="section_title"
              color={useColorModeValue('#042483', 'white')}
            >
              Digital Marketing
            </Heading>
          </Center>
          <Text
            color={useColorModeValue('#242424', 'white')}
            fontSize={'lg'}
            align={'justify'}
          >
            At Techore Solutions, we understand the importance of Digital Marketing in today's fast-paced online world. That's why we
            offer wide range of strategies and activities designed to promote and market products, services, or brands through digital channels. As the world becomes increasingly digitized, businesses and organizations are leveraging these services to reach their target audience, build brand awareness, drive traffic, generate leads, and ultimately increase sales or conversions. 
            <Text my={3}>Here are some common digital marketing services:</Text>
            <OrderedList
              color={useColorModeValue('#242424', 'white')}
              spacing={2}
            >
              <ListItem>
              Search Engine Optimization (SEO): SEO involves optimizing a website to rank higher in search engine results pages (SERPs). The goal is to improve organic (non-paid) visibility, attract more relevant traffic, and increase the website's authority and credibility.
              </ListItem>
              <ListItem>
              Pay-Per-Click Advertising (PPC): PPC is a paid advertising model where businesses pay a fee each time a user clicks on their online ad. This includes platforms like Google Ads and social media advertising on platforms like Facebook, Instagram, Twitter, etc.
              </ListItem>
              <ListItem>
              Social Media Marketing (SMM): SMM involves leveraging social media platforms to promote products or services, engage with the audience, and build brand loyalty. It includes organic posting, sponsored content, and social media advertising.
              </ListItem>
              <ListItem>
              Email Marketing: Email marketing involves sending targeted emails to a group of potential or existing customers to promote products, offer discounts, share content, or build relationships.
              </ListItem>
            </OrderedList>
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
