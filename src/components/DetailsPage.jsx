import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTdjMWMwMzRmZjAwMTQwM2Y0ZjEiLCJpYXQiOjE2OTQwODg4NzgsImV4cCI6MTY5NTI5ODQ3OH0.XW49FgQjSHBLNp7b8LzgB31rJ7v9CRGspFQFQ6sAa8s",
  },
};

const DetailPage = () => {
  const params = useParams();
  const filmId = params.id;

  const [films, setFilms] = useState([]);
  const [comments, setComments] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleFetch = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=74580c0c&i=" + filmId);
      const data = await resp.json();
      setFilms(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (event, _id) => {
    event.preventDefault();

    const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/" + _id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTdjMWMwMzRmZjAwMTQwM2Y0ZjEiLCJpYXQiOjE2OTQwODg4NzgsImV4cCI6MTY5NTI5ODQ3OH0.XW49FgQjSHBLNp7b8LzgB31rJ7v9CRGspFQFQ6sAa8s",
      },
    });
  };

  const handleComments = async () => {
    try {
      const commentResp = await fetch(
        "https://striveschool-api.herokuapp.com/api/movies/" + filmId + "/comments",
        options
      );
      const commentData = await commentResp.json();
      console.log(commentData);
      setComments(commentData);
      setIsClicked(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="pb-5">
      <Row className="justify-content-center">
        <Col xs={6}>
          <h1 className="text-light display-4">Dettagli</h1>
          <Card style={{ backgroundColor: "#221f1f", color: "white", border: "2px solid white" }}>
            <Card.Img
              variant="top"
              src={films.Poster}
              height="300px"
              style={{ objectFit: "contain" }}
              className="mt-3"
            />
            <Card.Body>
              <Card.Title className="display-5 fw-medium">{films.Title}</Card.Title>
              <Card.Text className="mb-2">Genere: {films.Genre}</Card.Text>
              <Card.Text>Durata: {films.Runtime}</Card.Text>
              <Card.Text>{films.Plot}</Card.Text>
              <Button variant="primary" onClick={() => handleComments()}>
                Show Comments
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {isClicked ? (
          <Col xs={6}>
            <ListGroup className="text-light">
              <h4 className="display-4">Commenti</h4>
              {comments.map((comment, index) => (
                <ListGroup.Item className=" text-center text-light" style={{ backgroundColor: "#221f1f" }} key={index}>
                  <p className="me-auto">
                    Commento: <span>{comment.comment}</span>
                  </p>
                  <p className="me-auto">
                    Autore: <span>{comment.author}</span>
                  </p>
                  <p className="me-auto">
                    Rate: <span>{comment.rate}</span>
                  </p>

                  <Button
                    onClick={(event) => {
                      handleDelete(event, comment._id);
                    }}
                    className="btn btn-danger"
                  >
                    Elimina
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        ) : (
          <Col xs={6} style={{ marginTop: "75px" }}>
            <Alert variant="info">Clicca il bottone per visulizzare i commenti</Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default DetailPage;
