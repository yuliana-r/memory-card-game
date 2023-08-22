/* eslint-disable react/prop-types */
export default function Info(props) {
  return(
    <div className="flex-center rules">
      <p className="instructions">Pounce on the cards to earn yourself pawsitively awesome points.</p>
      <p className="instructions">Don&apos;t chase the same card twice, or you might end up in a meowssive muddle!</p>
      <p className="instructions">Good luck, and may your memory be as sharp as Charlie&apos;s whiskers!</p>
      <div className="scoreboard flex-center">
        <p className="current">Score: {props.score}</p>
        <p className="best">Best: {props.bestScore} </p>
      </div>
    </div>
  )
}