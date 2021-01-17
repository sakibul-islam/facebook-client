import HoverButton from '../../hoverButton/hover-button.component';
import ProfilePic from '../../profile-pic/profile-pic.component';
import './write-comment.styles.scss';

const WriteComment = () => (
  <div className='write-comment'>
    <ProfilePic/>
    <div className='input'>
      <textarea type='text' placeholder='Write a comment...'/>
      <div className='send-button'>
        <HoverButton>Send</HoverButton>
      </div>
    </div>
  </div>
);

export default WriteComment;