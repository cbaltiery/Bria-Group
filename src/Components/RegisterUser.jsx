import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Endpoints } from "./endPoints";
import { useNavigate, Routes, Route, } from "react-router-dom";
import "./registerUser.css"

const RegisterUser = (props) => {

    const navigate = useNavigate()
        const [username, setUsername] = useState("");
        // const [displayName, setDisplayname] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("");
      
        function refreshPage() {
            // Required to ensure that the page reloads with the local token, changes the appearence of the login button.
            setTimeout(()=>{
                window.location.reload(false);
            }, 500);
          }

        async function handleSubmit(e) {
          e.preventDefault();
          console.log("signup clicked");
      
          refreshPage()
          navigate("/Home")

          let bodyObject = JSON.stringify({
            username: username,
            email:email,
            // displayName: displayName,
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
            const response = await fetch(Endpoints.user.register, requestOptions);
            const data = await response.json();
            console.log(data)
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
                    value={username}
                />
            </FormGroup>

            {/* <FormGroup>
                <Label htmlFor="displayname">DisplayName</Label>
                <Input
                    onChange={(e) => {
                        setDisplayname(e.target.value);
                    }}
                    placeholder="Display Name*"
                    name="displayname"
                    value={displayName}
                />
            </FormGroup> */}

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

            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    </div>
    </> );
    }
 
export default RegisterUser