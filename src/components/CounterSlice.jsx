import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "count",
    initialState: { counter: 0 },
    reducers: {
        increase(state, action) {
            state.counter++;
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload
        }
    }

})
 const store = configureStore({
    reducer: {
        count: counterSlice.reducer
    }
})
export default store;
export const counterActions = counterSlice.actions;