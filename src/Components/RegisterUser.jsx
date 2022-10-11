import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Endpoints } from "./endPoints";

const RegisterUser = (props) => {

    
        const [userName, setUsername] = useState("");
        const [displayName, setDisplayname] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("");
      
        async function handleSubmit(e) {
          e.preventDefault();
          console.log("signup clicked");
      
          let bodyObject = JSON.stringify({
            userName: userName,
            email:email,
            displayName: displayName,
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
            const response = await fetch(Endpoints.user.signup, requestOptions);
            const data = await response.json();
            props.updateToken(data.token);
          } catch (error) {
            console.error(error);
          }
        }

    return ( <>
    <div>
        <h1>Register </h1>
        <Form onSubmit={handleSubmit}>

             <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    placeholder="Username*"
                    name="username"
                    value={userName}
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="displayname">DisplayName</Label>
                <Input
                    onChange={(e) => {
                        setDisplayname(e.target.value);
                    }}
                    placeholder="Display Name*"
                    name="displayname"
                    value={displayName}
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="Email*"
                    name="email"
                    value={email}
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="Password*"
                    name="password"
                    value={password}
                />
            </FormGroup>

            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
    </div>
    </> );
    }
 
export default RegisterUser