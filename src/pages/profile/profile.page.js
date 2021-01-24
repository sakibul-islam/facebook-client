import { connect } from "react-redux";

import profiles from '../../profilesObj';
import { withRouter } from 'react-router-dom';
import Profile from '../../Components/profile/profile.component';

const ProfilePage = ({profile}) => (
  <Profile profile={ profile || this.props.user}/>
)

const mapStateToProps = ({user}, props) => ({
  user,
  profile: profiles[props.match.params.userName]
})

export default connect(mapStateToProps)(withRouter(ProfilePage));