import './profile-pic.styles.scss';
import { withRouter } from 'react-router-dom';
import Photo from './sakib.jpg';

const ProfilePic = ({photoURL, history}) => {
  return (
    <div className='profile-pic' onClick={() => history.push('/profile/sakib962')}>
      {photoURL ? <img src={photoURL} alt='' /> : <img src={Photo} alt='' />}
    </div>
  )
}

export default withRouter(ProfilePic);