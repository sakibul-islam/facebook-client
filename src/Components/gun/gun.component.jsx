import { connect } from 'react-redux';
import './gun.styles.scss';
import gunPng from './gun1.png';

const Gun = ({gun: {gunInAnimation, triggered, gunOutAnimation}}) => {
  const gunIn = gunInAnimation ? 'gun-in': '';
  const trigger = triggered ? 'triggered': '';
  const gunOut = gunOutAnimation ? 'gun-out': '';
  return (
    <div className={`gun ${gunIn} ${trigger} ${gunOut}`} >
      <img src={gunPng} alt=''/>
    </div>  
  )};
  
const mapStatetoProps = ({gun}) => ({
  gun
})

export default connect(mapStatetoProps)(Gun);