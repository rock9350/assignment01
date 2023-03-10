import { createSlice } from "@reduxjs/toolkit";

const formData = createSlice({
    name:"data",
    initialState:{
        data:{
        Name : "",
        Link : "",
        Genres :""
        }
    },
    reducers:{
        Create:(state)=>{

        }
    }
})