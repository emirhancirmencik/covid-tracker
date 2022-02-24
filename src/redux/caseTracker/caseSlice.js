import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { countries } from "countries-list";

export const getCountriesAsync = createAsyncThunk(
  "case/getCountriesAsync",
  async () => {
    const res = await axios("https://covid19.mathdro.id/api/confirmed");
    return res.data;
  }
);

const caseSlice = createSlice({
  name: "case",
  initialState: {
    values: "asdasd",
    confirmed: [],
    countries: [],
    confirmedValues: {},
    isNamesLoading: true,
    isDataLoading: true,
    error: null,
  },
  reducer: {},
  extraReducers: {
    // Country Names
    [getCountriesAsync.pending]: (state, action) => {
      state.isNamesLoading = true;
    },
    [getCountriesAsync.fulfilled]: (state, action) => {
      state.confirmed = action.payload;
      state.confirmed.forEach((e) => {
        const index = state.countries.findIndex(
          (country) => country.name === e.countryRegion
        );
        if (index === -1) {
          state.countries.push({
            name: e.countryRegion,
            confirmed: e.confirmed,
            deaths: e.deaths,
            iso2: e.iso2,
          });
          state.confirmedValues[e.iso2] = { confirmed: e.confirmed };
        } else {
          state.countries[index].confirmed += e.confirmed;
          state.countries[index].deaths += e.deaths;
          state.confirmedValues[e.iso2].confirmed += e.confirmed;
          state.confirmedValues[e.iso2].deaths += e.deaths;
        }
      });
      state.isNamesLoading = false;
    },
    [getCountriesAsync.rejected]: (state, action) => {
      state.error = action.payload;
      state.isNamesLoading = false;
    },
  },
});

export default caseSlice.reducer;
