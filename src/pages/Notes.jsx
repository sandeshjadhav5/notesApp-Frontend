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
    <div>
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
              <Box key={el._id} borderColor="red" border="2px">
                <Text>Title : {el.title}</Text>
                <Text>Category:{el.category}</Text>
                <Text>Note : {el.note}</Text>
              </Box>
            );
          })
        ) : (
          <h1>No Notes</h1>
        )}
      </SimpleGrid>
    </div>
  );
};

export default Notes;
