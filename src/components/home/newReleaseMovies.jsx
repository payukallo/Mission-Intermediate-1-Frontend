import Movie1 from "../../assets/images/movie14_15.png";
import Movie2 from "../../assets/images/movie16.png";
import Movie3 from "../../assets/images/movie9_17.png";
import Movie4 from "../../assets/images/movie8_18.png";
import Movie5 from "../../assets/images/movie19.png";
import { BoxMovie } from "./boxMovie";
import { NewEpisode, Top10 } from "./textMovieImage";

export function NewRelease() {
  return (
    <div className="movies">
      <h3 className="heading-3">Rilis Baru</h3>
      <div className="movie-list">
        <div className="box">
          <BoxMovie movieImg={Movie1} textTop10={<Top10 />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie2} textNewEpisode={<NewEpisode />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie3} textTop10={<Top10 />}/>
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie4} textNewEpisode={<NewEpisode />} />
        </div>
        <div className="box">
          <BoxMovie movieImg={Movie5} />
        </div>
      </div>
    </div>
  );
}
