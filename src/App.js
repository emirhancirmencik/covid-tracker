import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesAsync } from "./redux/caseTracker/caseSlice";
import { countries as ct } from "countries-list";
import ConfirmedMap from "./components/maps/ConfirmedMap";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.case.countries);
  const isNamesLoading = useSelector((state) => state.case.isNamesLoading);
  const error = useSelector((state) => state.case.error);

  useEffect(() => {
    dispatch(getCountriesAsync());
  }, []);

  useEffect(() => {
    console.log(countries);
  }, [isNamesLoading]);

  return (
    <div className="App">
      <ConfirmedMap />
    </div>
  );
}

export default App;
