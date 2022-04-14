import { createSlice } from "@reduxjs/toolkit";

export const battelSlice = createSlice({
  name: "battel",
  initialState: {
    battelLog: [[], [], [], []],
    winner: "",
    loot: [],
    frame: 0,
    exists: false,
  },
  reducers: {
    uploadBattel: (state, action) => {
      state.battelLog = action.payload.battelLog;
      state.winner = action.payload.winner;
      state.loot = action.payload.loot;
      state.exists = true;
    },
    changeFrame: (state, action) => {
      if (state.frame < action.payload) {
        state.frame++;
      }
    },
    restStatus: (state) => {
      state.battelLog = [[], [], [], []];
      state.winner = "";
      state.loot = [];
      state.frame = 0;
      state.exists = false;
    },
  },
});

export const { uploadBattel, changeFrame, restStatus } = battelSlice.actions;
export default battelSlice.reducer;
