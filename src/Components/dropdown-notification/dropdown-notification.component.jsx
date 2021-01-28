import ProfilePic from '../profile-pic/profile-pic.component';
import './dropdown-notification.styles.scss';
import { ThreeDotsIcon } from '../icons/icons';

const DropdownNotification = () => (
  <div className='dropdown-notification'>
    <div className='header h-sb'>
      <span className='header-name'>Notifications</span>
      <span className='menu'>
        <ThreeDotsIcon/>
      </span>   
    </div>
    <div className='notifications-container'>
      <div className='notification-container'>
        <ProfilePic/>
        <div className='notification'>
          <div className='body'>
            <sapn className='link'>Your Crush</sapn>
            visited you profile 3 times today
          </div>
          <span className='time'>2 hours ago</span>
        </div>
      </div>
      <div className='notification-container'>
        <ProfilePic/>
        <div className='notification'>
          <div className='body'>Someone reacted on your post</div>
          <span className='time'>2 hours ago</span>
        </div>
      </div>
      <div className='notification-container'>
        <ProfilePic/>
        <div className='notification'>
          <div className='body'>Someone reacted on your post</div>
          <span className='time'>2 hours ago</span>
        </div>
      </div>
      <div className='notification-container'>
        <ProfilePic/>
        <div className='notification'>
          <div className='body'>Someone reacted on your post</div>
          <span className='time'>2 hours ago</span>
        </div>
      </div>
    </div>
  </div>
);

export default DropdownNotification;