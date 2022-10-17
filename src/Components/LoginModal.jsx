import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate, Routes, Route, } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Endpoints } from './endPoints';
import "./Modals/loginModal.css"

function LoginModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const navigateToRegisterUser = () => {
    navigate('/RegisterUser')
  };
  
  function refreshPage() {
    // Required to ensure that the page reloads with the local token, changes the appearence of the login button.
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("login clicked");
    // Navigate can be used to automatically return to home page after successful login.
    // refreshPage()
    // navigate("/Home")

    let bodyObject = JSON.stringify({
      email: email,
      password: password,
    });

    let myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: bodyObject,
    };

    try {
      const response = await fetch(Endpoints.user.login, requestOptions);
      const data = await response.json();
      localStorage.setItem("token", data.token)
      console.log(data) 
      props.updateToken(data.token)
      props.toggleModal()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Modal show={true} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="Email">E-mail</Label>
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                name="Email"
                value={email}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="password"
                name="password"
                value={password}
              />
            </FormGroup>
            <Button type="submit">Log In</Button>
            <h4>Not a member?</h4>
            <button onClick={navigateToRegisterUser}>Sign Up!</button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal