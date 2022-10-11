import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import Header from './Header';
import Footers from "./Footers";
import '../App.css'

const Home = (props) => {
    return ( <>
    <Header />
    <div className="top">
        <div id="upper-top">
    <h1>Join BRIA, and help save life on earth.</h1>
        </div>
        <div id="middle-top">
            <h3>BRIA is dedicated to bringing the tools of world class botany to every city and town in America. Student or scientist, young or old…we’re building a community with room for all.</h3>
        </div>
        <div id="bottom-top">
            <h1>Let's rescue the biosphere.</h1>
        </div>
        <div id="button-top">
        <Button color="success">Join BRIA. It's free!</Button>{' '}
        </div>
    </div>
    {/* <div className="middle">
        <div className="card">
    <Card style = {{'height' : '500px'}} body inverse color="success">
        <CardTitle style={{'textAlign': 'center'}}><h1>Turn your backyard into a BRIA Botanical Research Garden.</h1></CardTitle>
        <CardText><h3>Our gardens are where we relax and unwind, express our creativity, and bond with nature. And now, they’re where we help save life on earth. Backyard, school yard, church yard, corporate park…any property can become a certified BRIA Botanical Research Garden.  Start small, then grow with BRIA.</h3></CardText>
        <Button style = {{'marginTop' : '70px', 'width' : '250px'}} color="secondary">Learn More</Button>
      </Card>
      </div>
    </div> */}
    <div className="box1">
        <div id="box1">Garden Box</div>
    </div>
    <div className="box2">
    <div id="box2">Roundtable Box</div>
    </div>
    <div className="bottom">
        <div id="upper-bottom">
    <h2 style={{'marginLeft': '2em', 'color' : 'olive'}}><b>Values</b></h2>
        </div>
        <div id="middle-bottom">
            <h1 style={{'color' : 'olive'}}><b>We believe that there is no greater legacy to leave our children than earth’s biodiversity, intact.</b></h1>
        </div>
        <div id="bottom-bottom">
            <h3 style={{'color' : 'olive', 'marginTop' : '2em'}}>We believe that, given the right tools, <b>the young, the elderly, the disenfranchised, the underprivileged</b> are not only capable of saving life on earth—they are among the most capable. This is a job for all humanity.</h3>

            <h3 style={{'color' : 'olive', 'marginTop' : '1em'}}>We believe that <b>we must always first seek to uplift each other,</b> because a human who can best help is a human who is whole in spirit.</h3>

            <h3 style={{'color' : 'olive', 'marginTop' : '1em', 'marginBottom' : '2em'}}>We believe that the audacious goal of saving life on earth must be matched by audacious innovation. <b>Experimentation and creativity are our lifeblood.</b></h3>
        </div>
        <div id="button-bottom">
        <Button color="success">Check out our Missions Page!</Button>{' '}
        </div>
    </div>
    <div className="box2">
        <div id="box2">Garden Box</div>
    </div>
    <div className="box1">
    <div id="box1">Roundtable Box</div>
    </div>
    <Footers />
    </> );
}
 
export default Home;