import './App.css';
import Register from './components/Register';
import Login from './components/login';
import Header from './components/index/header';
// import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route  element={<Login />} />
          <Route  element={<Register />} />
        </Routes>
      </BrowserRouter> */}


      <Login />
      <Register />
      <Header />
    </div>
  );
}

export default App;
