import './show-post.styles.scss';

import Card from '../../Card/card.component';
import ProfilePic from '../../profile-pic/profile-pic.component';
// import  meme from './memes.jpg';
import HoverButton from '../../hoverButton/hover-button.component';
import WriteComment from '../../comment/write-comment/write-comment.component';
import Comment from '../../comment/show-comment/show-comment.componet';
import Name from '../../name/name.component';
import { CommentIcon, ShareIcon, ThreeDotsIcon } from '../../icons/icons'
import { Component } from 'react';
import { connect } from 'react-redux';
import { gunTrigger, gunTriggeredDone } from '../../../redux/gun/gun.actions';

import ReactionBox, { DisplayReactionWithName, DisplaySortedReactions } from '../../reaction-box/reaction-box';

class ShowPost extends Component {
  state = {
    reacted: '',
    totalReact: 7,
    like: 7,
    haha: 0,
    love: 0,
    wow: 0,
    care: 0,
    sad: 0,
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

  reactionsSort = () => {
    const {like, haha, love, wow, care, sad} = this.state;
    const reactionObj = {like, haha, love, wow, care, sad};
    const reactionArr = Object.keys(reactionObj);
    console.log(reactionObj)
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < reactionArr.length; i += 1) {
        if (reactionObj[reactionArr[i - 1]] < reactionObj[reactionArr[i]]) {
          done = false;
          let tmp = reactionArr[i - 1];
          reactionArr[i - 1] = reactionArr[i];
          reactionArr[i] = tmp;
        }
      }
    }
  
    return reactionArr.filter((reaction, i) => i < 3 && reactionObj[reaction] > 0);
  }


  toggleLike = (reactName) => {
    const {gunMode} = this.props.gun;
    const {reacted} = this.state;
    const reactToAdd = this.reactToAdd(reactName)

    this.setState((prevState) => {
      this.setState({[reactName]: prevState[reactName] + reactToAdd })
    })

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
    console.log(this.reactionsSort())
  }

  setGunAnimation = () => {
    this.setState({gunAnimation: 'gunAnimation'})
    setTimeout(() => {
      this.setState({gunAnimation: ''})
    }, 500)
  }

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
              {
                <DisplaySortedReactions reactionsArr={this.reactionsSort()}/>
              }
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
              onClick={() => this.toggleLike('like')} 
              className={reactBtnClasses}>
              <DisplayReactionWithName reacted={reacted} />
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