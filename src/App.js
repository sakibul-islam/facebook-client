import './App.css';
import Contents from './Components/Contents/contents.components';
import LeftNav from './Components/left-nav/left-nav.component';
import RightNav from './Components/right-nav/right-nav.components';
import TopNav from './Components/top-nav/top-nav.component';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <div className='main'>
        <LeftNav/>
        <Contents/>
        <RightNav/>
      </div>
    </div>
  );
}

export default App;
