import { createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: Date.now(),
                name: action.payload.name,
                details: action.payload.details,
                deadline: action.payload.deadline,
                done: false
            })
        }
    }
})

export const { done, due } = TaskSlice.actions;
export default TaskSlice.reducer;