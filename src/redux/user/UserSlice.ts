import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  liked_houses: string[]; // Assuming liked_houses are house IDs (adjust for your data)
}

const initialState: UserState = {
  liked_houses: [],
};

const userSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    like: (state: UserState, action) => {
      state.liked_houses.push(action.payload); // Use push for appending to array
    },
    unlike: (state: UserState, action) => {
      const filteredHouses = state.liked_houses.filter(
        (house) => house !== action.payload
      );
      state.liked_houses = filteredHouses; // Update state with filtered array
    },
  },
});

export const { like, unlike } = userSlice.actions;

export default userSlice.reducer;
