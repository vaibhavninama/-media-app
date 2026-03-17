 import { configureStore } from "@reduxjs/toolkit";
 import searchReducer from "./searchSlice";
 import collectionReducer from "./collectionSlice";

 const Store = configureStore({
    reducer: {
       search:searchReducer,
       collection:collectionReducer
    },
});

export default Store