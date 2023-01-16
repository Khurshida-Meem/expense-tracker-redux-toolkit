import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  type: "",
};

const filterSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    searched: (state, action) => {
      state.search = action.payload;
    },
    selectedType: (state, action) => {
        state.type = action.payload;
    }
  },
});

export default filterSlice.reducer;
export const { searched, selectedType } =
  filterSlice.actions;