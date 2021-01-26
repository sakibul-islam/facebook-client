import FriendRequest from "../friend-request/friend-request.component";
import { userWhoSentRequest } from '../../profilesObj';
import { Component } from "react";

class RequestList extends Component {
  state = {
    users: userWhoSentRequest
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
        <h1>People Sent You Friend Request</h1>
        <div className='list'>
          {
            this.state.users.map((user) => <FriendRequest key={user.userName} user={user} removeUser={this.removeUser}/>)
          }
        </div>
      </div>)
    )
  }
}

export default RequestList;