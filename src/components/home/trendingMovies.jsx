import Movie1 from "../../assets/images/movie10.png";
import Movie2 from "../../assets/images/movie11.png";
import Movie3 from "../../assets/images/movie12.png";
import Movie4 from "../../assets/images/movie13.png";
import Movie5 from "../../assets/images/movie14_15.png";
import { BoxMovie } from "./boxMovie";
import { TextLeftUp, TextRightUp } from "./textMovieImage";

export function Trending() {
  return (
    <div className="movies">
      <h3 className="heading-3">Film Trending</h3>
      <div className="movie-list">
        <div className="box">
          <BoxMovie movieImg={Movie1} text={<TextRightUp />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie2} text={<TextRightUp />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie3} text={<TextRightUp />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie4} text={<TextRightUp />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie5} text={<TextRightUp />} />
        </div>
      </div>
    </div>
  );
}
