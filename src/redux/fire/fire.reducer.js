const INITIAL_STATE = {
  fireMode: false,
  totalBullet: 100,
  bullet: 'haha',
  trigger: 1,
}

const fireReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_FIRE_MODE':
      return {
        ...state,
        fireMode: true
      }
    default: 
      return {
        ...state
      }
  }
}

export default fireReducer;