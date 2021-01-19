import ProfilePic from '../../profile-pic/profile-pic.component';
import './show-comment.styles.scss';
import Name from '../../name/name.component';

const Comment = ({name, photoUrl, string}) => (
  <div className='comment'>
    <ProfilePic />
    <div className='container'>
      <div className='string'>
        <Name username='sakib962' name="Sakibul Islam"/>
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