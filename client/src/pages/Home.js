import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

import { CONTENT_BACKGROUND_GRAY, MAX_BLUE, MAX_DARK, MAX_WHITE } from "../colors"
import { HOMEPAGE_BUTTON } from "../styles"



const Home = () => {
  return(
    <div style={{ height: '90vh', padding: '1em'}}>
      <Container >
        <Row style={{paddingTop: '2em', paddingLeft: '1em'}}>
          <Col xs={12} md={{span: 6, offset: 5}}>
            <h1 style={{color:`${MAX_BLUE}`, fontSize: '10em'}}>Max Manayan</h1>
          </Col>
        </Row>

        <Row style={{paddingBottom: '2em', paddingLeft: '2em'}}>
          <Col  xs={12} md={{span: 6, offset: 5}}>
            <h2 style={{color:`${MAX_DARK}`, fontSize: '3em'}}>Software Engineer</h2>
          </Col>
        </Row>

        <Row style={{display: 'flex', justifyContent: 'center'}}>
          <Col  xs={12} md={{span: 6, offset: 5}}>
            <Row>
              <Col xs={12} md={{span: 4}} style={{display: 'flex', justifyContent: 'center'}}>
                <Link to="/portfolio">
                  <Button style={{background:`${MAX_BLUE}`, borderColor:`${MAX_BLUE}`, padding: '1em 3em'}}>Portfolio</Button>
                </Link>
              </Col>
              <Col xs={12} md={{span: 4}} style={{display: 'flex', justifyContent: 'center'}} >
                <Link to="/about">
                  <Button style={{background:`${MAX_BLUE}`, borderColor:`${MAX_BLUE}`, padding: '1em 3em'}}>About</Button>
                </Link>
              </Col>
              <Col xs={12} md={{span: 4}} style={{display: 'flex', justifyContent: 'center'}} >
                <Link to="/connect">
                  <Button style={{background:`${MAX_BLUE}`, borderColor:`${MAX_BLUE}`, padding: '1em 3em'}}>Connect</Button>
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