import * as types from '../constants/actionTypes'

const initialState = {
  entries: [],
}

const generatedLinkPackReducer = (state = initialState, action) => {
  let entries;
  switch(action.type) {
    case types.GET_ENTRIES:
      // add link to list
      // add label to label list
      console.log('im in reducer');
      entries = [];
      const payloadObj = action.payload.receivedEntries;
      //console.log('new entries equal to entries? ', newEntries === state.entries);
      for (const key in payloadObj) {
          const linkObj = {
            label: key,
            link: payloadObj[key]
          };
          entries.push(linkObj);
      }
      console.log('im entries',entries)
      return {
        ...state, entries
      }
    default: {
      return state;
    }
  }
}

export default generatedLinkPackReducer;