import Movie1 from "../../assets/images/movie1.png";
import Movie2 from "../../assets/images/movie2.png";
import Movie3 from "../../assets/images/movie3.png";
import Movie4 from "../../assets/images/movie4.png";
import { BoxMovie } from "./boxMovie";
import { MovieRating, NewEpisode } from "./textMovieImage";


export function ContinueMovie() {
  return (
    <div className="continue-movies">
      <h3 className="heading-3">Melanjutkan Tonton Film</h3>
      <div className="movie-top">
        <div className="box-top">
          <BoxMovie
          movieImg={Movie1}
          textTitle={"Don't Look Up"}
          textRating={
          <MovieRating 
          movieRating={"4.5/5"}/>}
          />
          </div>
          <div className="box-top">
          <BoxMovie
          movieImg={Movie2}
          textTitle={"All of Us Dead"}
          textRating={
          <MovieRating 
          movieRating={"4.2/5"}/>}
          />
          </div>
          <div className="box-top">
          <BoxMovie
          movieImg={Movie3}
          textNewEpisode={<NewEpisode/>}
          textTitle={"Blue Lock"}
          textRating={
          <MovieRating 
          movieRating={"4.6/5"}/>}
          />
          </div>
          <div className="box-top">
          <BoxMovie
          movieImg={Movie4}
          textTitle={"A Man Called Otto"}
          textRating={
          <MovieRating 
          movieRating={"4.4/5"}/>}
          />
          </div>
      </div>
    </div>
  );
}
