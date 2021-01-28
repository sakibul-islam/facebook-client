import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import postsReducer from './posts/post.reducer';
import gunReducer from './gun/gun.reducer';

export default combineReducers({
  user: userReducer,
  posts: postsReducer,
  gun: gunReducer
})