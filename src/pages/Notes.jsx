import React from "react";
import axios from "axios";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Notes = () => {
  const [data, setData] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();
  const [mode, setMode] = useState(true);

  const changeMode = () => {
    setMode(!mode);
    toggleColorMode();
  };
  useEffect(() => {
    axios
      .get(`https://better-gold-grasshopper.cyclic.app/notes`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <Box>
      <Flex w="95%" m="auto" mb="10">
        <Heading ml="20" w="100%">
          Notes
        </Heading>
        <Button
          m="2"
          className="colorModeSwap"
          size="sm"
          onClick={() => {
            changeMode();
          }}
        >
          {!mode && <SunIcon />}
          {mode && <MoonIcon />}
        </Button>
      </Flex>

      <SimpleGrid minChildWidth="220px" gap="30" width="80%" margin="auto">
        {data ? (
          data.map((el) => {
            return (
              <Box
                key={el._id}
                borderColor="red"
                border="1px"
                borderRadius={10}
                boxShadow="xl"
                bg={mode ? "#f7fafc" : "#A0AEC0"}
                p="6"
                rounded="md"
              >
                <Text textAlign="left" color="#D53F8C" fontWeight="semibold">
                  Title : {el.title}
                </Text>
                <Text textAlign="left" color="#805AD5" fontWeight="semibold">
                  Category : {el.category}
                </Text>
                <Text textAlign="left" fontWeight="semibold">
                  Note : {el.note}
                </Text>
              </Box>
            );
          })
        ) : (
          <h1>No Notes</h1>
        )}
      </SimpleGrid>
      <Link to="/createnote">
        <Button bg="#38A169" mt="5">
          Create a Note
        </Button>
      </Link>
    </Box>
  );
};

export default Notes;
