import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { MAX_BLUE, MAX_DARK, MAX_WHITE } from "../colors"



const Home = () => {
  return(
    <div>
      <Container >
        <Row>
          <Col>
            <h1 style={{color:`${MAX_BLUE}`}}>Max Manayan</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 style={{color:`${MAX_DARK}`}}>Software Engineer</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <Link to="/portfolio">
              <Button style={{background:`${MAX_BLUE}`, borderColor:`${MAX_BLUE}`}}>Portfolio</Button>
            </Link>
          </Col>
          <Col>
            <Link to="/about">
              <Button style={{background:`${MAX_BLUE}`, borderColor:`${MAX_BLUE}`}}>About</Button>
            </Link>
          </Col>
          <Col>
            <Link to="/connect">
              <Button style={{background:`${MAX_BLUE}`, borderColor:`${MAX_BLUE}`}}>Connect</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Home