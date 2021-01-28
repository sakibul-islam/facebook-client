import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import fireReducer from './fire/fire.reducer';
import postsReducer from './posts/post.reducer';

export default combineReducers({
  user: userReducer,
  posts: postsReducer,
  fire: fireReducer
})