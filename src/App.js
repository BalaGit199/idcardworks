import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginComponent from './page/login/LoginComponent';
// import Sample from './page/Sample';
import Layout from './page/Layout';
import Dashboardcomponent from './components/dashboard/Dashboardcomponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='login' element={<LoginComponent/>}/>
        <Route path='dashboard' element={<Dashboardcomponent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
