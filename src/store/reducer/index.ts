import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  data: {
    name: String;
  };
  loading: Boolean;
  error: any;
}

const initialState = {
  data: {
    name: ''
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    setDataUser(state, action) {
      state.data.name = action.payload
    },
    setLoading(state, action) {
      state.loading = action.payload
    },
    setErrorUser(state, action) {
      state.error = action.payload
    }
   },
});

export const { setDataUser, setLoading, setErrorUser } = userSlice.actions

export default userSlice.reducer;
