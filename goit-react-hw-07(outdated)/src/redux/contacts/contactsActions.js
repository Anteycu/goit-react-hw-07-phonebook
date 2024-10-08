import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const removeContactRequest = createAction("contacts/removeRequest");
const removeContactSuccess = createAction("contacts/removeSuccess");
const removeContactError = createAction("contacts/removeError");

// const toggleSameNameRequest = createAction("contacts/toggleSameNameRequest");
// const toggleSameNameSuccess = createAction("contacts/toggleSameNameSuccess");
// const toggleSameNameError = createAction("contacts/toggleSameNameError");

const changeFilter = createAction("contact/changeFilter", (filter) => ({
  payload: {
    filter,
  },
}));

export default {
  addContactSuccess,
  addContactRequest,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
};
