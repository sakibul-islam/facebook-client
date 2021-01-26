import './friends.page.styles.scss'
import AddFriendsList from '../../Components/add-friends-list/add-friends-list.component';

const FriendsPage = () => (
  <div className='friends-page'>
    <AddFriendsList />
    <AddFriendsList />
  </div>
)

export default FriendsPage;