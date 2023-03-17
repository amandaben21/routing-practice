import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/number/:int' element={<Number />}/>
      </Routes>
    </div>
  );
}

export default App;
