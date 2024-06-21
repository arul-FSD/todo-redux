import { createSlice } from '@reduxjs/toolkit'
import { findIndexById } from '../utils/helper';

export const todo = createSlice({
    name: 'todo',

    initialState: [
        {
            id: 1,
            title: "Learn Redux",
            description: "Learn Redux"
        },

        {
            id: 2,
            title: "Learn React",
            description: "Learn React"
        },
    ],

    reducers:{
        addTodo:(state, action) =>{
            console.log('state:',state, 'action:', action)
            action.payload.id = state.length + 1;
            state.push(action.payload)
        },

        editToDo:(state, action) => {
            console.log('edit:',state, action)
            const index = findIndexById(state, +action.payload.id);
            console.log(index)
            state.splice(index, 1, action.payload)
        }
    }

})

export const {addTodo, editToDo} = todo.actions;

export default todo.reducer