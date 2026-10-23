import Movie1 from "../../assets/images/movie10.png";
import Movie2 from "../../assets/images/movie11.png";
import Movie3 from "../../assets/images/movie12.png";
import Movie4 from "../../assets/images/movie13.png";
import Movie5 from "../../assets/images/movie14_15.png";
import { BoxMovie } from "./boxMovie";
import { Top10 } from "./textMovieImage";

export function Trending() {
  return (
    <div className="movies">
      <h3 className="heading-3">Film Trending</h3>
      <div className="movie-list">
        <div className="box">
          <BoxMovie movieImg={Movie1} textTop10={<Top10 />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie2} textTop10={<Top10 />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie3} textTop10={<Top10 />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie4} textTop10={<Top10 />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie5} textTop10={<Top10 />} />
        </div>
      </div>
    </div>
  );
}
