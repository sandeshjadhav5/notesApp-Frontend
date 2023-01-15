import React from "react";

import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Heading color="purple">Notes App</Heading>
      <Link to="/register">
        <Heading fontSize="xl" color="red" mt="100">
          Register Yourself & Get Started
        </Heading>
      </Link>

      <Link to="/login">
        <Heading fontSize="xl" color="green" mt="100">
          Already Have an Account ? Click Here to Sign In
        </Heading>
      </Link>
    </div>
  );
};

export default Home;
