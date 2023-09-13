import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavBar = (props) => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} width="100" height="auto" className="d-inline-block align-middle" alt="Netflix Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-secondary">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#link" className="text-secondary">
              Movies
            </Nav.Link>
            <Nav.Link href="#link" className="text-secondary">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#link" className="text-secondary">
              My List
            </Nav.Link>
          </Nav>
          <i className="bi bi-search text-light me-2"></i>
          <div id="kids" className="text-light">
            KIDS
          </div>
          <i className="bi bi-bell-fill text-light ms-2"></i>
          <i className="bi bi-person-fill text-light ms-2"></i>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
