import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import MissionPage from './Components/MissionPage'
import ModelPage from './Components/ModelPage';
import Login from './Components/Login';
import RegisterGarden from './Components/RegisterGarden';
import RegisterRoundtable from './Components/RegisterRoundtable';
import RegisterUser from './Components/RegisterUser';

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
        <Route path = "/Login" element = {<Login/>} />

          <Route path="/RegisterUser" element={<RegisterUser/>}/>

        <Route path = "*" element = {<div><h2>404 Page Not Found</h2></div>
        } />
  </Routes>
  </>
  );
}

export default App;
