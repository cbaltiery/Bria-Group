import '../App.css'
import { Container, Nav, Navbar, NavDropdown, Button, Form, InputGroup } from "react-bootstrap"


const Headers = (props) => {
    // let activeStyle = {color: "green"}
    // let inActiveStyle = {textDecoration: "none"}

//! Will have to edit this part below!
    // async function handleClick(e){
    //   e.preventDefault();
    //   const userInput = document.getElementById("userinput")
    //   const messageInput = document.getElementById("messageinput")
    
    //   let bodyObject = JSON.stringify({
    //     emails: {
    //       email:email,
    //     }
    //   })
    // }
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
            <NavDropdown title="member gardens" id="basic-nav-dropdown">
              <NavDropdown.Item href="/RegisterGarden">register a garden</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/RegisterRoundTable">
                register a roundtable 
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.3">garden accredidations</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                public garden page
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/Login"><b>LOGIN</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    {/* <div className="join"> */}
    <InputGroup style={{'width' : '60%', 'float' : 'right'}} className="mb-3">
        <Form.Control
          placeholder="Email*"
          aria-label="Email*"
          aria-describedby="basic-addon2"
        />
        <Button variant="success" id="button-addon2">
          Join BRIA
        </Button>
      </InputGroup>
    {/* </div> */}
    </div>
    </div>
    
    
    </> );
}
 
export default Headers;