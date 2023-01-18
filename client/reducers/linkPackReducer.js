import * as types from '../constants/actionTypes'

const initialState = {
  linkPack: '',
  entries: [{label:'f', link: 'sdf', id: 0}],
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
      entries.push({label: action.payload.label,link: action.payload.link, id: action.payload.id})
      console.log('im entries',entries)
      return {
        ...state, entries
      }
    case types.GENERATE_LINKPACK:
      return {
        ...state
      }
    default: {
      return state;
    }
  }
}

export default linkPackReducer;