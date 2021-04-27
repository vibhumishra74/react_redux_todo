import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "data",
  initialState: {
    todos: [],
    singletodos: [],
  },
  reducers: {
    
    ADD_TODO: (state, action) => {
      state.todos.push(action.payload);
    },
    ADD_Single_TODO: (state, action) => {
      let pid = action.payload;
      console.log(`items found with>>//// ${pid}`);
      // state.todos = [ ...state.todos.filter((todo) => todo.id !== action.payload),
      // { task: action.payload.message, id: action.payload.id }];
      state.singletodos.push(action.payload);
    },
    DELETE_TODO: (state, action) => {
      state.todos = [
        ...state.todos.filter((todo) => todo.id !== action.payload),
      ];
    },
    UPDATE_TODO: (state, action) => {
      let alldata = [
        ...state.todos.filter((todo) => todo.id !== action.payload.id),
        { task: action.payload.message, id: action.payload.id },
      ];
      state.todos = alldata;
      let pid = action.payload.message;
      console.log(`items found with ${pid}`);
    },
  },
});

export const { ADD_TODO, DELETE_TODO, UPDATE_TODO,ADD_Single_TODO } = appSlice.actions;
export const selectdata = (state) => state.todos;
export const Single = (state) => state.singletodos;

export default appSlice.reducer;
