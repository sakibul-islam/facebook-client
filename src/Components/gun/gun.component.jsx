import { connect } from 'react-redux';
import './gun.styles.scss';
import gunPng from './gun1.png';

const Gun = ({gun}) => {
  console.log(gun)
  return gun.gunMode 
  ? (
    <div className='gun-container'>
      <img src={gunPng} alt=''/>
    </div> 
  ) : null
}
const mapStatetoProps = ({gun}) => ({
  gun
})

export default connect(mapStatetoProps)(Gun);