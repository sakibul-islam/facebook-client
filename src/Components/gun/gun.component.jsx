import { connect } from 'react-redux';
import './gun.styles.scss';
import gunPng from './gun1.png';

const Gun = ({fire}) => {
  console.log(fire)
  return fire.fireMode 
  ? (
    <div className='gun-container'>
      <img src={gunPng} alt=''/>
    </div> 
  ) : null
}
const mapStatetoProps = ({fire}) => ({
  fire
})

export default connect(mapStatetoProps)(Gun);