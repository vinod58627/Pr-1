import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state)=>{
           state.value+=1
        },
        decrement: (state)=>{
            state.value-=1
        },
        addby:(state, action)=>{
            state.value += action.payload
        },
        reset:(state)=>{
            state.value=0
        }
    }

})

export const { increment, decrement , addby, reset} = counterSlice.actions;
//export const selectCounter= (state)=>state.counter.value;
export default counterSlice.reducer;