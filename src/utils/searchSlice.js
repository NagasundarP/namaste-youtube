import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cache: {},
    results: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      Object.assign(state.cache, action.payload);
    },
    searchResults: (state, action) => {
      Object.assign(state.results, action.payload);
    },
  },
});

export const { cacheResults, searchResults } = searchSlice.actions;
export default searchSlice.reducer;
