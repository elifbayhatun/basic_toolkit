import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "navbar düzenlensin",
      author: "Elif",
      assigned_to: "Ali",
      end_date: "2023-07-25",
    },
    {
      id: 2,
      title: "Footer Animasyon",
      author: "Ahmet",
      assigned_to: "Ayşe",
      end_date: "2023-06-11",
    },
  ],
};

const crudSlice = createSlice({
  name: "crudSlice",
  initialState,
  reducer: {
    addTask: (state, action) => {
      if (action.payload.id) {
        state.tasks.findIndex(() => i.id === action.payload.id);

        state.tasks[index] = action.payload;
        return;
      }

      action.payload.id = new Date().getTime();
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: (state, action) => {
      //silinecek elemanın dizideki sırasını bulma
      state.tasks.findIndex((i) => i.id === action.payload);
      //diziden sırasını bildiğimşz elemanı çıkarma
      state.tasks.splice(index, 1);
    },
  },
});
export const { addTask, removeTask } = crudSlice.actions;

export default crudSlice.reducer;
