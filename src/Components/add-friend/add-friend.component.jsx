import './add-friend.styles.scss';
import HoverButton from '../hoverButton/hover-button.component';
import { CrossIcon } from '../icons/icons';
import { withRouter } from 'react-router-dom';

const AddFriend = ({user, history, removeUser}) => {
  const {photoURL, displayName, userName} = user
  return (
  <div className='add-friend'>
    <div 
      className='photo' 
      style={{backgroundImage: `url(${photoURL})`}}
      onClick={() => history.push(`/profile/${userName}`)}
    >
      <span className='remove-btn' onClick={
        (e) => {
          e.stopPropagation();
          removeUser(userName)
        }
      }>
        <CrossIcon />
      </span>
    </div>
    <div className='other'>
      <div className='name'>{displayName}</div>
      <HoverButton>AddFriend</HoverButton>
    </div>
  </div>
)};

export default withRouter(AddFriend);