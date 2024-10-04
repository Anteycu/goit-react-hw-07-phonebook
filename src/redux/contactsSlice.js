import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: {},
  // reducers: {
  //   addContact: (state, action) => {
  //     return { ...state, items: [...state.items, action.payload] };
  //   },
  //   deleteContact: (state, action) => {
  //     return {
  //       ...state,
  //       items: state.items.filter((contact) => contact.id !== action.payload),
  //     };
  //   },
  // },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;