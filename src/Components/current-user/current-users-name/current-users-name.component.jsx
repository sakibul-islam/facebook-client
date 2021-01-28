import { connect } from 'react-redux';
import Name from '../../name/name.component';

const CurrentUsersName = ({displayName, userName, ...otherProps}) => (
  <Name displayName={displayName} userName={userName} {...otherProps} />
);

const mapStateToProps = ({user}) => ({
  displayName: user.displayName,
  userName: ''
})

export default connect(mapStateToProps)(CurrentUsersName);