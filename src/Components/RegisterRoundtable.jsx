import { FormGroup, Form, Input, Label, FormText, Button } from "reactstrap";
import { useState } from "react";

const RegisterRoundtable = (props) => {
    const states = require("../assets/states.json")
    const [Image, setImage] = useState("")


    
    async function handleSubmit(e){
        e.preventDefault();
        console.log("button Clicked")
    }

    async function uploadImage(e){
      debugger
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset","Images");
      const res = await fetch(
        "http://api.cloudinary.com/v1_1/de76onwdh/image/Briaupload",
      {
        method:"POST",
        body: data
      }
      )
      
      const File = await res.json()

      console.log(File.secure_url)
      setImage(File.secure_url)
      
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
          <Input type="file" id="roundtable-photo" onChange={uploadImage}/>
          <FormText color="muted">
            Upload a picture of your greenspace.
          </FormText>
        </FormGroup>
        <Button onClick={() => {
          handleSubmit()
        }}>Submit</Button>
    </Form>
    <div>{Image}</div>
    
    </> 
    );
}
 
export default RegisterRoundtable;