import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesAsync,
  getGlobalAsync,
} from "./redux/caseTracker/caseSlice";
import { countries as ct } from "countries-list";
import Maps from "./components/maps/Maps";
import Global from "./components/global/Global";
import Nav from "./components/Nav";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.case.countries);
  const isNamesLoading = useSelector((state) => state.case.isNamesLoading);
  const error = useSelector((state) => state.case.error);

  useEffect(() => {
    dispatch(getCountriesAsync());
    dispatch(getGlobalAsync());
  }, []);

  useEffect(() => {}, [countries]);

  useEffect(() => {
    console.log(countries);
  }, [isNamesLoading]);

  return (
    <div className="App">
      <Nav />
      <Global />
      <Maps />
    </div>
  );
}

export default App;
