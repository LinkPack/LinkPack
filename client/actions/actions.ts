import * as types from '../constants/actionTypes.js';

export const addEntryActionCreator = (label: string, link: string, keyId: string) => ({
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

export const getEntriesActionCreator = (receivedEntries: object) => ({
  type: types.GET_ENTRIES,
  payload: {
    receivedEntries
  }
})
export const deleteEntryActionCreator = (keyId: string) => ({
  type: types.DELETE_ENTRY,
  payload: keyId
});
