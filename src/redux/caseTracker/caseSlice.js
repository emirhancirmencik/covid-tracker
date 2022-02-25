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

export const getGlobalAsync = createAsyncThunk(
  "case/getGlobalAsync",
  async () => {
    const res = await axios("https://covid19.mathdro.id/api");
    return res.data;
  }
);

const caseSlice = createSlice({
  name: "case",
  initialState: {
    values: "asdasd",
    global: {},
    confirmed: [],
    countries: [],
    confirmedMap: {},
    deathsMap: {},
    isNamesLoading: true,
    isGlobalLoading: true,
    date: "",
    error: null,
  },
  reducer: {},
  extraReducers: {
    //Global
    [getGlobalAsync.pending]: (state, action) => {
      state.isGlobalLoading = true;
    },
    [getGlobalAsync.fulfilled]: (state, action) => {
      state.global = action.payload;
      let d = new Date(state.global.lastUpdate);
      state.global.date = d.toLocaleString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      state.isGlobalLoading = false;
    },
    [getGlobalAsync.rejected]: (state, action) => {
      state.isGlobalLoading = false;
    },

    // Country Datas Total

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
          state.confirmedMap[e.iso2] = { value: e.confirmed };
          state.deathsMap[e.iso2] = { value: e.deaths };
        } else {
          state.countries[index].confirmed += e.confirmed;
          state.countries[index].deaths += e.deaths;
          state.confirmedMap[e.iso2].value += e.confirmed;
          state.deathsMap[e.iso2].value += e.deaths;
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
