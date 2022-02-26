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
import { Box, Icon, Link, Text } from "@chakra-ui/react";
import GlobalChart from "./components/charts/GlobalChart";
import CountryChart from "./components/charts/CountryChart";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const isCountryLoading = useSelector((state) => state.case.isCountryLoading);
  const isGlobalLoading = useSelector((state) => state.case.isGlobalLoading);
  const isDailyLoading = useSelector((state) => state.case.isDailyLoading);

  useEffect(() => {
    dispatch(getCountriesAsync());
    dispatch(getGlobalAsync());
    dispatch(getDailyAsync());
  }, []);

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
            <Text color={"gray"} mx={"auto"} display="flex" fontSize={20}>
              made with
              <Icon
                marginX="3px"
                marginTop="7px"
                color={"#EA5455"}
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                focusable="false"
                className="chakra-icon css-1i1i0ua"
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
              </Icon>{" "}
              by
              <Link
                ms={1}
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
