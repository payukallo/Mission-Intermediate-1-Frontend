import Movie1 from "../../assets/images/movie14_15.png";
import Movie2 from "../../assets/images/movie16.png";
import Movie3 from "../../assets/images/movie9_17.png";
import Movie4 from "../../assets/images/movie8_18.png";
import Movie5 from "../../assets/images/movie19.png";
import { BoxMovie } from "./boxMovie";
import { TextLeftUp, TextRightUp } from "./textMovieImage";

export function NewRelease() {
  return (
    <div className="movies">
      <h3 className="heading-3">Rilis Baru</h3>
      <div className="movie-list">
        <div className="box">
          <BoxMovie movieImg={Movie1} text={<TextRightUp />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie2} text={<TextLeftUp />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie3} text={<TextRightUp />}/>
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie4} text={<TextLeftUp />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie5} />
        </div>
      </div>
    </div>
  );
}
