import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const MemberGarden = (props) => {
  let activeStyle = {color: "red"}
  let inActiveStyle = {textDecoration: "none"}

    return ( 
    <>
    <div>
      <Container>

        <Row>
          <Col>
          <h3>Transform your yard into a botanical research garden.</h3>
          <div>Transform your property into a botanical research garden with its own unique mission, educational signage, and informational web page.</div>
          <NavLink to="/register-page" style={({isActive}) =>(isActive ? activeStyle : inActiveStyle)}>
                [PLACEHOLDER LINK FOR REGISTER GARDEN]
                </NavLink>
          </Col>
        </Row>

        <Row>
          <Col>
          <h3>What is a Bria Botanical Garden?</h3>
          <div>Transform your yard into a botanical garden?</div>
          <ul>
            <li>Create a true botanical garden with its own unique mission, educational signage, and informational web page.</li>
            <li>Become part of a network of gardens working together to save the biosphere.</li>
            <li>Participate in botanical research and conservation projects.</li>
            <li>Go beyond ‘planting native.’ Turn your garden into a properly functioning ecological system and safe haven for native plants, birds, animals and insects.</li>
            <li>Take free courses offered by the Botanical Research Institutes of America.</li>
            <li>Schedule a consultation with a BRIA Botanist.</li>
          </ul>
          <div>Register to be first in line for new programs, and new opportunities to learn and give. Your participation in all BRIA programs is completely voluntary, and you can remove your garden from our members list at any time.</div>
          <NavLink to="/register-page" style={({isActive}) =>(isActive ? activeStyle : inActiveStyle)}>
                [PLACEHOLDER LINK FOR REGISTER GARDEN]
                </NavLink>
          </Col>
        </Row>

        <Row>
          <Col>
          <h2>Register your garden as a BRIA Botanical Garden</h2>
          <div>Register any garden, large or small, public or private. Registration is free, and there is no commitment. Start small, then grow with BRIA.</div>

          <h3>STEP 1: Tell us how you would like to activate your garden.</h3>
          <NavLink to="/register-page" style={({isActive}) =>(isActive ? activeStyle : inActiveStyle)}>
                [PLACEHOLDER LINK FOR REGISTER GARDEN]
                </NavLink>

          </Col>
        </Row>
        
      </Container>
    </div>
    </> 
    );
}
 
export default MemberGarden;