import './index.css'

const NavBar = props => {
  const {score, topScore, result} = props
  const RenderScoreBoard = () => {
    if (result === '') {
      return (
        <div className="scoreboard">
          <p className="score">Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )
    }
    return null
  }
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-title">Emoji Game</h1>
      </div>
      <RenderScoreBoard />
    </nav>
  )
}

export default NavBar
