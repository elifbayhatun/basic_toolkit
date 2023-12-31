import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import crudReducer from "./crudSlice";
export const store = configureStore({
  //export default configureStore () da yazılabilir sadece.hemde daha az kod

  reducer: { counterReducer, crudReducer },
});

//configureStore parametre olarak obje alır.
//obje içine reducer tanımla.
//birden fazla reducer olduğunda reducerları obje içerisina alırız.
