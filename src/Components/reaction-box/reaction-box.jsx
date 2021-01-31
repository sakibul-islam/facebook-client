import './reactions.styles.scss';
import { ReactComponent as Haha } from './icons/Haha.svg';
import { ReactComponent as Love } from './icons/Love.svg';
import { ReactComponent as Wow } from './icons/Wow.svg';
import { ReactComponent as Care } from './icons/Care.svg';
import { ReactComponent as Sad } from './icons/Sad.svg';
import { ReactComponent as Like } from './icons/Like.svg';
import IconContainer from '../top-nav/icon-container/icon-container.component';
import { LikedIcon, LikeIcon } from '../icons/icons';
import { Component } from 'react';

class ReactionBox extends Component {
  
  handleReact = (e, reactName) => {
    e.stopPropagation()
    const {toggleReact} = this.props;
    toggleReact(reactName);
  }

  render() {
    
      return (
      <div className='reaction-box'>
        <IconContainer onClick={(e) => this.handleReact(e, 'haha')}>
          <Haha className='reaction'/>
        </IconContainer>
        <IconContainer onClick={(e) => this.handleReact(e, 'love')}>
          <Love className='reaction'/>
        </IconContainer>
        <IconContainer onClick={(e) => this.handleReact(e, 'wow')}>
          <Wow className='reaction'/>
        </IconContainer>
      </div>
    );
  }
}

export default ReactionBox;

const returnReactionIcon = (reaction) => {
  switch(reaction) {
    case 'like':
      return <Like className='icon like'/>
    case 'haha':
      return <Haha className='icon haha'/>
    case 'love':
      return <Love className='icon love'/>
    case 'wow':
      return <Wow className='icon wow'/>
    case 'care':
      return <Care className='icon care'/>
    case 'sad':
      return <Sad className='icon sad'/>
    default:
      return <LikeIcon className='icon like'/>
  }
}

export const DisplayReactionWithName = ({reacted}) => {
  switch(reacted) {
    case 'like':
      return (
        <>
          <LikedIcon className='icon like'/>
          <span className='like'>Like</span>
        </>
      );
    case 'haha':
      return (
        <>
          <Haha className='icon haha'/>
          <span className='haha'>Haha</span>
        </>
      );
    case 'love':
      return (
        <>
          <Love className='icon love'/>
          <span className='love'>Love</span>
        </>
      );
    case 'wow':
      return (
        <>
          <Wow className='icon wow'/>
          <span className='wow'>Wow</span>
        </>
      );
    case 'care':
      return (
        <>
          <Care className='icon care'/>
          <span className='care'>Care</span>
        </>
      );
    case 'sad':
      return (
        <>
          <Sad className='icon sad'/>
          <span className='sad'>Sad</span>
        </>
      );
    default:
      return (
        <>
          <LikeIcon className='icon like'/>
          <span className=''>Like</span>
        </>
      );
  }
}

export const DisplaySortedReactions = ({reactionsArr}) => (
  reactionsArr.map((reaction, i) => returnReactionIcon(reaction))
)