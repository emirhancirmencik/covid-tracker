/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";
import { Box, Text } from "@chakra-ui/react";

function MapContainer({ data, mapType }) {
  const isCountryLoading = useSelector((state) => state.case.isCountryLoading);
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
  }, [isCountryLoading]);

  return (
    <Box
      w={["100%", "100%", "calc((50%) - 2.5rem)"]}
      marginEnd={mapType === "confirmed" ? [0, 0, "1.25rem"] : 0}
      marginStart={mapType === "confirmed" ? 0 : [0, 0, "1.25rem"]}
      marginBottom={mapType === "confirmed" ? [50, 50, 0] : 0}
    >
      {isCountryLoading ? (
        "loading..."
      ) : (
        <>
          <Box w={"100%"} mx="auto" id={mapType}></Box>
          <Box w={"100%"}>
            <Text
              marginTop={"5"}
              fontWeight="900"
              fontSize={20}
              textAlign={"center"}
              textColor="#FEFEFE"
            >
              {mapType[0].toUpperCase() + mapType.slice(1)}{" "}
              {mapType === "confirmed" ? "Cases " : null}Map
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
}

export default MapContainer;
