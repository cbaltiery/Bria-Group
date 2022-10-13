import React from 'react';
import { Button } from 'reactstrap';
import {Nav} from "react-bootstrap";
import Header from './Header';
import Footers from "./Footers";
import '../App.css'

const GardenBio = (props) => {
    return ( <>
    
    <Header />
    <div className="top">
        <div id="upper-top">
    <h1>Transform your yard into a botanical research garden.</h1>
        </div>
        <div id="middle-top">
            <h3>Transform your property into a botanical research garden with its own unique mission, educational signage, and informational web page.</h3>
        </div>
        <div id="button-top" style={{'marginTop' : '3em'}}>
        <Button color="success" href="/Login">Start by registering here. it's free!</Button>{' '}
        </div>
    </div>
    <div className="bottom" style={{'backgroundColor' : 'forestgreen'}}>
        <div id="upper-bottom">
    <h2 style={{'textAlign': 'center', 'color' : 'white'}}><b>What is a BRIA Botanical Garden?</b></h2>
        </div>
        <div id="middle-bottom">
        <div class="embed-responsive embed-responsive-16by9" style={{'textAlign' : 'center', 'marginTop' : '2em'}}>
  <iframe width="450" height="315" class="embed-responsive-item" src="https://www.youtube.com/embed/CO7oi6TM1QQ" allowfullscreen></iframe>
</div>
        </div>
        <div id="bottom-bottom">
 
            <ul style={{'color' : 'white'}}>
                <li style={{'marginTop' : '1em'}}>Create a true botanical garden with its own unique mission, educational signage, and informational web page.</li>
                <li style={{'marginTop' : '1em'}}>Become part of a network of gardens working together to save the biosphere.</li>
                <li style={{'marginTop' : '1em'}}>Participate in botanical research and conservation projects.</li>
                <li style={{'marginTop' : '1em'}}><b>Go beyond ‘planting native.’</b> Turn your garden into a properly functioning ecological system and safe haven for native plants, birds, animals and insects.</li>
                <li style={{'marginTop' : '1em'}}>Take free courses offered by the Botanical Research Institutes of America.</li>
                <li style={{'marginTop' : '1em'}}>Schedule a consultation with a BRIA Botanist.</li>
            </ul>
            <p style={{'color' : 'white'}}><b><i>Register to be first in line for new programs, and new opportunities to learn and give. Your participation in all BRIA programs is completely voluntary, and you can remove your garden from our members list at any time.</i></b></p>

        </div>
    </div>
    <div className="top" style={{'backgroundColor' : 'rgb(66, 65, 65)'}}>
        <div id="upper-top">
    <h1 style={{'color' : 'white', 'textAlign' : 'center'}}>Register your garden as a BRIA Botanical Garden.</h1>
    <h5 style={{'color' : 'white', 'marginTop' : '2em'}}>Register any garden, large or small, public or private. Registration is free, and there is no commitment. Start small, then grow with BRIA.</h5>
        </div>
        <div id="middle-top">
            <h1 style={{'color' : 'white', 'marginTop' : '10em'}}>STEP 1: Tell us how you would like to activate your garden.</h1>
        </div>
        <div id="button-top">
            <h2 style={{'color' : 'white', 'marginLeft' : '3em', 'marginTop' : '1em'}}><Nav.Link href="/Login">Please <b style={{'color' : 'olive'}}>login or create a new account</b> to register a new garden.</Nav.Link></h2>
        </div>
        </div>
    <Footers />
    
    </> );
}
 
export default GardenBio;