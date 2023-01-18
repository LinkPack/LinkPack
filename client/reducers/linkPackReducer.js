import * as types from '../constants/actionTypes'

const initialState = {
  linkPack: '',
  entries: [],
}

const linkPackReducer = (state = initialState, action) => {
  let entries;
  switch(action.type) {
    case types.ADD_ENTRY:
      // add link to list
      // add label to label list
      console.log('im in reducer');
      entries = [...state.entries];
      //console.log('new entries equal to entries? ', newEntries === state.entries);
      entries.push({label: action.payload.label,link: action.payload.link, keyId: action.payload.keyId})
      console.log('im entries',entries)
      return {
        ...state, entries
      }
    case types.DELETE_ENTRY:
      entries = [...state.entries].filter(entry => entry.keyId !== action.payload)
      return {
        ...state, entries
      }
    default: {
      return state;
    }
  }
}

export default linkPackReducer;