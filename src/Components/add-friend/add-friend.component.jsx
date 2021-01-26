import './add-friend.styles.scss';
import HoverButton from '../hoverButton/hover-button.component';
import { withRouter } from 'react-router-dom';
import { Component } from 'react';
import UserCard from '../user-card/user-card.component';

class AddFriend extends Component {
  state = {
    requested: false
  }

  handleRequest = () => {
    this.setState(prevState => ({
      requested: !prevState.requested
    }))
  }

  render() {
    const {user, removeUser} = this.props;
    const {photoURL, displayName, userName} = user;
    return (
      <UserCard photoURL={photoURL} displayName={displayName} userName={userName} removeUser={removeUser}>
        {
          !this.state.requested
          ?  (
            <HoverButton 
              className='sent-request' 
              onClick={this.handleRequest}
              >
                Add Friend
            </HoverButton>
          )
          :  (
            <HoverButton 
              className='cancel-request'
              onClick={this.handleRequest}
              >
                Cancel Request
            </HoverButton>
          )
        }
      </UserCard>
    )
  }
};

export default withRouter(AddFriend);