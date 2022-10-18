import "./showGarden.css"
import { React } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row, Col, ButtonGroup } from "reactstrap"
import ShowGardenCard from "./ShowGardenCard";

// ! not functional at this time - still working on it.

const ShowGarden = (props) => {
    
return (
    <>
    <div className="garden-display-background">
    <div className="garden-display-haze">
    <h1 className="garden-header">Naturalist Gardens</h1>
    <Container id="garden-display-container" fluid>
        <Row id="garden-display-row">
            {props.displayGarden?.garden?.slice(0,6).map((data,index)=> ( 
            <Col key = {index} id ="garden-display-card">
                <Card
                color="success"
                style={{
                    width: '25rem'
                }}
                >
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {data.gardenName}
                    </CardTitle>
                    <CardSubtitle
                    className ="subtitle"
                    tag="h6"
                    >
                    {data.email}
                    </CardSubtitle>
                    
                    <CardText>
                    <ShowGardenCard location = {data.location}/>
                    </CardText>
                       
                    <Button>
                    Visit Garden
                    </Button>
                </CardBody>
                </Card>
            </Col>
                    ))}
        </Row>
    </Container>
    {/* <Button id="more-garden-button" onClick={displayNextFour}>Show More Gardens</Button> */}
    </div>
    </div>
    </> 
    );
}
 
export default ShowGarden;