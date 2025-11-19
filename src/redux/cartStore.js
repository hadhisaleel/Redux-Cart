import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'
import whishlistSlice from './slices/whishlistSlice'
const cartStore =configureStore({
    reducer:{
          productReducer : productSlice,
          wishlistReducer : whishlistSlice
    }
})
export default cartStore