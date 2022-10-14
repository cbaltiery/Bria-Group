import './App.css';
import { Route, Routes } from 'react-router-dom'

import Home from './Components/Home'
import MissionPage from './Components/MissionPage'
import ModelPage from './Components/ModelPage'
import Login from './Components/Login'
import RegisterGarden from './Components/RegisterGarden'
import RegisterRoundtable from './Components/RegisterRoundtable'
import RegisterUser from './Components/RegisterUser'
import DisplayGarden from './Components/DisplayGarden';
import Header from './Components/Header';
import Footers from './Components/Footers';


function App() {

  return (
  <>
  <Header/>
  <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/Home" element = {<Home/>} />
        <Route path = "/MissionPage" element = {<MissionPage/>} />
        <Route path = "/ModelPage" element = {<ModelPage/>} />
        <Route path = "/DisplayGarden" element = {<DisplayGarden/>}/>
        <Route path = "/RegisterGarden" element = {<RegisterGarden/>} />
        <Route path = "/GardenBio" element = {<GardenBio/>} />
        <Route path = "/RegisterRoundtable" element = {<RegisterRoundtable/>} />
        <Route path = "/Login" element = {<Login/>} />
        <Route path="/RegisterUser" element={<RegisterUser/>}/>
        <Route path = "*" element = {<div><h2>404 Page Not Found</h2></div>
        } />
  </Routes>
  <Footers/>
  </>
  );
}

export default App;
