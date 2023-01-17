import * as types from '../constants/actionTypes'

const initialState = {
  linkPack: '',
  entries: [],
  currentEntry: '',
}

const linkPackReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_ENTRY:
      // add entry to list
      return {
        ...state
      }
    case types.GENERATE_LINKPACK:
      return {
        ...state
      }
    case types.UPDATE_CURRENT_ENTRY:
      return {
        ...state
      }
    default: {
      return state;
    }
  }
}

export default linkPackReducer;