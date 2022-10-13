import '../App.css'
import { useEffect, useState, React } from "react";
import { Container, Nav, Navbar, NavDropdown, Button, Form, InputGroup } from "react-bootstrap"
import { Endpoints } from './endPoints';


const Header = (props) => {

  //  establish whether a token is accessed or not
  const [sessionToken, setSessionToken] = useState("")
  
  useEffect(() => {
    if (localStorage.getItem("token")){
      setSessionToken(localStorage.getItem("token"))
    }
  }, []);

  // Clears token when user logs out
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  // Toggled between Login and Member profile depending on the presence of a token.
  const protectedViewsLogin = () => {
    return localStorage.getItem("token") === sessionToken ?
    <NavDropdown title="Member Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Account-Settings">Account Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Profile-Page">
                Profile Page  
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={clearToken} href="#Log-Out">
                LOGOUT  
              </NavDropdown.Item>
            </NavDropdown>
     : 
    <Nav.Link href="/Login"><b>LOGIN</b></Nav.Link>
  }

  const protectedViewsMember = () => {
    return localStorage.getItem("token") === sessionToken ?
    <NavDropdown title="Member Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/RegisterGarden">register a garden</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
     : 
     <NavDropdown title="member garden's" id="basic-nav-dropdown">
      <NavDropdown.Item href="/GardenBio">Garden Bio</NavDropdown.Item>
     {/* <NavDropdown.Divider /> */}
     {/* <NavDropdown.Item href="#Profile-Page">
       Profile Page  
     </NavDropdown.Item> */}
     {/* <NavDropdown.Divider /> */}
   </NavDropdown>
    
  }


    // let activeStyle = {color: "green"}
    // let inActiveStyle = {textDecoration: "none"}


// ------------- Email Sign up -------------- \\


const [email, setEmail] = useState ("")
const emailinput = document.getElementById("email-input")

    async function handleClick(e){
      e.preventDefault();
      emailinput.value = ("")

      let bodyObject = JSON.stringify(
        {
          email:{
            email:email,
          }
        })

        let myHeaders = new Headers ();
        myHeaders.append("Content-Type", "application/json")


      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: bodyObject
      }
      try {
        const response = await fetch (Endpoints.email.joinMailingList,requestOptions)
        const data = await response.json()
        console.log(data)
      } catch (error) {
        error.error(error)
      }
    }
    return ( <>
    <div className="header">
    <div className="left-header">
    <h5 style={{'backgroundColor' : 'grey', 'color' : 'white', 'opacity': '.6'}}>BOTANICAL RESEARCH INSTITUTES OF AMERICA.</h5>
        <div className="logo">
            <h1 style={{'marginTop': '1em'}}>bria</h1>
        </div>
    </div>
    <div className="right-header">
        <div className="navbar">
    <Navbar bg="success" size="lg">
      <Container>
        <Navbar.Brand href="/home">bria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/MissionPage">mission</Nav.Link>
            <Nav.Link href="/ModelPage">model</Nav.Link>
            {protectedViewsMember()}
            {protectedViewsLogin()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    {/* <div className="join"> */}
    <InputGroup style={{'width' : '60%', 'float' : 'right'}} className="mb-3">
        <Form.Control
          id = "email-input"
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email*"
          aria-label="Email*"
          aria-describedby="basic-addon2"
        />
        <Button variant="success" id="button-addon2" onClick={handleClick}>
          Join BRIA
        </Button>
      </InputGroup>
    {/* </div> */}
    </div>
    </div>
    
    
    </> );
}
 
export default Header;