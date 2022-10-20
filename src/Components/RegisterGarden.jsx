import { FormGroup, Form, Input, Label, FormText, Button } from "reactstrap";
import { useState } from "react";
import { Endpoints } from "./endPoints";
import Headers from "./Header";
import '../App.css'

const RegisterGarden = (props) => {
    const states = require("../assets/states.json")

    const [gardenName, setGardenName] = useState("")
    const [gardenNickname, setGardenNickname] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [image, setImage] = useState("")
    const [roundTable,setRoundTable] = useState("")
    const [squareFootage,setSquareFootage] = useState("")

    async function handleSubmit(e){
        e.preventDefault();
        console.log("button Clicked") // Remove from Final code

    let bodyObject = JSON.stringify({
      garden: {
        gardenName:gardenName,
        gardenNickname:gardenNickname,
        city:city,
        state:state,
        roundTable:roundTable,
        squareFootage:squareFootage
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
      const response = await fetch(Endpoints.garden.createGarden,requestOptions)
      const data = await response.json()
      console.log(data) // Remove from final code
    } catch (error) {
      error.error(error)
      
    }
  }

  async function uploadImage(e){
    debugger
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset","Briaupload");
    const res = await fetch(
      "http://api.cloudinary.com/v1_1/de76onwdh/image/upload",
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
    
/* 

Should Contain:ve/
Input fields for the following:
•	My botanical Garden Display Name 
•	My botanical Garden short Name
•	Roundtable  Not auto generated 

•	State 
•	City 
•	Zip-code


An area to upload personal photos of the space. 
*/
    <>
    <div className="register">
    <h1> Register your Garden </h1>
    <Form >
        <FormGroup>
            <Label for="garden-name">Garden Name</Label>
            <Input 
            style={{'width' : '50%', }}
            type="text" 
            id="garden-name" 
            placeholder="Input Garden Name"
            onChange={(e)=>{setGardenName(e.target.value)}} 
            />
        </FormGroup>

        <FormGroup>
            <Label for="garden-nick-name">Garden Nick Name</Label>
            <Input 
            style={{'width' : '50%'}}
            type="text" 
            id="garden-nick-name" 
            placeholder="Input Garden Nick Name"
            onChange={(e)=>{setGardenNickname(e.target.value)}} 
            />
        </FormGroup>

        {/* <FormGroup>
          <Label for="garden-activate">Why are you starting a garden?</Label>
          <Input type="select" id="garden-activate">
            <option>Document Bloom Times to help track climate change</option>
            <option>Design a beautiful garden</option>
            <option>Go beyond "Native</option>
            <option>Create native pollinator gardens</option>
            <option>Have a garden consultation with a botanist</option>
            <option>Install educational garden signage</option>
          </Input>
        </FormGroup> */}

        <FormGroup>
            <Label for="city">City</Label>
            <Input 
            style={{'width' : '50%'}}
            type="text" 
            id="city" 
            placeholder="Input City"
            onChange={(e)=>setCity(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Label for="state">State</Label>
          <Input 
          style={{'width' : '50%'}}
          type="select" 
          id="state"
          onChange={(e)=>{setState(e.target.value)}}
          >
                <option>[Choose State]</option>
                <option>[Vermont]</option>
                <option>[New York]</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="roundtable">Roundtable</Label>
          <Input 
          style={{'width' : '50%'}}
          type="select" 
          id="roundtable"
          onChange={(e)=>{setRoundTable(e.target.value)}}
          >     
                <option>[Choose Roundtable]</option>
                <option>[Roundtable Placeholder 1]</option>
                <option>[Roundtable Placeholder 2]</option>
          </Input>
        </FormGroup>

        <FormGroup>
            <Label for="square-footage">square-footage</Label>
            <Input
            style={{'width' : '50%'}} 
            type="text" 
            id="square-footage" 
            placeholder="Input square-footage"
            onChange={(e)=>setSquareFootage(e.target.value)} />
        </FormGroup>

        {/* <FormGroup>
            <Label for="zip-code">Zip Code</Label>
            <Input type="text" id="zip-code" placeholder="Input Zip Code" />
        </FormGroup> */}

        <FormGroup>
          <Label for="garden-photo">Upload Garden Photo</Label>
          <Input style={{'width' : '50%'}} type="file" id="garden-photo" onChange={uploadImage} />
          <FormText color="black">
            <b>Upload a picture of your greenspace.</b>
          </FormText>
        </FormGroup>

        <Button color="secondary" onClick={handleSubmit}>Submit</Button>
    </Form>

    <img src={image}/>
    </div>
  
    </> 
    );
}
 
export default RegisterGarden;