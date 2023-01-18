import * as types from '../constants/actionTypes';

export const addEntryActionCreator = (label, link, key) => ({
  type: types.ADD_ENTRY,
  payload: {
    label,
    link,
    key
  }
});

export const generateLinkPackActionCreator = () => ({
  type: types.GENERATE_LINKPACK
});

export const getEntriesActionCreator = (receivedEntries) => ({
  type: types.GET_ENTRIES,
  payload: {
    receivedEntries
  }
})