import React from "react";
import axios from "axios";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
const Notes = () => {
  const [data, setData] = useState([]);

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
      <Heading mb="20">Notes</Heading>
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
