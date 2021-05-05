import { Col, Container, Row } from "react-bootstrap"
import ContactForm from "../components/ContactForm"


const Connect = () => {
  return(
    <>
    <Container>
      <Row>
        <Col>
          <h1>Connect</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
    </>
  )
}


export default Connect