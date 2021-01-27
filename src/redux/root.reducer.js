import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import fireReducer from './fire/fire.reducer';

export default combineReducers({
  user: userReducer,
  fire: fireReducer
})