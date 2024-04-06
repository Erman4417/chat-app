import AuthPage from './Com/Login/AuthPage'
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './Com/Login/Login';
import Regis from './Com/Login/Regis';

function App() {
  return (
  <>
      <div className="container">
    <Routes >
        <Route path='/login' Component={Login} />
        <Route path='/regis' Component={Regis} />
    </Routes>
      </div>
  </>
  );
}

export default App;
