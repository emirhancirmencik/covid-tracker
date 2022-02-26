import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";

function Global() {
  const globalData = useSelector((state) => state.case.global);
  const isGlobalLoading = useSelector((state) => state.case.isGlobalLoading);
  const date = useSelector((state) => state.case.global.date);

  return (
    <Box w={["100%", "100%", "40%"]} marginTop={"auto"}>
      {isGlobalLoading ? null : (
        <Box w="100%" padding={50} flexWrap="wrap">
          <Box w={"100%"}>
            <Text fontWeight="900" fontSize={30} textColor="#EA5455">
              Covid 19
            </Text>
          </Box>
          <Box w={"100%"} marginLeft="10px">
            <Text fontWeight="900" fontSize={30} textColor="#FFD460">
              Global Trend
            </Text>
          </Box>
          <Box
            w={["100%", "100%", "75%"]}
            display="flex"
            marginLeft="10px"
            boxShadow={"#333 5px 5px"}
            h={"60px"}
          >
            <Box
              w="calc(100%)"
              padding={2}
              textAlign="center"
              bgColor={"#F07B3F"}
            >
              <Text fontWeight="700" my="auto">
                Infected
              </Text>
              <Text>
                <CountUp
                  start={0}
                  end={globalData.confirmed.value}
                  separator=","
                />
              </Text>
            </Box>
            <Box
              w="calc(100%)"
              padding={2}
              textAlign="center"
              bgColor={"#EA5455"}
            >
              <Text fontWeight="700">Deaths</Text>
              <Text>
                <CountUp
                  start={0}
                  end={globalData.deaths.value}
                  separator=","
                />
              </Text>
            </Box>
          </Box>

          <Box w={"75%"}>
            <Text
              fontWeight="300"
              fontSize={14}
              textAlign={"end"}
              textColor="white"
              marginTop="10px"
            >
              Last Updated at: {date}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Global;
