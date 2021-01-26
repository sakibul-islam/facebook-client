import './name.styles.scss';
import { withRouter } from 'react-router-dom';

const Name = ({userName, displayName, history}) => (
  <span className='name-component' onClick={() => history.push(`/profile/${userName}`)}>{displayName} </span>
);

export default withRouter(Name);