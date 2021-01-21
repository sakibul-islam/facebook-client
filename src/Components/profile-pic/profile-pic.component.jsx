import './profile-pic.styles.scss';
import { withRouter } from 'react-router-dom';

const ProfilePic = ({photoURL, history}) => {
  return (
    <div className='profile-pic' onClick={() => history.push('/profile/sakib962')}>
      {photoURL ? <img src={photoURL} alt='' /> : null}
    </div>
  )
}

export default withRouter(ProfilePic);