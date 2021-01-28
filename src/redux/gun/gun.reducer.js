import gunActions from "./gun.action.types";

const INITIAL_STATE = {
  gunMode: false,
  totalBullet: 100,
  bullet: 'haha',
  trigger: 1,
}

const gunReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case gunActions.TOGGLE_GUN_MODE:
      return {
        ...state,
        gunMode: !state.gunMode
      }
    default: 
      return {
        ...state
      }
  }
}

export default gunReducer;