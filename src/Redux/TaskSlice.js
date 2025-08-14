import { createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
    name: 'task',
    initialState: {
        newTask: null,
        done: null,
        due: null,
    },
    reducers: {
        newTask: (state, action) => {
            state.push = action
        },
        done: (state) => {
            state.value = true
        },
        due: (state) => {
            state.value = true
        }
    }
})

export const { newTask, done, due } = TaskSlice.actions;
export default TaskSlice.reducer;