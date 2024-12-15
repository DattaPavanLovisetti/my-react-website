import './App.css';
import LoginPage from './Login page/LoginPage';
import HomePage from './Home page/HomePage';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/homepage' element={<HomePage/>}></Route>

      </Routes>
  
    </Router>
  );
}

export default App;
