import {Routes, Route} from 'react-router-dom';
import Homepage from './Components/Homepage';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
