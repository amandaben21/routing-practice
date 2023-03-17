import './App.css';
import Home from './components/Home';
import NumString from './components/NumString';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  exact path='/home' element={<Home />}/>
        <Route exact path='/number/:num' element={<NumString />}/>
      </Routes>
    </div>
  );
}

export default App;
