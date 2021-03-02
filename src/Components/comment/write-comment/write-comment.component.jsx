import CurrentUsersProfilePic from '../../current-user/current-users-profile-pic/current-users-profile-pic.component';
import HoverButton from '../../hoverButton/hover-button.component';
import { SendIcon } from '../../icons/icons';
import './write-comment.styles.scss';

const WriteComment = () => (
  <div className='write-comment'>
    <CurrentUsersProfilePic />
    <div className='input'>
      <textarea type='text' placeholder='Write a comment...'/>
      <div className='send-button'>
        <HoverButton>
          <SendIcon/>
        </HoverButton>
      </div>
    </div>
  </div>
);

export default WriteComment;