import HoverButton from '../../Components/hoverButton/hover-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './login.styles.scss';

const LoginPage = () => {

  return (
    <div className='login-page'>
      <h1>Login page</h1>

      <HoverButton 
        className='google-signin-btn hover-button'
        onClick={signInWithGoogle}
      >
        Sign In With Google
      </HoverButton>
    </div>
  )
}

export default LoginPage;