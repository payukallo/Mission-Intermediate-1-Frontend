export function BoxMovie(props) {
  const { movieImg, textNewEpisode, textTop10, textTitle, textRating} = props;
  return (
    <>
      <img src={movieImg} alt="" />
      <div>
        <p className="text-left-down body-small-regular">{textTitle}</p>
        {textNewEpisode}
        {textTop10}
        {textRating}
      </div>
    </>
  );
}
