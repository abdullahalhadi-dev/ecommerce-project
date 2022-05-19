import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';

import { Routes, Route} from 'react-router-dom';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />}> </Route>
      </Routes>

    </div>
  );
}

export default App;
