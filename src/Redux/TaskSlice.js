import { createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
    name: 'task',
    initialState: {
        done: null,
        due: null
    },
    reducers: {
        done: (state) => {
            state.value = true
        },
        due: (state) => {
            state.value = true
        }
    }
})

export const { done, due } = TaskSlice.actions;
export default TaskSlice.reducer;