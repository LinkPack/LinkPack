import * as types from '../constants/actionTypes'

const initialState = {
    code: '// Your code here'
}

const boilerplateReducer = (state = initialState, action) => {
  let messageList;
  switch (action.type) {
    case types.EXAMPLE:
      console.log(action.payload);
      return {
        ...state,
        code: action.payload
      }
    default: return state;
  }
}

export default boilerplateReducer;