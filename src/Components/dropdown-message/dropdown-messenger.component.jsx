import ProfilePic from '../profile-pic/profile-pic.component';
import './dropdown-messenger.styles.scss';
import { ThreeDotsIcon } from '../icons/icons';
import TextInput from '../text-input/text-input.component';

const DropdownMessenger = () => (
  <div className='dropdown-messenger'>
    <div className='header'>
      <span className='header-name'>Messenger</span>
      <span className='controls'>
        <span className='menu'>
          <ThreeDotsIcon/>
        </span>
      </span>
    </div>
    <TextInput placeholder='Search Messenger' />
    <div className='conversations-container'>
      <div className='conversation-container'>
        <ProfilePic/>
        <div className='conversation'>
          <span className='name'>Your Crush</span>
          <span className='last-message'>
            <span className='body'>Hi</span>
            <span className='time'>1h</span>
          </span>
        </div>
      </div>
      <div className='conversation-container'>
        <ProfilePic/>
        <div className='conversation'>
          <span className='name'>Your Crush</span>
          <span className='last-message'>
            <span className='body'>Hi</span>
            <span className='time'>1h</span>
          </span>
        </div>
      </div>
      <div className='conversation-container'>
        <ProfilePic/>
        <div className='conversation'>
          <span className='name'>Your Crush</span>
          <span className='last-message'>
            <span className='body'>Hi</span>
            <span className='time'>1h</span>
          </span>
        </div>
      </div>
      <div className='conversation-container'>
        <ProfilePic/>
        <div className='conversation'>
          <span className='name'>Your Crush</span>
          <span className='last-message'>
            <span className='body'>Hi</span>
            <span className='time'>1h</span>
          </span>
        </div>
      </div>
      <div className='conversation-container'>
        <ProfilePic/>
        <div className='conversation'>
          <span className='name'>Your Crush</span>
          <span className='last-message'>
            <span className='body'>Hi</span>
            <span className='time'>1h</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default DropdownMessenger;