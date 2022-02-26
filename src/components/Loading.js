import React from "react";
import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import loading from "../assets/loading.json";

function Loading() {
  return (
    <Box w={"100vw"} h={"100vh"} d={"flex"} justifyContent={"center"}>
      <Box w="250px" my="auto">
        <Lottie animationData={loading} />
      </Box>
    </Box>
  );
}

export default Loading;
