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
import TabContainer from './tab-container.component';

class TopNav extends Component {
 state={
   active: this.props.location.pathname || 'home'
 }

 setActiveTab = (tabName, routeName) => {
    this.setState({active: tabName})
    if(routeName) this.props.history.push(`${routeName}`)
 }

  render() {
    const { history, location } = this.props;
    const active = this.state.active;
    console.log(location.pathname)
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
          <TabContainer 
            tabName='Home'
            routeName='/'
            bordered
            active={this.state.active} 
            handleClick={this.setActiveTab}
          >
            <Home className='icon' />
          </TabContainer>
          <TabContainer 
            tabName='Friends'
            routeName='/friends'
            bordered
            quantity='7'
            active={this.state.active} 
            handleClick={this.setActiveTab}
          >
            <FriendsIcon className='icon' />
          </TabContainer>
          <TabContainer 
            tabName='Watch'
            routeName='/watch'
            bordered
            active={this.state.active} 
            handleClick={this.setActiveTab}
          >
            <Watch className='icon' />
          </TabContainer>
          <TabContainer 
            tabName='Groups'
            routeName='/groups'
            bordered
            active={this.state.active} 
            handleClick={this.setActiveTab}
          >
            <Groups className='icon' />
          </TabContainer>
        </div>
        <div className='right'>
          <HoverButton
            className={`hover-button ${active === 'profile'? 'active' : ''}`}
            onClick={() => {
              history.push(`/profile`);
              this.setState({active: 'profile'})
            }} >
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