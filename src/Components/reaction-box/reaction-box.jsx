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

const zIndexCalculation = (i) => {
  switch(i) {
    case 0:
      return 2;
    case 1:
      return 1;
    case 2:
      return 0;
    default:
      return 0;
  }
}

const returnReactionIcon = (reaction, i) => {
  const zIndex = zIndexCalculation(i);
  const style = {
    zIndex,
  }

  switch(reaction) {
    case 'like':
      return <Like className='icon like' style={style}/>
    case 'haha':
      return <Haha className='icon haha' style={style}/>
    case 'love':
      return <Love className='icon love' style={style}/>
    case 'wow':
      return <Wow className='icon wow' style={style}/>
    case 'care':
      return <Care className='icon care' style={style}/>
    case 'sad':
      return <Sad className='icon sad' style={style}/>
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
  <div className='reactions'>
    {reactionsArr.map((reaction, i) => returnReactionIcon(reaction, i))}
  </div>
  
)