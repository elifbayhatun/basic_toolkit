# REDUX TOOLKİT FAYDALARI

- Redux'a göre daha az kod içerir.
- Dahili olaral `thunk` yanında geliyor.
- Devtools eklentisi sayesinde proje geliştirirken `store'u` / `reducer` / aksiyonları izleyebiliyoruz.
- veri yönetimi daha kolay olacak.

# KURULUM

- KÜTÜPHANELER
  -- @reduxjs/toolkit
  -- react-redux

# KURULUM ADIMLARI

--SLİCE OLUŞTUR.
1-SLİCE:action+reducer demek

---

// ! store.js oluştur.
--`createStore` yerine `configureStore` olacak.
--`configureStore` içinde thunk tanımlı olarak gelir.Eksta kütüphane indirmeden `THUNK` kullanabilirz.
--` REDUCERLARI` kendi içeisinde otomatik birleştirir.
-- reduxta store.js de `combineReducer` reducerları birleştiriyordu.Şimdi onu `redux-toolkit` kendi `otamatik` yapacak.
--Reducerları store'a tanıt
--store export et.
--store'u projeye main.js de tanıt(provider)
# basic_redux-toolkit
# basic_redux-toolkit
