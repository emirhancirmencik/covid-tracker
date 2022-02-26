/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesAsync,
  getGlobalAsync,
  getDailyAsync,
} from "./redux/caseTracker/caseSlice";
import Maps from "./components/maps/Maps";
import Global from "./components/global/Global";
import Nav from "./components/Nav";
import { Box, Link, Text } from "@chakra-ui/react";
import GlobalChart from "./components/charts/GlobalChart";
import CountryChart from "./components/charts/CountryChart";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.case.countries);
  const isCountryLoading = useSelector((state) => state.case.isCountryLoading);
  const isGlobalLoading = useSelector((state) => state.case.isGlobalLoading);
  const isDailyLoading = useSelector((state) => state.case.isDailyLoading);
  const error = useSelector((state) => state.case.error);

  useEffect(() => {
    dispatch(getCountriesAsync());
    dispatch(getGlobalAsync());
    dispatch(getDailyAsync());
  }, []);

  useEffect(() => {
    console.log(countries);
  }, [isCountryLoading]);

  return (
    <Box className="App">
      {isCountryLoading || isGlobalLoading || isDailyLoading ? (
        <Loading />
      ) : (
        <>
          <Box w="100%" display="flex" flexWrap="wrap">
            <Global />
            <Nav />
          </Box>
          <Box w="100%" display="flex">
            <GlobalChart />
          </Box>
          <Box w="100%" display="flex">
            <Maps />
          </Box>
          <Box w="100%" display="flex">
            <CountryChart />
          </Box>
          <Box w="100%" marginTop={50} marginBottom={50} display="flex">
            <Text color={"gray"} textAlign={"center"} mx={"auto"}>
              made with love by{" "}
              <Link
                _hover={{ textDecoration: "none" }}
                textDecoration={"none"}
                color={"#000"}
                href={"https://github.com/emirhancirmencik"}
              >
                emirhan cirmencik{" "}
              </Link>
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
}

export default App;
