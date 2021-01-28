import CurrentUsersProfilePic from "../current-user/current-users-profile-pic/current-users-profile-pic.component";
import CurrentUsersName from '../current-user/current-users-name/current-users-name.component';
import './dropdown-menu.styles.scss';
import IconContainer from "../top-nav/icon-container/icon-container.component";

import { connect } from "react-redux";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { LogOutIcon, SignInIcon } from "../icons/icons";

import { toggleGunMode } from "../../redux/gun/gun.actions";

const DropdownMenu = ({user, toggleGunMode}) => (
  <div className='dropdown-menu'>
    {
      user.displayName ? (
      <div className='item profile'>
        <CurrentUsersProfilePic />
        <div className='other'>
          <CurrentUsersName className='name'/>
          <span className='message'>See you profile</span>
        </div>
      </div>
      ) : (
        <div className='item signin' onClick={() => signInWithGoogle()}>
          <IconContainer>
            <SignInIcon />
          </IconContainer>
          <div className='other'>
            <name className='name'>Sign In With Google</name>
            <span className='message'>Get Free Verified Account</span>
          </div>
        </div>
      )
    }
    
    <hr/>

    <div className='item' onClick={() => toggleGunMode()}>
      <div className='fireMode' >
        Toggle Fire Mode
      </div>
    </div>

    {
      user.displayName ? (
        <div className='item' onClick={() => auth.signOut()} >
          <IconContainer>
            <LogOutIcon />
          </IconContainer>
          <div className='other'>
            <name>Log Out</name>
          </div>
        </div>
      ) : null
    }
  </div>
);

const mapStateToProps = ({user}) => ({
  user
})
const mapDispatchToProps = (dispatch) => ({
  toggleGunMode: () => dispatch(toggleGunMode())
})

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);