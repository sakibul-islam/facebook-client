import AddFriend from "../add-friend/add-friend.component";
import { userProfileForAddFriend } from '../../profilesObj';
import { Component } from "react";
import './add-friends-list.styles.scss';

class AddFriendsList extends Component {
  state = {
    users: userProfileForAddFriend
  }

  removeUser = (targetUserName) => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.userName !== targetUserName)
    }))
  }

  render() {
    return (
      !this.state.users.length ? null
      :
      (<div className='user-list'>
        <h1>People you may know</h1>
        <div className='list'>
          {
            this.state.users.map((user) => <AddFriend key={user.userName} user={user} removeUser={this.removeUser}/>)
          }
        </div>
      </div>)
    )
  }
}

export default AddFriendsList;