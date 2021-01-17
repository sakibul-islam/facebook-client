import ProfilePic from '../../profile-pic/profile-pic.component';
import './show-comment.styles.scss';

const Comment = ({name, photoUrl, string}) => (
  <div className='comment'>
    <ProfilePic />
    <div className='container'>
      <div className='string'>
        <span className='name'>Sakibul Islam </span>
        Eu minim minim duis proident dolore aliqua est dolore laborum et dolore aliquip. Lorem do incididunt nostrud sit labore labore ex ex occaecat non aliquip.
      </div>
      <div className='actions'>
        <sapn>Like</sapn>
        <sapn>Reply</sapn>
      </div>
    </div>
  </div>
);

export default Comment;