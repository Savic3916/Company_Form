import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        formData: [],
    },
    reducers: {
        addToForm: (state, action) => {
            state.formData = action.payload;
        }
    }
});

export const {addToForm} = formSlice.actions;
export default formSlice.reducer;