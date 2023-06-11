import { createStore } from 'redux';
import { createSlice, configureStore} from "@reduxjs/toolkit";
import counterSliceReducer from './counter-slice';
import authSlice from './auth-slice';

const store = configureStore({
  // reducer: counterSlice.reducer
  // Case when we have more than one reducer object
  reducer: { counter: counterSliceReducer, auth: authSlice.reducer }
});



// use redux
// const counterReducer = ( state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }
//
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }
//
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }
//
//   if(action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     };
//   }
//   return state;
// };
//
// const store = createStore(counterReducer);

export default store;