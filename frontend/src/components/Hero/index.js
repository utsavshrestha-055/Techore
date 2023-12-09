import React from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import bannerImage from './image/banner1.png';

const Hero = () => {
  return (
    <>
      <Container maxW={'100%'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              ml={{ base: '2%', lg: '10%' }}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              fontFamily={'sans-serif'}
            >
              <Text
                color={useColorModeValue('#042483', 'white')}
                margin-left="auto"
              >
                Delivering technology solutions
              </Text>
            </Heading>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                as={Link}
                ml={{ base: '2%', lg: '20%' }}
                mr={{ base: '50%', lg: '0%' }}
                rounded={'full'}
                size={'lg'}
                fontWeight={'bold'}
                px={6}
                color="white"
                backgroundColor="#FF3E54"
                _hover={{ transform: 'scale(1.1)', color: 'white' }}
                to={'/about-us'}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Blob
              w={'190%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              bgcolor={useColorModeValue('blue', '#FF3E54')}
            />
            <Box
              position={'relative'}
              height={'350px'}
              rounded={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={bannerImage}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Hero;

export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="blob"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill={useColorModeValue('#0E1F51', '#1a365d')}
      />
    </Icon>
  );
};
