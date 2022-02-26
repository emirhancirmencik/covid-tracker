/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SearchIcon } from "@chakra-ui/icons";
import { nanoid } from "@reduxjs/toolkit";
import { countries } from "countries-list";

function CountryChart() {
  const countryConfirmed = useSelector((state) => state.case.confirmedMap);
  const countryDeath = useSelector((state) => state.case.deathsMap);
  const isCountryLoading = useSelector((state) => state.case.isCountryLoading);
  const isGlobalLoading = useSelector((state) => state.case.isGlobalLoading);
  const global = useSelector((state) => state.case.global);
  const [search, setSearch] = useState("");
  const values = Object.entries(countryConfirmed);
  values.forEach((arr) => {
    if (arr[0] !== undefined && countries[arr[0]] !== undefined) {
      arr.push(countries[arr[0]].name);
    }
  });

  values.unshift(["Global", { value: global.confirmed.value }, "Global"]);

  const [filtered, setFiltered] = useState(values);

  const [data, setData] = useState([
    {
      name: "Global",
      confirmed: global.confirmed.value,
      deaths: global.deaths.value,
      onList: true,
    },
  ]);

  function handleChange(e) {
    setSearch(e);
  }

  useEffect(() => {
    setFiltered(
      values.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search]);

  function handleClick(name, confirmed, deaths) {
    const index = data.findIndex((country) => country.name === name);
    if (index === -1) {
      const _temp = [...data];
      _temp.push({
        name: name,
        confirmed: confirmed,
        deaths: deaths,
      });

      _temp.sort((a, b) => {
        return b.confirmed - a.confirmed;
      });
      setData(_temp);
    } else {
      if (data.length === 1) {
        return;
      }
      const _temp = [...data];
      _temp.splice(index, 1);
      setData(_temp);
    }
  }

  return (
    <Box backgroundColor={"#EA5455"} w="100%" display="flex">
      {isGlobalLoading ? null : (
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          id="compare"
          flexWrap={"wrap"}
        >
          <Box w={["100%", "100%", "40%"]} padding={"3%"} id={"country"}>
            <Box
              w="100%"
              h="100%"
              height={"300px"}
              backgroundColor={"#2D4059"}
              boxShadow="#333 5px 5px;"
              marginBottom={50}
            >
              <Box w="100%" display={"flex"}>
                <Box mx={"auto"} my={"20px"}>
                  <InputGroup>
                    <InputRightElement
                      pointerEvents="none"
                      children={
                        <SearchIcon
                          color="white"
                          display={"flex"}
                          marginY={""}
                        />
                      }
                    />
                    <Input
                      display={"flex"}
                      type="text"
                      color={"#fff"}
                      _focus={{
                        outline: "none",
                      }}
                      placeholder="Search"
                      border={"none"}
                      background={"#162232"}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                  </InputGroup>
                </Box>
              </Box>
              <Box padding="30px" paddingTop={0} h={"225"}>
                <Box
                  h={"100%"}
                  background={"#162232"}
                  overflow="auto"
                  color={"#fff"}
                  boxShadow="#333 5px 5px;"
                >
                  <Table
                    variant={"striped"}
                    size="sm"
                    colorScheme={"whiteAlpha"}
                  >
                    <Thead>
                      <Tr>
                        <Th color={"#fff"}> Country</Th>
                        <Th color={"#fff"}>Confirmed</Th>
                        <Th color={"#fff"}>Deaths</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {filtered
                        .sort((a, b) => {
                          return b[1].value - a[1].value;
                        })
                        .map((country) => {
                          if (
                            (country[0] !== undefined &&
                              countries[country[0]] !== undefined) ||
                            country[0] === "Global"
                          ) {
                            return (
                              <Tr
                                cursor={"pointer"}
                                key={nanoid()}
                                onClick={() =>
                                  handleClick(
                                    country[0] === "Global"
                                      ? "Global"
                                      : countries[country[0]].name,
                                    country[0] === "Global"
                                      ? global.confirmed.value
                                      : countryConfirmed[country[0]].value,
                                    country[0] === "Global"
                                      ? global.deaths.value
                                      : countryDeath[country[0]].value
                                  )
                                }
                              >
                                <Td>
                                  {country[0] === "Global"
                                    ? "Global"
                                    : countries[country[0]].name}
                                </Td>
                                <Td>
                                  {country[0] === "Global"
                                    ? global.confirmed.value
                                    : countryConfirmed[country[0]].value}
                                </Td>
                                <Td>
                                  {country[0] === "Global"
                                    ? global.deaths.value
                                    : countryDeath[country[0]].value}
                                </Td>
                              </Tr>
                            );
                          } else {
                            return null;
                          }
                        })}
                    </Tbody>
                  </Table>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            w={["100%", "100%", "60%"]}
            paddingEnd={"3%"}
            paddingStart={"3%"}
            marginStart={"auto"}
            marginBottom={50}
            h={300}
            backgroundColor={"#EA5455"}
          >
            {isCountryLoading ? null : (
              <Box
                w="100%"
                height={"300px"}
                display={"flex"}
                backgroundColor={"#2D4059"}
                boxShadow="#333 5px 5px;"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={500}
                    data={data}
                    margin={{
                      top: 30,
                      right: 30,
                      left: 50,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="confirmed" name="Confirmed" fill="#F07B3F" />
                    <Bar dataKey="deaths" name="Deaths" fill="#EA5455" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CountryChart;
