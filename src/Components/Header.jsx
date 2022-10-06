import React, {useEffect, useState} from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { NavLink, Route, Routes } from 'react-router-dom';
import MemberGarden from "./MemberGarden";
import MissionPage from "./MissionPage";
import ModelPage from "./ModelPage";



const Header = (props) => {
    let activeStyle = {color: "red"}
    let inActiveStyle = {textDecoration: "none"}
    
    return ( <>
    <h4 style={{'backgroundColor' : 'grey', 'color' : 'white'}}>BOTANICAL RESEARCH INSTITUTES OF AMERICA.</h4>
    <h2>bria</h2>
    <input type="text" placeholder="Email*" /><button >Join BRIA</button>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">bria</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="MissionPage.jsx">mission <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="ModelPage.jsx">model</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          member gardens
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="RegisterGarden.jsx">register a garden</a>
          <a class="dropdown-item" href="#">garden accreditation</a>
          <a class="dropdown-item" href="#">sample garden web page</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">LOGIN</a>
      </li>
    </ul>
  </div>
</nav>

    
    </> );
}
 
export default Header;