import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};
const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        onDelete: (state, action) => {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        },
    },
});

export const { addContact, onDelete } = slice.actions;
export const contactsReducer = slice.reducer;
