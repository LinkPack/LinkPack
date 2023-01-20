import * as types from '../constants/actionTypes.js';

export const addEntryActionCreator = (label: String, link: String, keyId: String) => ({
  type: types.ADD_ENTRY,
  payload: {
    label,
    link,
    keyId
  }
});

export const generateLinkPackActionCreator = () => ({
  type: types.GENERATE_LINKPACK
});

export const getEntriesActionCreator = (receivedEntries: Object) => ({
  type: types.GET_ENTRIES,
  payload: {
    receivedEntries
  }
})
export const deleteEntryActionCreator = (keyId: String) => ({
  type: types.DELETE_ENTRY,
  payload: keyId
});
