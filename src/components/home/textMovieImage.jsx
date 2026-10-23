

export function NewEpisode() {
  return <p className="text-left-up body-small-bold">Episode Baru</p>;
}

export function Top10() {
  return <p className="text-right-up body-small-regular">Top 10</p>;
}

export function MovieRating(props) {
  const {movieRating} = props
  return <p className="text-right-down body-small-regular">&#9733;&nbsp;{movieRating}</p>;
}