import { createSlice } from "@reduxjs/toolkit";

export const userSlice1 = createSlice({
    name: "counter",
    initialState: {value:0},
    reducers: {
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        }
    }

})

export const { increment, decrement } = userSlice1.actions;

export default userSlice1.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice1 = createSlice({
//     name: "user1",
//     initialState: {name: "Arman" , age: "20"},
//     reducers: {
//         updatename: (state)=>{
//             state.name = "Arman Alam a full stack developer"
//         },
//         updateage: (state, action)=>{
//             state.age = action.payload
//         }
//     }

// })

// export const { updatename, updateage } = userSlice1.actions;

// export default userSlice1.reducer;