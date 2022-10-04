import { Container, Row, Col, FormGroup, Form, Input, Label, FormText, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const RegisterRoundtable = (props) => {
    const states = require("../assets/states.json")

    async function handleSubmit(e){
        e.preventDefault();
        console.log("button Clicked")
    }



    return (
    <>
    <h1> Register your Roundtable </h1>
    <Form>
        <FormGroup>
            <Label for="roundtable-display-name">Roundtable Display Name</Label>
            <Input type="text" id="roundtable-display-name" placeholder="Input Roundtable Name" />
        </FormGroup>

        <FormGroup>
            <Label for="roundtable-short-name">Roundtable Short Name</Label>
            <Input type="text" id="roundtable-short-name" placeholder="Input Roundtable Short Name" />
        </FormGroup>

        <FormGroup>
          <Label for="roundtable-activate">Conservation</Label>
          <Input type="select" id="roundtable-activate">
            <option>Reseach Score</option>
            <option>Conservation Score</option>
            <option>Education Score</option>
            <option> Money Raised for Conservation</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="roundatble-activate">Registered Gardens</Label>
          <Input type="select" id="roundtable-activate">
            <option>Jr Level I</option>
            <option>Jr Level II</option>
            <option>Jr Level III</option>
            <option>iNaturalist and eBird Data</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="state">City</Label>
          <Input type="select" id="state">
                <option>[placeholder 1]</option>
          </Input>
        </FormGroup>

        <FormGroup>
            <Label for="city">State</Label>
            <Input type="text" id="city" placeholder="Input City" />
        </FormGroup>

        <FormGroup>
            <Label for="zip-code">Zip Code</Label>
            <Input type="text" id="zip-code" placeholder="Input Zip Code" />
        </FormGroup>

        <FormGroup>
          <Label for="roundtable-photo">Upload Garden Photos for Roundtable</Label>
          <Input type="file" id="roundtable-photo" />
          <FormText color="muted">
            Upload a picture of your greenspace.
          </FormText>
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
    </Form>
    
    </> 
    );
}
 
export default RegisterRoundtable;