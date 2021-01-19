import './App.css';

import TopNav from './Components/top-nav/top-nav.component';
import { Route, Switch } from 'react-router-dom';

import ProfilePage from './pages/profile/profile.page';
import HomePage from './pages/home/home.page';
import LoginPage from "./pages/login/login.page";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Switch>
        <Route exact path='/profile/:username' component={ProfilePage} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
