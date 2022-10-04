import { Container, Row, Col, FormGroup, Form, Input, Label, FormText, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const RegisterGarden = (props) => {
    const states = require("../assets/states.json")

    async function handleSubmit(e){
        e.preventDefault();
        console.log("button Clicked")
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
            <Label for="garden-display-name">Garden Display Name</Label>
            <Input type="text" id="garden-display-name" placeholder="Input Garden Name" />
        </FormGroup>

        <FormGroup>
            <Label for="garden-short-name">Garden Short Name</Label>
            <Input type="text" id="garden-short-name" placeholder="Input Garden Short Name" />
        </FormGroup>

        <FormGroup>
          <Label for="garden-activate">How will you be activating your garden?</Label>
          <Input type="select" id="garden-activate">
            <option>Document Bloom Times to help track climate change</option>
            <option>Design a beautiful garden</option>
            <option>Go beyond "Native</option>
            <option>Create native pollinator gardens</option>
            <option>Have a garden consultation with a botanist</option>
            <option>Install educational garden signage</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="state">State</Label>
          <Input type="select" id="state">
                <option>[placeholder 1]</option>
          </Input>
        </FormGroup>

        <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" id="city" placeholder="Input City" />
        </FormGroup>

        <FormGroup>
            <Label for="zip-code">Zip Code</Label>
            <Input type="text" id="zip-code" placeholder="Input Zip Code" />
        </FormGroup>

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