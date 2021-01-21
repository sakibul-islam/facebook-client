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
        <span>Like</span>
        <span>Reply</span>
      </div>
    </div>
  </div>
);

export default Comment;