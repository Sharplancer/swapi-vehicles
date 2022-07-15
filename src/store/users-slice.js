import { createSlice } from "@reduxjs/toolkit";

const API_URL = 'https://swapi.dev/api/people';

const initialState = {
  error: '',
  users: [],
  counts: 0,
  next: '',
  previous: '',
  status: '',
}

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    usersRequest(state, action) {
      state.error = '';
      state.status = 'pending';
    },
    usersRequestSuccess(state, action) {
      state.users = action.payload.results;
      state.count = action.payload.count;
      state.status = 'success';
    },
    usersRequestFailure(state, action) {
      state.error = action.payload;
      state.status = 'failure';
    }
  }
});


export default usersSlice