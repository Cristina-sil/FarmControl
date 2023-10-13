import { createSlice } from "@reduxjs/toolkit";

export interface mammalsState {
  id: Number,
  type: String,
  race: String,
  sex: Number,
  weight: Number,
  dateWeight: String,
  birthDate: String,
  purchase: Boolean,
  dateAcquisition: String,
  localAcquisition: String,
  father: Number,
  mother: Number,
  raceFather: String,
  raceMother: String,
  inmate: Boolean,
}

export interface mammalsListState {
   mammals: Array<mammalsState>,
}

const initialState = {
  data: {
    mammals: []
  },
  loading: false,
  error: null,
};

const mammalsSlice = createSlice({
  name: 'MAMMALS',
  initialState,
  reducers: {
    setMammals(state, action) {
      state.data.mammals = action.payload
    },
    setLoadingMammals(state, action) {
      state.loading = action.payload
    },
    setErrorMammals(state, action) {
      state.error = action.payload
    }
  }
})

export const {setMammals, setLoadingMammals, setErrorMammals} = mammalsSlice.actions

export default mammalsSlice.reducer;