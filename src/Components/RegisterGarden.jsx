import { Container, Row, Col, FormGroup, Form, Input, Label, FormText, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Endpoints } from "./endPoints";

const RegisterGarden = (props) => {
    const states = require("../assets/states.json")

    const [gardenName, setGardenName] = useState("")
    const [gardenNickname, setGardenNickname] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
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

    return (
/* Require dropdown menu to choose how the person is activating their garden.
1)  Document Bloom Times to help track climate change "Use a free app to help track climate change by snapping photos in your garden"
2)  Grow a endangered species "Increase the genetic diversity of your local native plant populations"
3)  Design a beautiful garden "create strikingly beatutiful beds, show off your garden, or participate in design contests"
4)  Go beyond "Native". "Learn which plant combinations can create micro ecosystems to support wildlife in your garden"
5) Create native pollinator gardens "create pollinator gardens and nurseries"
6) Have a garden consultation with a botanist "an online or in-person" chat with a botanist or ecologist can help you do more with your garden
7) Install educational garden signage "create educational - and interactive garden signage"
8) "What did we miss" [placeholder - would you like to give garden tours, or host a class? Learn botanical drawing? Tell us more about how you'd like to activate your botanical garden]

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
    <h1> Register your Garden </h1>
    <Form>
        <FormGroup>
            <Label for="garden-name">Garden Name</Label>
            <Input 
            type="text" 
            id="garden-name" 
            placeholder="Input Garden Name"
            onChange={(e)=>{setGardenName(e.target.value)}} 
            />
        </FormGroup>

        <FormGroup>
            <Label for="garden-nick-name">Garden Nick Name</Label>
            <Input 
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
            type="text" 
            id="city" 
            placeholder="Input City"
            onChange={(e)=>setCity(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Label for="state">State</Label>
          <Input 
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
          <Input type="file" id="garden-photo" />
          <FormText color="muted">
            Upload a picture of your greenspace.
          </FormText>
        </FormGroup>

        <Button onClick={handleSubmit}>Submit</Button>
    </Form>
    
    </> 
    );
}
 
export default RegisterGarden;