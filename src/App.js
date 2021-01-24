import './App.css';

import TopNav from './Components/top-nav/top-nav.component';
import { Route, Switch } from 'react-router-dom';

import ProfilePage from './pages/profile/profile.page';
import HomePage from './pages/home/home.page';
import LoginPage from "./pages/login/login.page";
import FriendsPage from './pages/friends/friends.page';

import { Component } from 'react';
import { auth } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setUser } from './redux/user/user.action';

class App extends Component {

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log(user)
      const {displayName, email, photoURL } = user;
      this.props.setUser(({displayName, email, photoURL}))
    })
  }

  render() {
    return (
      <div className="App">
        <TopNav/>
        <Switch>
          <Route path='/profile/:userName' component={ProfilePage} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/friends' component={FriendsPage} />
        </Switch>
      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(App);
