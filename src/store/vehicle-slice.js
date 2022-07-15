import { createSlice } from "@reduxjs/toolkit";

const API_URL = 'https://swapi.dev/api/vehicles';

const initialState = {
  error: '',
  vehicles: [],
  counts: 0,
  status: '',
}

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: initialState,
  reducers: {
    initVehicles(state) {
      state.vehicles = []
    },
    vehiclesRequest(state, action) {
      state.error = '';
      state.status = 'pending';
    },
    vehiclesRequestSuccess(state, action) {
      state.vehicles.push(action.payload);
      state.status = 'success';
    },
    vehiclesRequestFailure(state, action) {
      state.error = action.payload;
      state.status = 'failure';
    }
  }
});


export default vehiclesSlice