import { Col, Container, Row } from "react-bootstrap"
import { MAX_BLUE } from "../colors"
import ContactForm from "../components/ContactForm"


const Connect = () => {
  return(
    <>
    <Container>
      <Row>
        <Col xs={12} md={{span: 6, offset: 6}}>
          <h1 style={{color: `${MAX_BLUE}`, fontSize: '4vw', margin: '3vw 0', fontWeight: 'bold'}}>CONNECT WITH ME!</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={{span: 6, offset: 6}}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
    </>
  )
}


export default Connect