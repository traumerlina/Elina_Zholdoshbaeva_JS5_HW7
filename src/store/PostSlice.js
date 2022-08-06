import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
    'getUser',
    async (id, {rejectWithValue, dispatch}) => {
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()

        dispatch(inputAction(data))
       
    }
)

const postSlice = createSlice ({
    name: 'postSlice',
    initialState: {
        input: 0
    },
    reducers: {
        inputAction(state,action) {
            state.input = action.payload
        }

    }
})

export const {inputAction} = postSlice.actions;

export default postSlice.reducer;