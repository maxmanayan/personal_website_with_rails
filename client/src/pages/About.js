import { Card, Col, Container, Image, Row } from "react-bootstrap"
import { MAX_BLUE, MAX_BLUE_OPAQUE, MAX_DARK } from "../colors"
import linkedInLogo from "../images/LI-Logo.png"
import githubLogo from "../images/GitHub_Logo.png"

const About = () => {
  return(
    <>
      <Container>
        <Row style={{display: 'flex', justifyContent: 'flex-start'}}>
          <Col xs={12} md={{span: 6, offset: 6}} >
            <h1 style={{color: `${MAX_BLUE}`, fontSize: '4vw', margin: '3vw 0', fontWeight: 'bold'}}>ABOUT</h1>
            <Card style={{background: `${MAX_BLUE_OPAQUE}`, border: 'none', padding: '1em', margin: '1em'}}>
              <h1 style={{color: `${MAX_DARK}`, fontWeight: 'bold'}}>Hi, I'm Max Manayan!</h1>
              <h5 style={{color: `${MAX_DARK}`}}>
                I am a full-stack engineer with a passion for building applications
                that help improve peoples' day-to-day lives. 
              </h5>
              <h5 style={{color: `${MAX_DARK}`}}>
                Coming from a background in biological sciences, 
                I enjoy learning the intricacies of computer systems and how data is managed throughout applications.
              </h5>
            {/* </Card> */}
            {/* <Card style={{background: 'none', border: 'none', display:'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: '1em', margin: '1em'}}> */}
            <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', padding: '1em', margin: '1em'}}>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/maxmanayan/">
                <Image style={{width: '10em', filter: 'brightness(10em) opacity(90%)', margin: '1em'}} src={linkedInLogo} />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/maxmanayan">
                <Image style={{width: '10em', filter: 'brightness(50%) opacity(90%)', margin: '1em'}} src={githubLogo} />
              </a>
            </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}


export default About