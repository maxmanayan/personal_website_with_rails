import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

import { MAX_BLUE, MAX_DARK } from "../colors"



const Home = () => {
  return(
    <div id="home" >
      <Container>
        <Row style={{paddingTop: '2em'}}>
          <Col xs={12} md={{span: 6, offset: 5}}>
            <h1 style={{color:`${MAX_BLUE}`, fontSize: '10vw', fontWeight: 'bold'}}>Max Manayan</h1>
          </Col>
        </Row>

        <Row style={{paddingBottom: '2em'}}>
          <Col  xs={12} md={{span: 6, offset: 5}}>
            <h2 style={{color:`${MAX_DARK}`, fontSize: '3vw'}}>Software Engineer</h2>
          </Col>
        </Row>

        <Row style={{display: 'flex', justifyContent: 'flex-start'}}>
          <Col  xs={12} md={{span: 6, offset: 5}}>
            <Row>
              <Col xs={12} md={{span: 4}} style={{display: 'flex', justifyContent: 'center'}}>
                <Link to="/portfolio">
                  <Button style={{background:`${MAX_BLUE}`, borderColor:`${MAX_BLUE}`, padding: '1em', width: '10em', margin: '1em', fontWeight: 'bold'}}>Portfolio</Button>
                </Link>
              </Col>
              <Col xs={12} md={{span: 4}} style={{display: 'flex', justifyContent: 'center'}} >
                <Link to="/about">
                  <Button style={{background:`${MAX_BLUE}`, borderColor:`${MAX_BLUE}`, padding: '1em', width: '10em', margin: '1em', fontWeight: 'bold'}}>About</Button>
                </Link>
              </Col>
              <Col xs={12} md={{span: 4}} style={{display: 'flex', justifyContent: 'center'}} >
                <Link to="/connect">
                  <Button style={{background:`${MAX_BLUE}`, borderColor:`${MAX_BLUE}`, padding: '1em', width: '10em', margin: '1em', fontWeight: 'bold'}}>Connect</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Home