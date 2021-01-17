import './show-post.styles.scss';

import Card from '../../Card/card.component';
import ProfilePic from '../../profile-pic/profile-pic.component';
import  meme from './memes.jpg';
import HoverButton from '../../hoverButton/hover-button.component';
import WriteComment from '../../comment/write-comment/write-comment.component';
import Comment from '../../comment/show-comment/show-comment.componet';


const ShowPost = () => {

  return (
    <div className='post'>
      <Card>
        <div className='post-header'>
          <div className='left'>
            <ProfilePic/>
            <div className='details'>
              <span className='name'>
                <span className='owner-name'>Sakibul Islam</span> ❯ <span className='group-name'>Legendary Devs</span>
              </span>
              <sapn className='time'>1h ago</sapn>
            </div>
          </div>
          <div className='right'>*</div>
        </div>
        <div className='caption'>Excepteur sunt labore qui culpa officia consectetur ex ut do dolor enim magna. Consequat non tempor anim dolor consequat tempor fugiat consectetur. Consequat amet ullamco consequat sunt.</div>
        <img src={meme} alt=''/>
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
          <Comment />
        </div>
        <WriteComment/>
      </Card>
    </div>
  )
}

export default ShowPost;