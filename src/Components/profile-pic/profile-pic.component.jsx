import './profile-pic.styles.scss';
import { withRouter } from 'react-router-dom';
import Photo from './sakib.jpg';

const ProfilePic = ({user, history}) => {
  return (
    <div className='profile-pic' onClick={() => history.push('/profile/sakib962')}>
      {user ? <img src={user.photoUrl} alt='' /> : <img src={Photo} alt='' />}
    </div>
  )
}

export default withRouter(ProfilePic);