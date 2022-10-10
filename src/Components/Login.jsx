import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Endpoints } from '../Components/endPoints';

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("login clicked");

    let bodyObject = JSON.stringify({
      username: username,
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
      props.updateToken(data.token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Log In</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="username"
            name="username"
            value={username}
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