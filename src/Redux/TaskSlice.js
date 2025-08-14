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
        },
        doneTask: (state, action) => {
            const task = state.find(t => t.id === action.payload);
            if (task) {
                task.done = !task.done;
            }
        },
        deleteTask: (state, action) => {
            return state.filter(t => t.id !== action.payload)
        }
    }
})

export const { addTask, doneTask, deleteTask } = TaskSlice.actions;
export default TaskSlice.reducer;