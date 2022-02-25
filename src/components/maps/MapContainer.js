import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";
import { Box, Text } from "@chakra-ui/react";

function MapContainer({ data, mapType }) {
  const countries = useSelector((state) => state.case.countries);
  const isNamesLoading = useSelector((state) => state.case.isNamesLoading);
  const map = useRef(null);
  useEffect(() => {
    if (document.getElementById(mapType) === null) {
      return;
    }

    if (map.current) {
      return;
    }

    console.log(data);
    map.current = new svgMap({
      targetElementID: mapType,
      colorMin: mapType === "deaths" ? "#FFE5D9" : "#FFE5D9",
      colorMax: mapType === "deaths" ? "#EA5455" : "#F07B3F",
      data: {
        data: {
          value: {
            name: mapType === "confirmed" ? "Total Cases" : "Total Deaths",
            thousandSeparator: ",",
          },
        },
        applyData: "value",
        values: data,
      },
    });
    console.log(data);
    console.log(map.current);
  }, [isNamesLoading]);

  return (
    <Box w="100%">
      {isNamesLoading ? (
        "loading..."
      ) : (
        <>
          <Box
            w={"90%"}
            padding={"5%"}
            mx="auto"
            paddingStart={mapType === "confirmed" ? "5%" : "2.5%"}
            paddingEnd={mapType === "deaths" ? "5%" : "2.5%"}
            id={mapType}
          ></Box>
          <Box w={"100%"}>
            <Text
              marginTop={"0"}
              fontWeight="500"
              fontSize={14}
              textAlign={"center"}
              textColor="white"
            >
              {mapType[0].toUpperCase() + mapType.slice(1)}
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
}

export default MapContainer;
