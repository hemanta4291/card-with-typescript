

import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
    id:number,
    name:string
}

type InitialState ={
    loading:boolean,
    user:User[],
    error:string
}

const initialState:InitialState = {
    loading:false,
    user:[],
    error:''
}


export const fetchUsers = createAsyncThunk('user/fetchUsers', async()=>{
    let result = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(result.data)
    return result.data
})

// export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
//     return axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.data)
//   })


const userSliice = createSlice({
    name:'users',
    initialState,
    reducers:{
        increment:()=>{
            console.log("increment")
        },
        incrementBySaga:()=>{
            console.log("increment by saga")
        },
        incrementBySagaSuccess:()=>{
            console.log("increment by saga success done ============")
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading =true
        })
        .addCase(fetchUsers.fulfilled,(state,action:PayloadAction<User[]>)=>{
            state.loading =false
            state.user = action.payload
            state.error = ''
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading =false
            state.user = []
            state.error = action.error.message || 'something wrang.........'
        })
      
    }
})

export const {increment,incrementBySaga,incrementBySagaSuccess} = userSliice.actions
export default userSliice.reducer

