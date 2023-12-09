import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  useColorModeValue,
  Center,
  Stack,
  Container,
  Image,
  Flex,
  Hide,
  SimpleGrid,
  Box,
  Highlight,
  Heading,
  Text,
  Button,
  FormControl,
  Input,
  Textarea,
  CircularProgress,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import ErrorMessage from './errorMessage';

import people from './people.png';
import './styles.css';
const Contact = () => {
  const [messageDisplay, setMessageDisplay] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        'service_m6zt11c',
        'template_wmvad14',
        form.current,
        'Sz3mWCgp4OFJmvOjp'
      )
      .then(
        (result) => {
          setIsLoading(false);
          form.current.reset();
          setMessageDisplay(true);
        },
        (error) => {
          setIsLoading(false);
          setError(error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Techore Solutions</title>
      </Helmet>
      <Container minH={'100vh'} maxW="full">
        <Container maxW="8xl" mt={0} overflow="hidden">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 0, md: 4 }}
            mt={-2}
          >
            <Flex>
              <Box
                ml={{ base: 0, lg: 12, xl: 0 }}
                mt={{ base: '2rem', md: '3rem' }}
                p={{ md: 1 }}
              >
                <Image
                  width={'100%'}
                  rounded={'md'}
                  alt={'feature image'}
                  src={people}
                  objectFit={'cover'}
                />
              </Box>
            </Flex>
            <Stack
              mt={{ base: '1rem', md: '7rem' }}
              spacing={4}
              p={{ md: 4 }}
              mr={{ base: 0, md: '4rem' }}
            >
              <Hide below="md">
                {' '}
                <Heading
                  color={useColorModeValue('#042483', 'white')}
                  mb={{ base: 0, md: '1rem' }}
                  fontSize={'40px'}
                >
                  We’ll Be Glad To Assist You!{' '}
                </Heading>
                <Text
                  color={useColorModeValue('#242424', 'white')}
                  fontSize={'lg'}
                >
                  We are eager to help you boost your business, whether it is a
                  new start-up or an established one.
                </Text>
              </Hide>
            </Stack>{' '}
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {' '}
            <Center>
              {' '}
              <Box
                ml={{ base: 0, md: '7rem' }}
                mt={{ base: '1rem', md: '-3rem' }}
              >
                <Center>
                  {' '}
                  <Heading
                    color={useColorModeValue('#042483', 'white')}
                    mb={{ base: '1rem', md: '2rem' }}
                    className="element"
                    fontSize={'40px'}
                  >
                    Who Are We?
                  </Heading>
                </Center>{' '}
                <Text fontSize={'20px'}>
                  At Techore Solutions, we empower businesses to reach their
                  <Highlight
                    query="full potential"
                    styles={{
                      px: '1',
                      mx: '2',
                      rounded: 'md',
                      bg: 'red.100',
                    }}
                  >
                    full potential
                  </Highlight>
                  through cutting-edge digital solutions. With a focus on
                  versatility and impact, we partner with international clients
                  to tackle the challenges that arise during their growth
                  journey, enabling them to achieve their goals and thrive in a
                  constantly evolving market.
                </Text>
              </Box>
            </Center>
            <Box className="background" mt={{ base: '-3rem', md: '0' }}>
              <Box className="container">
                <Box className="screen">
                  <Box className="screen-header">
                    <Box className="screen-header-left">
                      <Box className="screen-header-button close"></Box>
                      <Box className="screen-header-button maximize"></Box>
                      <Box className="screen-header-button minimize"></Box>
                    </Box>
                    <Box className="screen-header-right">
                      <Box className="screen-header-ellipsis"></Box>
                      <Box className="screen-header-ellipsis"></Box>
                      <Box className="screen-header-ellipsis"></Box>
                    </Box>
                  </Box>
                  <Box className="screen-body">
                    <Box className="screen-body-item">
                      <form ref={form} onSubmit={sendEmail}>
                        {error && <ErrorMessage message={error} />}
                        <FormControl isRequired>
                          <Input
                            name="name"
                            autoComplete="off"
                            type="text"
                            color={'gray'}
                            placeholder="Name"
                            _placeholder={{ color: 'white' }}
                            style={{
                              border: 'none',
                              borderBottom: '2px solid',
                              height: '50px',
                              width: '100%',
                            }}
                            _focus={{ boxShadow: 'none', color: 'white' }}
                            borderRadius={0}
                          />
                        </FormControl>
                        <FormControl mt={6}>
                          <Input
                            name="email"
                            type="email"
                            color={'gray'}
                            placeholder="Email"
                            autoComplete="off"
                            _placeholder={{ color: 'white' }}
                            style={{
                              border: 'none',
                              borderBottom: '2px solid',
                            }}
                            _focus={{ boxShadow: 'none', color: 'white' }}
                            borderRadius={0}
                          />
                        </FormControl>
                        <FormControl mt={6} isRequired>
                          <Input
                            name="phone"
                            type="tel"
                            color={'gray'}
                            autoComplete="off"
                            placeholder="Phone"
                            _placeholder={{ color: 'white' }}
                            style={{
                              border: 'none',
                              borderBottom: '2px solid',
                            }}
                            _focus={{ boxShadow: 'none', color: 'white' }}
                            borderRadius={0}
                            _autofill={{ bg: 'red' }}
                          />
                        </FormControl>
                        <FormControl mt={6} isRequired>
                          <Textarea
                            name="message"
                            color={'gray'}
                            placeholder="Your Message"
                            _placeholder={{ color: 'white' }}
                            style={{
                              border: 'none',
                              borderBottom: '2px solid',
                            }}
                            _focus={{ boxShadow: 'none', color: 'white' }}
                            borderRadius={0}
                          />
                        </FormControl>
                        <Button
                          width="full"
                          mt={4}
                          type="submit"
                          bg="#FF3E54"
                          color={useColorModeValue('white', 'white')}
                          _hover={{ transform: 'scale(1.05)' }}
                        >
                          {isLoading ? (
                            <CircularProgress
                              isIndeterminate
                              size="24px"
                              color="teal"
                            />
                          ) : (
                            'Submit'
                          )}
                        </Button>
                      </form>
                      <Text
                        id="success_message"
                        mt={2}
                        color={'limegreen'}
                        align="center"
                        display={messageDisplay ? 'block' : 'none'}
                      >
                        Form has been submitted succesfully! We will get in
                        touch with you soon.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
