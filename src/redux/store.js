import { configureStore } from "@reduxjs/toolkit";
import BillReducer from "./index";

export default configureStore({
    reducer:{
        bill:BillReducer
    }
})