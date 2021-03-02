import ProfilePic from '../profile-pic/profile-pic.component';
import './dropdown-notification.styles.scss';
import { ThreeDotsIcon } from '../icons/icons';
import {sakib} from '../../profilesObj';

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
          <div className='body'>
            <sapn className='link'>Your Ex</sapn>
            reading your old message
          </div>
          <span className='time'>3 hours ago</span>
        </div>
      </div>
      <div className='notification-container'>
        <ProfilePic/>
        <div className='notification'>
          <div className='body'>
            <sapn className='link'>Someone</sapn> and <sapn className='link'>7 others</sapn>
            viewed you post but didn't react
          </div>
          <span className='time'>5 hours ago</span>
        </div>
      </div>
      <div className='notification-container'>
        <ProfilePic photoURL={sakib.photoURL}/>
        <div className='notification'>
          <div className='body'>
            <sapn className='link'>Sakibul Islam</sapn>
            deployed the app
          </div>
          <span className='time'>7 hours ago</span>
        </div>
      </div>
    </div>
  </div>
);

export default DropdownNotification;