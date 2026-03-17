import { createSlice } from "@reduxjs/toolkit";
 import {  toast,Bounce } from 'react-toastify';

const initialState = {
    item: JSON.parse(localStorage.getItem('collections')) || []
}

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers:{
            addCollection:(state,action)=>{
                const isExist = state.item.find((data)=>{
                    return data.id === action.payload.id
                })
                if(!isExist){
                state.item.push(action.payload)
              localStorage.setItem('collections',JSON.stringify(state.item))
        }
     },
         removeCollection:(state,action)=>{
            state.item = state.item.filter((data)=>data.id !== action.payload.id)
            localStorage.setItem('collections',JSON.stringify(state.item))
         },
         addToter:()=>{

             toast.success(' Add successful to collections!', {
                 position: "top-center",
                 autoClose: 1000,
                 hideProgressBar: false,
                 closeOnClick: false,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: "dark",
                 transition: Bounce,
             });
         },
         removeToter:()=>{
             toast.success(' Removed successfully!', {
                 position: "top-center",
                 autoClose: 1000,
                 hideProgressBar: false,
                 closeOnClick: false,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: "dark",
                 transition: Bounce,
             });
         },
         clearCollection:(state,action)=>{
            state.item=[]
            localStorage.removeItem('collections')
         }

        }
    }
)

export const {addCollection,removeCollection,addToter,removeToter,clearCollection} = collectionSlice.actions
export default collectionSlice.reducer