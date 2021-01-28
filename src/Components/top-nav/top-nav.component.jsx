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

import CurrentUsersProfilePic from '../current-user/current-users-profile-pic/current-users-profile-pic.component';
import { withRouter } from 'react-router-dom';
import { Component } from 'react';
import TabContainer from './tab-container.component';
import DropdownNotification from '../dropdown-notification/dropdown-notification.component';

class TopNav extends Component {
 state={
   activeTab: this.props.location.pathname || 'home',
   activeDropdownTab: ''
 }

 setActiveTab = (tabName, routeName) => {
    this.setState({activeTab: tabName})
    if(routeName) this.props.history.push(`${routeName}`)
 }
 setDropdownToggleTab = (tabName) => {
  this.setState(prevState => ({
    activeDropdownTab: prevState.activeDropdownTab === tabName ? '' : tabName
  }))
}

  render() {
    const { activeTab, activeDropdownTab } = this.state
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
            active={activeTab} 
            handleClick={this.setActiveTab}
          >
            <Home className='icon' />
          </TabContainer>
          <TabContainer 
            tabName='Friends'
            routeName='/friends'
            bordered
            quantity='7'
            active={activeTab} 
            handleClick={this.setActiveTab}
          >
            <FriendsIcon className='icon' />
          </TabContainer>
          <TabContainer 
            tabName='Watch'
            routeName='/watch'
            bordered
            active={activeTab} 
            handleClick={this.setActiveTab}
          >
            <Watch className='icon' />
          </TabContainer>
          <TabContainer 
            tabName='Groups'
            routeName='/groups'
            bordered
            active={activeTab} 
            handleClick={this.setActiveTab}
          >
            <Groups className='icon' />
          </TabContainer>
        </div>
        <div className='right'>
          <TabContainer 
            tabName='Profile'
            routeName='/profile'
            bordered
            active={activeTab} 
            handleClick={this.setActiveTab}
          >
            <CurrentUsersProfilePic/>
          </TabContainer>

          <TabContainer
            tabName='Create'
            bordered
            active={activeDropdownTab} 
            handleClick={this.setDropdownToggleTab}
          >
            <Plus className='icon'/>
          </TabContainer>
          
          <TabContainer
            tabName='Messenger'
            bordered
            quantity='1'
            active={activeDropdownTab} 
            handleClick={this.setDropdownToggleTab}
          >
            <Messenger className='icon'/>
          </TabContainer>

          <TabContainer
            tabName='Notifications'
            bordered
            quantity='5'
            active={activeDropdownTab} 
            handleClick={this.setDropdownToggleTab}
          >
            <Bell className='icon'/>
          </TabContainer>

          <TabContainer
            tabName='Menu'
            bordered
            active={activeDropdownTab} 
            handleClick={this.setDropdownToggleTab}
          >
            <CaretDown className='icon'/>
          </TabContainer>
        </div>
        <div className='dropdown'>
            <DropdownNotification />
          </div>
      </nav>
    )
  }
  
}

export default withRouter(TopNav);