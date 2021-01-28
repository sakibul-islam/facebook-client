import CurrentUsersProfilePic from "../current-user/current-users-profile-pic/current-users-profile-pic.component";
import CurrentUsersName from '../current-user/current-users-name/current-users-name.component';
import './dropdown-menu.styles.scss';
import IconContainer from "../top-nav/icon-container/icon-container.component";

import {ReactComponent as TestIcon } from '../top-nav/icons/Messenger.svg'

const DropdownMenu = () => (
  <div className='dropdown-menu'>
    <div className='item profile'>
      <CurrentUsersProfilePic />
      <div className='other'>
        <CurrentUsersName className='name'/>
        <span className='message'>See you profile</span>
      </div>
    </div>
    <hr/>
    <div className='item'>
      <IconContainer>
        <TestIcon/>
      </IconContainer>
      <div className='other'>
        <name>Log Out</name>
      </div>
    </div>
  </div>
);

export default DropdownMenu;