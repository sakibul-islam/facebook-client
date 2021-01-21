const INITIAL_STATE = {
  name: {
    firstName: 'Sakibul',
    lastName: 'Islam'
  },
  userName: 'sakib962'
}

const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default userReducer;