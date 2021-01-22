import './show-post.styles.scss';

import Card from '../../Card/card.component';
import ProfilePic from '../../profile-pic/profile-pic.component';
// import  meme from './memes.jpg';
import HoverButton from '../../hoverButton/hover-button.component';
import WriteComment from '../../comment/write-comment/write-comment.component';
import Comment from '../../comment/show-comment/show-comment.componet';
import Name from '../../name/name.component';
import { LikeIcon, CommentIcon, ShareIcon } from './icons'
import {ReactComponent as LikeSvg } from '../../icons/Like.svg';


const ShowPost = ({post}) => {
  const {user: {displayName, userName, photoURL}} = post;
  return (
    <div className='post'>
      <Card>
        <div className='post-header'>
          <div className='left'>
            <ProfilePic userName={userName} photoURL={photoURL} />
            <div className='details'>
              <span className='names'>
                <Name displayName={displayName || 'Display Name'} userName={userName || 'user123'} /> 
                {/* ❯ <span className='group-name'>Group's Name</span> */}
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
            <LikeSvg className='icon'/>
            <spna className='quantity link'>40</spna>
          </div>
          <div className='right'>
            <div className='comments link'>
              <span className='quantity'>2</span>
              <span>Comments</span>
            </div>
            <div className='shares link'>
              <span className='quantity'>5</span>
              <span>Shares</span>
            </div>
          </div>
        </div>
        <div className='actions'>
          <HoverButton>
            <LikeIcon className='icon'/>
            <span className='icnos-name'> Like</span>
          </HoverButton>
          <HoverButton>
            <CommentIcon className='icon' />
            <span>Comment</span>
          </HoverButton>
          <HoverButton>
            <ShareIcon className='icon' />
            <span>Share</span>
          </HoverButton>
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