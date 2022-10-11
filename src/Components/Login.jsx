import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Endpoints } from '../components/endPoints';

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  
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
    refreshPage()
    navigate("/Home")

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
      const response = await fetch(Endpoints.user.loginUser, requestOptions);
      const data = await response.json();
      localStorage.setItem("token", data.token)
      console.log(data) 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Log In</h1>
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
      </Form>
    </div>
  );
}

export default Login;