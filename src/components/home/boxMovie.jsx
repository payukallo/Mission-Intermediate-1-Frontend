export function BoxMovie(props) {
  const { movieImg, text, movieTitle, movieRating } = props;
  return (
    <>
      <img src={movieImg} alt="" />
      <div>
        {text}
        <p className="text-left-down heading-6">{movieTitle}</p>
        <p className="text-right-down body-small-regular">{movieRating}</p>
      </div>
    </>
  );
}
