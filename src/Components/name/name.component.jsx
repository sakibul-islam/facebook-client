import './name.styles.scss';
import { withRouter } from 'react-router-dom';

const Name = ({username, name, history}) => (
  <span className='name' onClick={() => history.push(`/profile/${username}`)}>{name} </span>
);

export default withRouter(Name);