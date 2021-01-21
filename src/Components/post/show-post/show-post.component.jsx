import './show-post.styles.scss';

import Card from '../../Card/card.component';
import ProfilePic from '../../profile-pic/profile-pic.component';
// import  meme from './memes.jpg';
import HoverButton from '../../hoverButton/hover-button.component';
import WriteComment from '../../comment/write-comment/write-comment.component';
import Comment from '../../comment/show-comment/show-comment.componet';
import Name from '../../name/name.component';


const ShowPost = ({post}) => {
  return (
    <div className='post'>
      <Card>
        <div className='post-header'>
          <div className='left'>
            <ProfilePic/>
            <div className='details'>
              <span className='names'>
                <Name displayName='Display Name' userName='name123'/> ❯ <span className='group-name'>Group's Name</span>
              </span>
              <span className='time'>1h ago</span>
            </div>
          </div>
          <div className='right'>*</div>
        </div>
        <div className='caption'>{post.body}</div>
        {/* <img src={meme} alt=''/> */}
        <div className='quantities'>
          <div className='left'>
            haha, love, like 590
          </div>
          <div className='right'>
            components 56 shares 5
          </div>
        </div>
        <div className='actions'>
          <HoverButton>Like</HoverButton>
          <HoverButton>Comment</HoverButton>
          <HoverButton>Share</HoverButton>
        </div>
        <div className='comments'>
          <Comment string={post.title} />
        </div>
        <WriteComment/>
      </Card>
    </div>
  )
}

export default ShowPost;