import BelowNavBar from "./BelowNavBar";
import FilmList from "./FilmList";
import HomeFooter from "./HomeFooter";

const HomePage = (props) => {
  return (
    <>
      <BelowNavBar />
      <FilmList title={"Trending Now"} genre={"lord of the rings"} />
      <FilmList title={"Watch it Again"} genre={"Batman"} />
      <FilmList title={"New Releases"} genre={"harry potter"} />
      <HomeFooter />
    </>
  );
};

export default HomePage;
