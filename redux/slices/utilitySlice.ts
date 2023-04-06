import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  utilitySearch: "",
  showSearch: false,
};
export const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    setUtilitySearch: (state: any, action: any) => {
      state.utilitySearch = action.payload;
    },
    // setShowSearch:
  },
});
export const { setUtilitySearch } = utilitySlice.actions;
export default utilitySlice.reducer;
