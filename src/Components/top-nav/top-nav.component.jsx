import TextInput from '../text-input/text-input.component';
import './top-nav.styles.scss';
import { ReactComponent as Logo} from './icons/logo.svg';
import { ReactComponent as SearchIcon} from './icons/search.svg';
import { ReactComponent as FriendsIcon} from './icons/Friends.svg';
import { ReactComponent as Home} from './icons/Home.svg';
import { ReactComponent as Watch} from './icons/Watch.svg';
import { ReactComponent as Groups} from './icons/Groups.svg';
import { ReactComponent as Plus} from './icons/Plus.svg';
import { ReactComponent as Messenger} from './icons/Messenger.svg';
import { ReactComponent as Bell} from './icons/Bell.svg';
import { ReactComponent as CaretDown} from './icons/caret-down.svg';

import IconContainer from './icon-container/icon-container.component';
import HoverButton from '../hoverButton/hover-button.component';
import CurrentUsersProfilePic from '../current-user/current-users-profile-pic/current-users-profile-pic.component';
import { withRouter } from 'react-router-dom';
import { Component } from 'react';

class TopNav extends Component {
 state={
   active: 'home'
 }

  render() {
    const { history } = this.props;
    const active = this.state.active;
    const activeBorder = <div className='bottom-border'></div>
    return (
      <nav className='top-nav'>
        <div className='left'>
          <Logo className='logo'/>
          <div className='search'>
            <SearchIcon className='icon' height='15px'/>
            <TextInput placeholder="Search on facebook"/>
          </div>
        </div>
        <div className='middle'>
          <HoverButton 
            className={`hover-button ${active === 'home'? 'active' : ''}`}
            tooltip='Home' 
            onClick={() => {
              history.push('/');
              this.setState({active: 'home'})
            }}>
            <IconContainer>
              <Home className='icon'/>
            </IconContainer>
            {active === 'home'? activeBorder : ''}
          </HoverButton>
          <HoverButton
            className={`hover-button ${active === 'friends'? 'active' : ''}`} 
            tooltip='Friends' onClick={() => {
              history.push('/friends')
              this.setState({active: 'friends'})
            }}>
            <IconContainer quantity='7'>
              <FriendsIcon className='icon'/>
            </IconContainer>
            {active === 'friends'? activeBorder : ''}
          </HoverButton>
          <HoverButton
            className={`hover-button ${active === 'watch'? 'active' : ''}`}
            onClick={() => {
              history.push('/watch')
              this.setState({active: 'watch'})
            }}
            tooltip='Watch'>
            <IconContainer>
              <Watch className='icon'/>
            </IconContainer>
            {active === 'watch'? activeBorder : ''}
          </HoverButton>
          <HoverButton 
            className={`hover-button ${active === 'groups'? 'active' : ''}`}
            onClick={() => {
              history.push('/groups')
              this.setState({active: 'groups'})
            }}
            tooltip='Groups'>
            <IconContainer>
              <Groups className='icon'/>
            </IconContainer>
            {active === 'groups'? activeBorder : ''}
          </HoverButton>
        </div>
        <div className='right'>
          <HoverButton onClick={() => history.push(`/profile`)} >
            <CurrentUsersProfilePic/>
          </HoverButton>
          <IconContainer tooltip='Create'>
            <Plus/>
          </IconContainer>
          <IconContainer quantity='5' tooltip='Messenger'>
            <Messenger/>
          </IconContainer>
          <IconContainer tooltip='Notifications'>
            <Bell/>
          </IconContainer>
          <IconContainer tooltip='Login' onClick={() => history.push('/login')}>
            <CaretDown/>
          </IconContainer>
        </div>
      </nav>
    )
  }
  
}

export default withRouter(TopNav);