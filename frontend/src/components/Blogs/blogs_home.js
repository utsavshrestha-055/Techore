import {
  Text,
  Container,
  Box,
  Heading,
  useColorModeValue,
  Center,
  Button,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import './home_styles.css';
import { Link } from 'react-router-dom';
import { blogs } from './constants';

const Blogs_Home = () => {
  const blogs_home = blogs.slice(0, 3);
  return (
    <Container maxW={'8xl'}>
      <Box className="wrapper">
        <Center>
          <Heading
            fontWeight={'italic'}
            className="section_title"
            color={useColorModeValue('#042483', 'white')}
          >
            Recent Blogs
          </Heading>
        </Center>
        <Box className="articles">
          {blogs_home.map(
            ({ title, content, image, date, author, to, id, tag }) => (
              <Box className="article" key={id}>
                <Box className="preview">
                  <Box className="stretch">
                    <Image
                      src={image}
                      alt="Article Image"
                    />
                  </Box>
                </Box>
                <Box className="cat art">
                  <Text color="white">{tag}</Text>
                </Box>
                <h3 className="title">
                  <Link to={to}>{title}</Link>
                </h3>
                <Text className="description" color="black" noOfLines={[2, 3]} >
                  {content}
                </Text>
                <footer className="article_footer">
                  <span className="author">{author}</span>
                  <span className="read_more">
                    <Link to={to}>Read More </Link>
                  </span>
                </footer>
              </Box>
            ))}
        </Box>
        <Center>
          <Button
          as={Link}
            size={'lg'}
            fontWeight={'bold'}
            px={6}
            color="white"
            backgroundColor="#FF3E54"
            to="/blogs"
            _hover={{ transform: 'scale(1.1)', textColor:"white" }}
          >
            View All Blogs
          </Button>
        </Center>
      </Box>
    </Container>
  );
};

export default Blogs_Home;
