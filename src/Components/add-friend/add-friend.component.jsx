import './add-friend.styles.scss';
import HoverButton from '../hoverButton/hover-button.component';
import { CrossIcon } from '../icons/icons';
import { withRouter } from 'react-router-dom';
import { Component } from 'react';

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
    const {user, history, removeUser} = this.props;
    const {photoURL, displayName, userName} = user;
    return (
      <div className='add-friend'>
        <div 
          className='photo' 
          style={{backgroundImage: `url(${photoURL})`}}
          onClick={() => history.push(`/profile/${userName}`)}
        >
          <span className='remove-btn' onClick={
            (e) => {
              e.stopPropagation();
              removeUser(userName);
            }
          }>
            <CrossIcon />
          </span>
        </div>
        <div className='other'>
          <div className='name'>{displayName}</div>
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
        </div>
      </div>
    )
  }
};

export default withRouter(AddFriend);