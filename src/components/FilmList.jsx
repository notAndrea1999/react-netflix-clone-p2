import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
const URL = "http://www.omdbapi.com/?apikey=74580c0c&s=";

const FilmList = (props) => {
  // state = {
  //   filmsList: [],
  //   working: false,
  // };

  // componentDidMount = () => {
  //   this.handleFetch();
  // };

  const [filmList, setFilmList] = useState([]);
  const [working, setWorking] = useState(false);

  const handleFetch = async () => {
    const response = await fetch(URL + props.genre);
    const data = await response.json();
    const films = await data.Search;
    // console.log(films);
    const slicedFilms = await films.slice(0, 6);
    setFilmList(slicedFilms);
    setWorking(true);
  };

  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid>
      <Row style={{ backgroundColor: "#221F1F" }}>
        <h4 className="text-start text-light mt-2 mb-0">{props.title}</h4>
        {!working && <Spinner animation="border" variant="info" className="ms-2" role="status"></Spinner>}
        {filmList.map((film, index) => (
          <Col className="col-6 col-sm-4 col-md-4 col-lg-2 gy-3 px-2" key={index}>
            <Link to={"/movie/details/" + film.imdbID}>
              <Card style={{ backgroundColor: "#221f1f", border: "none" }}>
                <Card.Img style={{ height: "400px", objectFit: "contain" }} fluid src={film.Poster} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FilmList;
