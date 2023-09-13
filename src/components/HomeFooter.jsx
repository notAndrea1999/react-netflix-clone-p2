import { Button, Col, Container, Row } from "react-bootstrap";

const HomeFooter = (props) => {
  return (
    <Container>
      <Row className="mt-5 gy-2 text-start offset-1">
        <Col className="col-12 text-secondary ">
          <i className="bi bi-facebook me-5 fs-3"></i>
          <i className="bi bi-twitter me-5 fs-3"></i>
          <i className="bi bi-instagram me-5 fs-3"></i>
          <i className="bi bi-youtube me-5 fs-3"></i>
        </Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Audio and Subtitles</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Media Center</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Privacy</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Contact us</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Audio Description</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Investor Relations</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Legal Notices</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Help Center</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Jobs</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Cookie Preferences</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Gift Cards</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Terms of Use</Col>
        <Col className="col-6 col-md-6 col-lg-4 text-secondary">Test</Col>
        <Col className="col-12">
          <Button variant="secondary-outline" className="text-secondary border-secondary mt-1">
            Service Code
          </Button>
        </Col>
        <Col className="col-12">
          <h6 className="text-secondary">© 1997-2022 Netflix, Inc.</h6>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeFooter;
