import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';

import { Routes, Route} from 'react-router-dom';
import Login from './components/pages/Login/Login';
import SingleProduct from './components/Products/SingleProduct';

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/singleProduct" element={<SingleProduct />}> </Route>
      </Routes>

    </div>
  );
}

export default App;
