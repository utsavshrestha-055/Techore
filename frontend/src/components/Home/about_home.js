import React from 'react';
import {
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Center,
  SimpleGrid,
  Flex,
  Image,
  Box,
} from '@chakra-ui/react';
import Banner from './image/banner.jpg';

const AboutHome = () => {
  return (
    <Container id="about" maxW={'8xl'}>
      <Center>
        <Heading
          fontWeight={'italic'}
          className="section_title"
          color={useColorModeValue('#042483', 'white')}
        >
          Who we are
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Box
            boxSize={{ base: '100%', lg: '500px', xl: '500px' }}
            ml={{ base: 0, lg: 12, xl: "15%" }}
          >
            {' '}
            <Image
              width={'100%'}
              rounded={'md'}
              alt={'feature image'}
              src={Banner}
              objectFit={'cover'}
            />
          </Box>
        </Flex>
        <Stack spacing={4} mr={{ base: 0, lg: 12, xl: 12 }}>
          <Text
            color={useColorModeValue('#242424', 'white')}
            fontSize={'lg'}
            align={'justify'}
          >
            Techore Solutions was established with a mission to empower
            businesses and individuals with cutting-edge technology solutions
            that streamline processes, increase productivity, and drive growth.
            Our founders have experience working with startups and big companies
            all over Europe and USA. We are dedicated to delivering innovative
            and efficient solutions that meet the unique needs of each of our
            clients. At Techore Solutions, our team of experts with their combined experience in
            computer science and IT, brings a wealth of knowledge and expertise
            to the table.
          </Text>
          <Text
            color={useColorModeValue('#242424', 'white')}
            fontSize={'lg'}
            align={'justify'}
          >
            We at Techore Solutions are committed to staying on top of industry trends and
            advancements, and to continuously improving our offerings to ensure
            that our clients always have access to the latest and greatest
            technology. Our passion for innovation is what sets us apart, and it
            drives us to constantly push the boundaries of what's possible. If
            you're looking for a technology partner that is dedicated to your
            success, look no further. We're here to help you achieve your goals
            and reach new heights.
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default AboutHome;
