import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice = createSlice({
    name:'whishlist',
    initialState:[],
    reducers:{
        // add to whish list - addtowihilist btn clicked in view
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        }
        // remove wishlist
    }
})
export const {addToWishlist} = whishlistSlice.actions
export default whishlistSlice.reducer