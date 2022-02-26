import React from "react";
import { Box, Link } from "@chakra-ui/react";

function Nav() {
  return (
    <Box
      w={"50%"}
      marginTop={"auto"}
      marginRight={50}
      height={75}
      marginBottom={50}
      bgColor={"#EA5455"}
      boxShadow={"#333 5px 5px"}
      d="flex"
    >
      <Box
        marginLeft={"5%"}
        w={"90%"}
        d="flex"
        justifyContent={"space-between"}
      >
        <Link
          w={"30%"}
          h={75 / 2}
          d="flex"
          fontWeight="700"
          marginTop={3}
          href="#global"
          textDecoration={"none"}
          color={"#000"}
          justifyContent={"center"}
          boxShadow={"#333 5px 5px"}
          _hover={{
            boxShadow: "#000 5px 5px",
          }}
          bgColor={"#FFF"}
        >
          <Box marginY="auto">Global Trend</Box>
        </Link>
        <Link
          w={"30%"}
          h={75 / 2}
          d="flex"
          fontWeight="700"
          marginTop={3}
          href="#maps"
          textDecoration={"none"}
          color={"#000"}
          justifyContent={"center"}
          boxShadow={"#333 5px 5px"}
          _hover={{
            boxShadow: "#000 5px 5px",
          }}
          bgColor={"#FFF"}
        >
          <Box marginY="auto">Maps</Box>
        </Link>
        <Link
          w={"30%"}
          h={75 / 2}
          d="flex"
          fontWeight="700"
          marginTop={3}
          href="#compare"
          textDecoration={"none"}
          color={"#000"}
          justifyContent={"center"}
          boxShadow={"#333 5px 5px"}
          _hover={{
            boxShadow: "#000 5px 5px",
          }}
          bgColor={"#FFF"}
        >
          <Box marginY="auto">Data Compare</Box>
        </Link>
      </Box>
    </Box>
  );
}

export default Nav;
