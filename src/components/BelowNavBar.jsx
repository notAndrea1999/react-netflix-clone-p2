import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const BelowNavBar = () => {
  return (
    <Navbar expand="lg" className="pt-0">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-light fs-3 fw-bold">
          TV Shows
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Genres" id="basic-nav-dropdown" className="border border-light ">
            <NavDropdown.Item href="#action/3.1" className="text-light bg-dark">
              Comedy
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="text-light bg-dark">
              Drama
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="text-light bg-dark">
              Thriller
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <i className="bi bi-grid-fill text-light mx-4 fs-5"></i>
        <i className="bi bi-grid-3x3-gap-fill text-light fs-5"></i>
      </Container>
    </Navbar>
  );
};

export default BelowNavBar;
