import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import hackathonGrader from "../images/Hackathon_Grader.png"
import githubLogo from "../images/GitHub-Mark-120px-plus.png"
import { CONTENT_BACKGROUND_GRAY, MAX_BLUE } from "../colors";

const MyProjects = () => {
  return(
    <div id="portfolio">
      <Container>
        <Row>
          <Col xs={12} md={{span: 6, offset: 6}} >
            <h1 style={{color: `${MAX_BLUE}`, fontSize: '4vw', margin: '3vw 0', fontWeight: 'bold'}}>PORTFOLIO</h1>
            <div>
              <Jumbotron style={{border: 'none', background: `${CONTENT_BACKGROUND_GRAY}`}}>
                <div>
                  <Image 
                    src={hackathonGrader} 
                    rounded
                    style={{
                      width: '100%',
                      height: '10em',
                      objectFit: 'cover',
                    }}/>
                </div>
                <div style={{margin: '1em', display: 'flex'}}>
                  <a className='link' target='_blank' rel="noreferrer" href='https://dpl-hackathon-grader.herokuapp.com/'>
                    <h3 style={{marginRight: '2em'}}>Hackathon Grader</h3>
                  </a>
                  <a target='_blank' rel="noreferrer" href='https://github.com/Matt8728/hackathon_grader'>
                    <Image src={githubLogo} style={{height: '2em'}} />
                  </a>
                </div>
                <div style={{margin: '1em'}}>
                  <p>
                    Hackathon Grader is a streamlined grading system for hackathons.
                    This app is currently being used by DevPoint Labs in Salt Lake City, UT.
                  </p>
                </div>
              </Jumbotron>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default MyProjects