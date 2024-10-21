import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";

const appStore = configureStore({
   reducer: { // global reducer of the main store
    cart: cartSlice // specific reducers are coming here via this slice
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}), 
})
export default appStore;