import Movie1 from "../../assets/images/movie5.png";
import Movie2 from "../../assets/images/movie6.png";
import Movie3 from "../../assets/images/movie7.png";
import Movie4 from "../../assets/images/movie8_18.png";
import Movie5 from "../../assets/images/movie9_17.png";
import { BoxMovie } from "./boxMovie";
import { NewEpisode, Top10 } from "./textMovieImage";

export function TopRating() {
  return (
    <div className="movies">
      <h3 className="heading-3">Top Rating Film dan Series Hari Ini</h3>
      <div className="movie-list">
        <div className="box">
          <BoxMovie movieImg={Movie1} textNewEpisode={<NewEpisode />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie2} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie3} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie4} textNewEpisode={<NewEpisode />}  />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie5} textTop10={<Top10 />} />
        </div>
      </div>
    </div>
  );
}
