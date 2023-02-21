/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, result: ''}

  clickHistory = []

  emojiClicked = id => {
    if (this.clickHistory.includes(id)) {
      this.setState({result: 'lost'})
    } else {
      this.clickHistory = [...this.clickHistory, id]
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: prevState.score + 1 === 12 ? 'won' : '',
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updateScoreBoard = (score, topScore) => {
    this.setState({
      score: 0,
      topScore: score > topScore ? score : topScore,
      result: '',
    })
    this.clickHistory = []
  }

  render() {
    const {score, topScore, result} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()

    let renderComponent
    if (result === 'won' || result === 'lost') {
      renderComponent = (
        <WinOrLoseCard
          result={result}
          score={score}
          topScore={topScore}
          updateScoreBoard={this.updateScoreBoard}
        />
      )
    } else {
      renderComponent = (
        <ul className="emoji-card-container">
          {shuffledEmojisList.map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              key={eachEmoji.id}
              emojiClicked={this.emojiClicked}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} result={result} />
        <div className="bg-container">{renderComponent}</div>
      </div>
    )
  }
}
export default EmojiGame
