import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./users-slice";
import vehiclesSlice from "./vehicle-slice";

const combinedReducer = combineReducers({
  users: userSlice.reducer,
  vehicles: vehiclesSlice.reducer
});

const rootReducer = (state, action) => { 
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;