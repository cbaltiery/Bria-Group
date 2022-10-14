import "../Components/showGarden.css"
import { React, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row, Col } from "reactstrap"
import ShowGardenCard from "./ShowGardenCard";

// ! not functional at this time - still working on it.

const ShowGarden = (props) => {
    
return (
    <>
    <Container fluid>
        <Row>
            {props.displayGarden?.garden?.map((data,index)=> ( 
            <Col key = {index}>
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
                    Button
                    </Button>
                </CardBody>
                </Card>
            </Col>
                    ))}
        </Row>
    </Container>
    </> );
}
 
export default ShowGarden;