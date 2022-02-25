import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Nav() {
  return (
    <Box w={"100%"} h={75} bgColor={"#EA5455"} d="flex">
      <Box
        marginLeft={"40%"}
        w={"20%"}
        d="flex"
        justifyContent={"space-between"}
      >
        <Box
          w={"20%"}
          h={75 / 2}
          bgColor={"#2D4059"}
          borderTopRadius={15}
          d="flex"
          justifyContent={"center"}
          mt="auto"
        >
          <Text fontWeight="700">a</Text>
        </Box>
        <Box
          w={"20%"}
          h={75 / 2}
          bgColor={"#2D4059"}
          borderTopRadius={15}
          d="flex"
          justifyContent={"center"}
          mt="auto"
        >
          <Text fontWeight="700">a</Text>
        </Box>
        <Box
          w={"20%"}
          h={75 / 2}
          bgColor={"#2D4059"}
          borderTopRadius={15}
          d="flex"
          justifyContent={"center"}
          mt="auto"
        >
          <Text fontWeight="700">a</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Nav;
