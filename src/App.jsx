import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import MissionPage from './components/MissionPage'
import ModelPage from './components/ModelPage';
import LoginModal from './components/LoginModal';
import RegisterGarden from './components/RegisterGarden';
import RegisterRoundtable from './components/RegisterRoundtable';
import RegisterUser from './components/RegisterUser';

function App() {

  return (
  <>
  <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/Home" element = {<Home/>} />
        <Route path = "/MissionPage" element = {<MissionPage/>} />
        <Route path = "/ModelPage" element = {<ModelPage/>} />
        <Route path = "/RegisterGarden" element = {<RegisterGarden/>} />
        <Route path = "/RegisterRoundtable" element = {<RegisterRoundtable/>} />
        <Route path = "/Login" element = {<LoginModal/>} />

          <Route path="/RegisterUser" element={<RegisterUser/>}/>

        <Route path = "*" element = {<div><h2>404 Page Not Found</h2></div>
        } />
  </Routes>
  </>
  );
}

export default App;
