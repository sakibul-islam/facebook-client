import './friends.page.styles.scss'
import AddFriend from "../../Components/add-friend/add-friend.component";
import { userProfileForAddFriend } from '../../profilesObj';

const FriendsPage = () => (
  <div className='friends-page'>
    <h1>People you may know</h1>
    {
      userProfileForAddFriend.map((user, i) => <AddFriend key={i} user={user}/>)
    }
  </div>
)

export default FriendsPage;