import './friend-request.styles.scss';

import HoverButton from '../hoverButton/hover-button.component';
import { withRouter } from 'react-router-dom';
import { Component } from 'react';
import UserCard from '../user-card/user-card.component';

class FriendRequest extends Component {
  state = {
    accepted: false
  }

  handleRequest = () => {
    this.setState(prevState => ({
      accepted: !prevState.accepted
    }))
  }

  render() {
    const {user, removeUser} = this.props;
    const {photoURL, displayName, userName} = user;
    return (
      <UserCard photoURL={photoURL} displayName={displayName} userName={userName} removeUser={removeUser}>
        {
          !this.state.accepted
          ?  (
            <HoverButton 
              className='sent-request' 
              onClick={this.handleRequest}
              >
                Confrim Request
            </HoverButton>
          )
          :  (
            <HoverButton 
              className='accepted'
              >
                Added
            </HoverButton>
          )
        }
      </UserCard>
    )
  }
};

export default withRouter(FriendRequest);