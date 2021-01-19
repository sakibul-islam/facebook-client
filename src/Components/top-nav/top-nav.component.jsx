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
import { withRouter } from 'react-router-dom';
import ProfilePic from '../profile-pic/profile-pic.component';

const TopNav = ({ history }) => {
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
        <HoverButton tooltip='Home' onClick={() => history.push('/')}>
          <IconContainer>
            <Home/>
          </IconContainer>
        </HoverButton>
        <HoverButton tooltip='Friends'>
          <IconContainer quantity='7'>
            <FriendsIcon/>
          </IconContainer>
        </HoverButton>
        <HoverButton tooltip='Watch'>
          <IconContainer>
            <Watch/>
          </IconContainer>
        </HoverButton>
        <HoverButton tooltip='Groups'>
          <IconContainer>
            <Groups/>
          </IconContainer>
        </HoverButton>
      </div>
      <div className='right'>
        <HoverButton onClick={() => history.push('/profile')} >
          <ProfilePic/>
          <span>Sakib</span>
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
        <IconContainer tooltip='Account'>
          <CaretDown/>
        </IconContainer>
      </div>
    </nav>
  )
}

export default withRouter(TopNav);