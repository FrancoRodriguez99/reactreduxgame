import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: 0,
    username: "",
  },
  reducers: {
    changeLang: (state) => {
      state.lang === 0 ? (state.lang = 1) : (state.lang = 0);
    },
    getlang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang, getlang } = langSlice.actions;
export default langSlice.reducer;
