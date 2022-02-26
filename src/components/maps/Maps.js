import React from "react";
import { useSelector } from "react-redux";
import MapContainer from "./MapContainer";
import { Box } from "@chakra-ui/react";

function Maps() {
  const confirmed = useSelector((state) => state.case.confirmedMap);
  const deathValues = useSelector((state) => state.case.deathsMap);
  return (
    <Box backgroundColor={"#EA5455"} w="100%" display="flex">
      <Box w="100%">
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <MapContainer data={confirmed} mapType={"confirmed"} />
          <MapContainer data={deathValues} mapType={"deaths"} />
        </Box>
      </Box>
    </Box>
  );
}

export default Maps;
