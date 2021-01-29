import './show-post.styles.scss';

import Card from '../../Card/card.component';
import ProfilePic from '../../profile-pic/profile-pic.component';
// import  meme from './memes.jpg';
import HoverButton from '../../hoverButton/hover-button.component';
import WriteComment from '../../comment/write-comment/write-comment.component';
import Comment from '../../comment/show-comment/show-comment.componet';
import Name from '../../name/name.component';
import { LikeIcon, LikedIcon, CommentIcon, ShareIcon, ThreeDotsIcon } from '../../icons/icons'
import {ReactComponent as LikeSvg } from '../../icons/Like.svg';
import { Component } from 'react';
import { connect } from 'react-redux';
import { gunTrigger, gunTriggeredDone } from '../../../redux/gun/gun.actions';


class ShowPost extends Component {
  state = {
    reacted: false,
    totalLike: 7,
    gunAnimation: ''
  }

  // toggleLike = () => {
  //   this.setState((prevState, nextState) => ({
  //     liked: !prevState.liked,
  //     totalLike: nextState.liked ? prevState.totalLike + 1 : prevState.totalLike - 1
  //   }));
  // }

  toggleLike = () => {
    const {trigger, gunMode} = this.props.gun;
    const {reacted} = this.state;
    const reactToAdd = gunMode &&  reacted ? trigger : (
      reacted ? -1 : 1
    )
    if(gunMode) {
      this.setGunAnimation();
      this.props.gunTrigger();
      setTimeout(() => this.props.gunTriggeredDone(), 200)
    }
    
    this.setState((prevState) => {
      return  ({
        reacted: gunMode? true : !prevState.reacted,
        totalLike: prevState.totalLike + reactToAdd
      })
    });
  }

  setGunAnimation = () => {
    this.setState({gunAnimation: 'gunAnimation'})
    setTimeout(() => {
      this.setState({gunAnimation: ''})
    }, 500)
  }

  render() {
    const { post, gun } = this.props
    const {displayName, userName, photoURL} = post.user;
    const {body, comments } = post;
    const reactBtnClass = `hover-button ${gun.gunMode ? 'gun-mode': ''} ${this.state.gunAnimation}`;
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
                <span className='time'>{post.time}</span>
              </div>
            </div>
            <div className='right'>
              <ThreeDotsIcon className='dots'/>
            </div>
          </div>
          <div className='caption'>{body}</div>
          {/* <img src={meme} alt=''/> */}
          <div className='quantities'>
            <div className='left'>
              <LikeSvg className='icon'/>
              <span className='quantity link'>{this.state.totalLike}</span>
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
            <HoverButton 
              onClick={this.toggleLike} 
              className={reactBtnClass}>
              <div className='icon-container'>
                {
                  this.state.reacted
                  ? <LikedIcon className={`icon reacted`}/> 
                  : <LikeIcon className='icon'/>
                }
              </div>
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
            {
              comments.map(comment => (
                <Comment key={comment.id} {...comment}/>
              ))
            }
          </div>
          <WriteComment/>
        </Card>
        
      </div>
    )
  }
  
}

const mapStatetoProps = ({gun}) => ({
  gun
})
const mapDispatchToProps = dispatch => ({
  gunTrigger: () => dispatch(gunTrigger()) ,
  gunTriggeredDone: () => dispatch(gunTriggeredDone())
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowPost);