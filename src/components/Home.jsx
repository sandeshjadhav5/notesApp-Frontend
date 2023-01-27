import React, { useState } from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Text,
  Heading,
  Image,
  Box,
  Flex,
  SimpleGrid,
  Button,
  useColorModeValue,
  useColorMode,
  Icon,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import notesLogo from "../svgs/threed.png";
const Home = () => {
  return (
    <Box
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1527345931282-806d3b11967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Heading textAlign="center" color="#4299E1">
        Notes App
      </Heading>
      <SimpleGrid minChildWidth="420px">
        <Box></Box>
        <Box mt="20">
          <Box m="10">
            <Link to="/register">
              <Button colorScheme="teal" variant="solid">
                Register Yourself & Get Started
              </Button>
            </Link>
          </Box>
          <Box m="10">
            <Link to="/login">
              <Button colorScheme="green" variant="solid">
                Already Have an Account ? Click Here to Sign In
              </Button>
            </Link>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Home;
