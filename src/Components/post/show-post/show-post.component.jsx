import './show-post.styles.scss';

import Card from '../../Card/card.component';
import ProfilePic from '../../profile-pic/profile-pic.component';
// import  meme from './memes.jpg';
import HoverButton from '../../hoverButton/hover-button.component';
import WriteComment from '../../comment/write-comment/write-comment.component';
import Comment from '../../comment/show-comment/show-comment.componet';
import Name from '../../name/name.component';
import { CommentIcon, ShareIcon, ThreeDotsIcon } from '../../icons/icons'
import {ReactComponent as LikeSvg } from '../../icons/Like.svg';
import { Component } from 'react';
import { connect } from 'react-redux';
import { gunTrigger, gunTriggeredDone } from '../../../redux/gun/gun.actions';

import ReactionBox, { DisplayReaction } from '../../reaction-box/reaction-box';

class ShowPost extends Component {
  state = {
    reacted: '',
    totalReact: 7,
    reactionBox: false
  }

  reactToAdd = (reactName) => {
    const {trigger, gunMode} = this.props.gun;
    const {reacted} = this.state;

    if(gunMode) {
      return trigger;
    } else if (reacted === reactName) {
      return -1;
    } else if(!reacted) {
      return 1;
    } else {
      return 0;
    }
  }

  toggleLike = (reactName) => {
    const {gunMode} = this.props.gun;
    const {reacted} = this.state;
    const reactToAdd = this.reactToAdd(reactName)

    console.log(reactToAdd)

    if(gunMode) {
      this.setGunAnimation();
      this.props.gunTrigger();
      setTimeout(() => this.props.gunTriggeredDone(), 200)
    }
    
    this.setState((prevState) => {
      return  ({
        reacted: gunMode? reactName : (reacted === reactName ? '' : reactName),
        totalReact: prevState.totalReact + reactToAdd
      })
    });
  }

  setGunAnimation = () => {
    this.setState({gunAnimation: 'gunAnimation'})
    setTimeout(() => {
      this.setState({gunAnimation: ''})
    }, 500)
  }

  // showReactionBox = (e) => {
  //   console.log(e)
  //   this.setState({reactionBox: true})
  // }
  // hideReactionBox = (e) => {
  //   console.log(e)
  //   setTimeout(() => {
  //   this.setState({reactionBox: false})
  //   }, 500)
  // }


  render() {
    const {reacted, totalReact} = this.state
    const { post, gun } = this.props
    const {displayName, userName, photoURL} = post.user;
    const {body, comments } = post;
    const reactBtnClasses = `hover-button ${gun.gunMode ? 'gun-mode': ''} ${this.state.gunAnimation}`;

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
              <span className='quantity link'>{totalReact}</span>
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
              // onMouseOverCapture={this.showReactionBox}
              // onMouseOut={this.hideReactionBox}
              onClick={() => this.toggleLike('like')} 
              className={reactBtnClasses}>
              <DisplayReaction reacted={reacted} />
              <ReactionBox toggleReact={this.toggleLike}/>
            </HoverButton>
            <HoverButton>
              <div className='icon-container'>
                <CommentIcon className='icon' />
              </div>
              <span>Comment</span>
            </HoverButton>
            <HoverButton>
              <div className='icon-container'>
                <ShareIcon className='icon' />
              </div>
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