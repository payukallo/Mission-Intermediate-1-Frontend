import Movie1 from "../../assets/images/movie1.png";
import Movie2 from "../../assets/images/movie2.png";
import Movie3 from "../../assets/images/movie3.png";
import Movie4 from "../../assets/images/movie4.png";
import { BoxMovie } from "./boxMovie";
import { TextLeftUp } from "./textMovieImage";


export function ContinueMovie() {
  return (
    <div className="continue-movies">
      <h3 className="heading-3">Melanjutkan Tonton Film</h3>
      <div className="movie-top">
        <div className="box-top">
          <BoxMovie
          movieImg={Movie1}
          movieTitle={"Don't Look Up"}
          movieRating={" 4.5/5"}
          />
          </div>
          <div className="box-top">
          <BoxMovie
          movieImg={Movie2}
          movieTitle={"All of Us Dead"}
          movieRating={" 4.2/5"}
          />
          </div>
          <div className="box-top">
          <BoxMovie
          movieImg={Movie3}
          text={<TextLeftUp/>}
          movieTitle={"Blue Lock"}
          movieRating={" 4.6/5"}
          />
          </div>
          <div className="box-top">
          <BoxMovie
          movieImg={Movie4}
          movieTitle={"A Man Called Otto"}
          movieRating={" 4.4/5"}
          />
          </div>
      </div>
    </div>
  );
}
