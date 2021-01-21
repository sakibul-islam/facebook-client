import { connect } from 'react-redux';
import Name from '../../name/name.component';

const CurrentUsersName = ({displayName, userName}) => (
  <Name displayName={displayName} userName={userName} />
);

const mapStateToProps = ({user}) => ({
  displayName: user.displayName,
  userName: 'username21'
})

export default connect(mapStateToProps)(CurrentUsersName);