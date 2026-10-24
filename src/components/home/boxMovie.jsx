export function BoxMovie(props) {
  const { movieImg, newEpisode, top10 } = props;
  return (
    <>
      <img src={movieImg} alt="" />
      <div>
        {newEpisode}
        {top10}
      </div>
    </>
  );
}
