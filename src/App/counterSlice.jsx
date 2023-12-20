/*
!Hem reducer'ları
!Hem action'ları 
farklı dosyalarda tutmak yerine 
*slice dosyasında oluşturacağız
? SLİCE KURULUM
* 1- createSlice methodu import et ama önce redu-toolkit indir.
* 2- gerekli parametreleri tanımla.Bunlar:
   * name:slice ismi
   * initialState:başlangıç state'ı
   * reducer{}: aksiyonları ve store'da yapılacakları etkiyi tanımla.
   *
*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };
const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increase: (state) => {
      //action bunlar,switch case yok artık
      state.count++;
    },
    decrease: (state) => {
      //action bunlar,switch case yok artık
      state.count -= 1;
    },
    //
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});
// actionlar export edilir.
export const { increase, decrease, setCount } = counterSlice.actions;
//createSlice'ın oluşturduğu reducer'ı export etme
export default counterSlice.reducer;
