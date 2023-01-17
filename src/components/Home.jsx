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
import notesLogo from "../svgs/undraw_Taking_notes_re_bnaf.png";
const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 3000,
      backSpeed: 50,
      strings: [
        "Made by Sandesh Jadhav",
        "Start Creating Notes",
        "Full Stack App",
      ],
    });
  }, []);
  return (
    <div>
      <Heading mt="10" textAlign="center" color="purple">
        Notes App
      </Heading>

      <SimpleGrid minChildWidth="420px">
        <Box>
          <Image m="auto" src={notesLogo} />
        </Box>
        <Box mt="20">
          <Box m="10">
            <Link to="/register">
              <Button colorScheme="green" variant="solid">
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
      <Text
        m="auto"
        color="#4A5568"
        fontWeight="semibold"
        fontSize={{
          xl: "25",
          lg: "25",
          md: "25",
          sm: "20",
          base: "15",
        }}
        textAlign={{ sm: "center", md: "center", base: "center" }}
      >
        <span style={{ color: "#E53E3E" }} ref={textRef}></span>
      </Text>
    </div>
  );
};

export default Home;
