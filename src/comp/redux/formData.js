import {createSlice} from '@reduxjs/toolkit';
import Movie from '../../movie';


// createSlice({name:"",initial:{},reducer:{register:()=>{},login:()=>{}}})

const authSlice = createSlice({
    name:"Try",
    initialState:{
    arr: Movie
    },
    reducers:{
       create:(state,action)=>{
        state.arr.push(action.payload)
        },
        deletes:(state,action)=>{
            console.log(action.payload);
           const arr =  state.arr.filter((item)=>{
                  return item.id != action.payload
            })
            state.arr  = [...arr]
            console.log(state.arr);
        },
       edit:(state,action)=>{
        for (let i = 0; i <  state.arr.length; i++) {
            if ( state.arr[i].id == action.payload.id) {
                state.arr[i] = action.payload ;
            
            }
          }
        }
    }
});

export const { create, edit , deletes } = authSlice.actions;

export default authSlice.reducer