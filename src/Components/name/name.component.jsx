import './name.styles.scss';
import { withRouter } from 'react-router-dom';

const Name = ({userName, displayName, history, location, match, ...otherProps}) => (
  <span 
    className='name-component' 
    onClick={() => history.push(`/profile/${userName}`)}
    {...otherProps}
  >{displayName}</span>
);

export default withRouter(Name);