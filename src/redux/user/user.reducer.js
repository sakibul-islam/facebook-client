import userActions from "./user.action.types";

const INITIAL_STATE = {
  name: 'Sakibul Islam',
  photoURL: '',
  userName: 'sakib962'
}

const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch(action.type) {
    case userActions.SET_CURRENT_USER:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default userReducer;