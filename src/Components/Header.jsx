import "../App.css";
import { useEffect, useState, React } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  InputGroup,
  Alert,
} from "react-bootstrap";
import { Endpoints } from "./endPoints";
import LoginModal from "./LoginModal.jsx";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  //  establish whether a token is accessed or not
  const [sessionToken, setSessionToken] = useState("");
  const [modalState, setModalState] = useState(false);
  function toggleModal() {
    setModalState(!modalState);
  }
  function updateToken(token) {
    setSessionToken(token);
    localStorage.setItem("token", token);
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  function refreshPage() {
    // Refreshes the page after logout 
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
  }

  // Clears token when user logs out
  const navigate = useNavigate()

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  function logOut(){
    clearToken();
    refreshPage();
    navigate("/Home")
  }

  // Login Modal function
  function handleClick() {
    modalState === true ? setModalState(false) : setModalState(true);
  }

  // Toggled between Login and Member profile depending on the presence of a token.
  const protectedViewsLogin = () => {
    return localStorage.getItem("token") === sessionToken ? (
      <NavDropdown title="Member Profile" id="basic-nav-dropdown">
        <NavDropdown.Item href="#Account-Settings">
          Account Settings
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#Profile-Page">Profile Page</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/RegisterGarden">
          Register a garden
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item 
        onClick={logOut} href="#Log-Out">
          LOGOUT
        </NavDropdown.Item>
      </NavDropdown>
    ) : (
      <Button id="login-button" onClick={toggleModal}>Login</Button>
    );
    // <LoginModal state={modalState} handleClick={handleClick} />
  };

  const protectedViewsGarden = () => {
    return localStorage.getItem("token") === sessionToken ? (
      <Nav.Link href="/DisplayGarden" className="nav-button">Gardens</Nav.Link>
    ) : (
      <Nav.Link href="/GardenBio" className="nav-button">Gardens</Nav.Link>
    );
  };

  function AlertDismissibleExample() {
    if (show) {
      return (
        <Alert
          variant="success"
          onClose={() => setShow(false)}
          dismissible
          id="alert-box"
        >
          <Alert.Heading>Submission Successful</Alert.Heading>
        </Alert>
      );
    }
    return (
      <Button variant="success" id="button-addon2" onClick={handleClick}>
        Join BRIA
      </Button>
    );
  }

  // const protectedViewsMember = () => {
  //   return localStorage.getItem("token") === sessionToken ?
  //   <NavDropdown title="Member Profile" id="basic-nav-dropdown">
  //             <NavDropdown.Item href="/RegisterGarden">register a garden</NavDropdown.Item>
  //             {/* <NavDropdown.Divider /> */}
  //           </NavDropdown>
  //    :
  //    <NavDropdown title="member garden's" id="basic-nav-dropdown">
  //     <NavDropdown.Item href="/GardenBio">Garden Bio</NavDropdown.Item>
  //    <NavDropdown.Divider />
  //    <NavDropdown.Item href="#Profile-Page">
  //      Profile Page
  //    </NavDropdown.Item>
  //    <NavDropdown.Divider />
  //  </NavDropdown>

  // }

  // let activeStyle = {color: "green"}
  // let inActiveStyle = {textDecoration: "none"}

  // ------------- Email Sign up -------------- \\

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const emailinput = document.getElementById("email-input");

  async function handleClick(e) {
    e.preventDefault();
    emailinput.value = "";
    setShow(true);

    let bodyObject = JSON.stringify({
      email: {
        email: email,
      },
    });

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: bodyObject,
    };
    try {
      const response = await fetch(
        Endpoints.email.joinMailingList,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      error.error(error);
    }
  }
  return (
    <>
      <div className="header">
        <div className="left-header">
          <h5
            style={{ backgroundColor: "grey", color: "white", opacity: ".6" }}
          >
            BOTANICAL RESEARCH INSTITUTES OF AMERICA.
          </h5>
          <div className="logo">
            <h1 className="briaheadertext" style={{ marginTop: "1em" }}>bria</h1>
          </div>
        </div>
        <div className="right-header">
          <div className="navbar">
            <Navbar bg="success" size="lg" style={{"borderRadius":"0.5rem"}}>
              <Container>
                <Navbar.Brand href="/home" className="nav-button">bria</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/MissionPage" className="nav-button">Mission</Nav.Link>
                    <Nav.Link href="/ModelPage" className="nav-button">Model</Nav.Link>
                    <Nav.Link href="/Accreditation" className="nav-button">Accredidations</Nav.Link>
                    {protectedViewsGarden()}

                    {/* <NavDropdown title="member gardens" id="basic-nav-dropdown">
              <NavDropdown.Item href="/RegisterGarden">register a garden</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/RegisterRoundTable">
                register a roundtable 
              </NavDropdown.Item> */}

                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action/3.3">garden accredidations</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                public garden page
              </NavDropdown.Item> */}
                    {/* </NavDropdown> */}

                    {/* {protectedViewsMember()} */}
                    {protectedViewsLogin()}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          {/* <div className="join"> */}
          <InputGroup style={{ width: "60%", float: "right" }} className="mb-3">
            <Form.Control
              id="email-input"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
              aria-label="Email*"
              aria-describedby="basic-addon2"
            />
            {AlertDismissibleExample()}
          </InputGroup>
          {/* </div> */}
        </div>
      </div>
      {modalState ? (
        <LoginModal toggleModal={toggleModal} updateToken={updateToken} />
      ) : null}
    </>
  );
};

export default Header;
