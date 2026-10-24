import { ContinueMovie } from "./continueMovies";
import { NewRelease } from "./newReleaseMovies";
import { Trending } from "./trendingMovies";
import { TopRating } from "./topRatingMovies";

export function ContentMovie() {
  return (
    <div className="content">
      <ContinueMovie />
      <TopRating />
      <Trending />
      <NewRelease />
    </div>
  );
}
