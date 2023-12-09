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
import Banner8 from '../../Home/image/Banner8.png';

export default function DataVisualization() {
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
            mt={{ base: '2rem', md: '10rem' }}
          >
            <Image
              width={'100%'}
              rounded={'md'}
              alt={'feature image'}
              src={Banner8}
              objectFit={'cover'}
            />
          </Box>
        </Flex>
        <Stack
          id="data-analytics"
          spacing={4}
          mr={{ base: 0, lg: 12, xl: 12 }}
          mt={{ base: '-5rem', md: '2rem' }}
        >
          <Center>
            <Heading
              fontWeight={'italic'}
              className="section_title"
              color={useColorModeValue('#042483', 'white')}
            >
              Data Analytics 
            </Heading>
          </Center>
          <Text
            color={useColorModeValue('#242424', 'white')}
            fontSize={'lg'}
            align={'justify'}
          >
            At Techore Solutions, we understand the importance of data in
            today's fast-paced business world. That's why we offer a wide range
            of data analytics and visualization services to help our clients
            make informed decisions and drive growth. Our team of experts is
            highly skilled in data collection, management, and analysis, and we
            use the latest tools and techniques to provide our clients with the
            insights they need to succeed. Whether it's providing custom data
            solutions or delivering visually appealing dashboards and reports,
            we're here to help.
            <Text my={3}>
              Our data analysis and visualization services include:
            </Text>
            <OrderedList
              color={useColorModeValue('#242424', 'white')}
              spacing={2}
            >
              <ListItem>
                Data Collection and Management: We help our clients collect,
                store, and manage their data effectively, ensuring it's ready
                for analysis.
              </ListItem>
              <ListItem>
                Data Cleaning and Preparation: We clean and prepare data for
                analysis, making sure it's accurate and consistent.
              </ListItem>
              <ListItem>
                Data Analysis and Insights: We use advanced data analysis
                techniques to identify trends, patterns, and insights that can
                inform business decisions.
              </ListItem>
              <ListItem>
                Data Visualization: We help our clients visualize their data in
                ways that are easy to understand and communicate.
              </ListItem>
              <ListItem>
                Predictive Analytics: We use statistical and machine learning
                techniques to predict future trends and behaviors, helping our
                clients make informed decisions about their strategy.
              </ListItem>
              <ListItem>
                Business Intelligence: We help our clients turn their data into
                actionable insights that support their business goals.
              </ListItem>
              <ListItem>
                Customized Data Solutions: We work with our clients to develop
                custom data solutions that meet their specific needs and support
                their business goals.
              </ListItem>
            </OrderedList>
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
