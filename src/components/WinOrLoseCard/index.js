import './index.css'

const WinOrLoseCard = props => {
  const {result, score, topScore, updateScoreBoard} = props
  const onClickPlayAgain = () => {
    updateScoreBoard(score, topScore)
  }

  const resultHeading = result === 'lost' ? 'You Lose' : 'You Won'
  const subHeading = result === 'lost' ? 'Score' : 'Best Score'
  const balloonsImg =
    result === 'lost'
      ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  return (
    <div className="result-card">
      <div className="result-text">
        <h1 className="result-heading">{resultHeading}</h1>
        <p className="best-score">{subHeading}</p>
        <p className="result-score">{score}/12</p>
        <button type="button" className="play-btn" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={balloonsImg} alt="win or lose" className="balloons" />
    </div>
  )
}

export default WinOrLoseCard
