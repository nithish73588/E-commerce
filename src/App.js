import './App.css';
import Register from './components/Register';
import Login from './components/login';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
