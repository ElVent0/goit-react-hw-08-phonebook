import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from './../auth/authOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.name === action.payload.name
      );
      state.items.splice(index, 1);
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.isLoading = false;
      state.error = null;
      state.filter = '';
    },
  },
});

export const { changeFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
