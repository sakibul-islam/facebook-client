import ProfilePic from '../../profile-pic/profile-pic.component';
import './show-comment.styles.scss';
import Name from '../../name/name.component';

const Comment = ({name, photoUrl, string}) => (
  <div className='comment'>
    <ProfilePic photoURL={photoUrl} />
    <div className='container'>
      <div className='string'>
        <Name username='name123' displayName="Display Name"/>
        {string}
      </div>
      <div className='actions'>
        <span className='link'>Like</span>
        <span className='link'>Reply</span>
        <span className='time'>3d</span>
      </div>
    </div>
  </div>
);

export default Comment;