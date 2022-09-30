import React, {useEffect, useState} from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { NavLink, Route, Routes } from 'react-router-dom';
import MissionPage from "./MissionPage";
import ModelPage from "./ModelPage";


const Header = (props) => {
    return ( <>
    <h4>BOTANICAL RESEARCH INSTIITUTES OF AMERICA.</h4>
    <h2>bria</h2>
    <input type="text" placeholder="Email*" /><button>Join BRIA</button>
    <nav> 
        <ul>
        <li>
            <NavLink to="/MissionPage" style={({isActive}) =>(isActive ? activeStyle : inActiveStyle)}>
                mission
                </NavLink>
        </li>
        <li>
        <NavLink to="/ModelPage" style={({isActive}) =>(isActive ? activeStyle : inActiveStyle)}>
                model
                </NavLink> 
        </li>
        {/* <li>
        <NavLink to="/memberGardens" style={({isActive}) =>(isActive ? activeStyle : inActiveStyle)}>
                member gardens
                </Navlink>
        </li> */}
        {/* <li>
        <NavLink to="/login" style={({isActive}) =>(isActive ? activeStyle : inActiveStyle)}>
                LOGIN
                </Navlink>
        </li> */}
        </ul>
    </nav>

    <Routes>
        <Route path="/mission" element={<MissionPage/>}/>
        <Route path="/model" element={<ModelPage/>}/>
        {/* dropdown for member garden will go here */}
        {/* <Route path="/login" element={<Login/>}/> */}
    </Routes>
    </> );
}
 
export default Header;