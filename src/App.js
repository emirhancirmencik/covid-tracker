import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesAsync,
  getGlobalAsync,
  getDailyAsync,
} from "./redux/caseTracker/caseSlice";
import { countries as ct } from "countries-list";
import Maps from "./components/maps/Maps";
import Global from "./components/global/Global";
import Nav from "./components/Nav";
import { Box } from "@chakra-ui/react";
import GlobalChart from "./components/GlobalChart";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.case.countries);
  const isNamesLoading = useSelector((state) => state.case.isNamesLoading);
  const error = useSelector((state) => state.case.error);

  useEffect(() => {
    dispatch(getCountriesAsync());
    dispatch(getGlobalAsync());
    dispatch(getDailyAsync());
  }, []);

  useEffect(() => {
    console.log(countries);
  }, [isNamesLoading]);

  return (
    <Box className="App">
      <Box w="100%" display="flex">
        <Global />
      </Box>
      <Box w="100%" display="flex">
        <GlobalChart />
      </Box>
      <Box w="100%" display="flex" marginStart={"auto"}>
        <Maps />
      </Box>
    </Box>
  );
}

export default App;
