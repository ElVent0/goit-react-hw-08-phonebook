import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const getIsContactExist = state => Boolean(state.contacts.items.length);

export const selectActiveContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    console.log(111, contacts, filter);
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
