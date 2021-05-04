import { Nav, Navbar } from "react-bootstrap"
import { MAX_BLUE, MAX_DARK, MAX_WHITE } from "../colors"

const NavBar = () => {
  return(
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" style={{background: `${MAX_DARK}`}}>
        <Navbar.Brand href="/" style={{color: `${MAX_BLUE}`}}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{color: `${MAX_WHITE}`}}>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/portfolio" style={{color: `${MAX_WHITE}`}} >Portfolio</Nav.Link>
            <Nav.Link href="/about" style={{color: `${MAX_WHITE}`}} >About</Nav.Link>
            <Nav.Link href="/connect" style={{color: `${MAX_WHITE}`}} >
              Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}


export default NavBar