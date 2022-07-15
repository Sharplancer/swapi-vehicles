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

const userActions = vehiclesSlice.actions;

export {
  userActions
}

export const fetchVehicles = (urls) => {
  return async (dispatch) => {
    dispatch(userActions.vehiclesRequest());
    try {
      urls.map(async (url) => {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message || response.statusText);
        }
        dispatch(userActions.vehiclesRequestSuccess(responseData));
      })
    } catch (error) {
      dispatch(userActions.vehiclesRequestFailure(error.message))
    }
  }
}

export default vehiclesSlice