import React from "react";
import { Box } from "@chakra-ui/react";

function Loading() {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      d={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Box>Loading</Box>
    </Box>
  );
}

export default Loading;
