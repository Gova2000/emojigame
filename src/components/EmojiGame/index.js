/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import {Component} from 'react'

import './index.css'

import Emojicard from '../EmojiCard'

import Navbar from '../NavBar'

import Winlose from '../WinOrLoseCard'

// Write your code here.

class EmojiGame extends Component {
  state = {list: [], tog: true, topcount: 0, count: 0}

  endgame = () => {
    const {count, topcount, list} = this.state

    this.setState(prev => ({tog: !prev.tog}))

    if (list.length > topcount) {
      this.setState({topcount: list.length})
    }
  }

  Delete = id => {
    const {list, tog, topcount, count} = this.state

    const {emojisList} = this.props

    const check = list.includes(id)

    if (check) {
      this.setState(prev => ({tog: !prev.tog}))
    } else {
      this.setState(prev => ({count: prev.count + 1}))

      if (emojisList.length - 1 === list.length) {
        this.endgame(emojisList.length)
      }
      this.setState(prev => ({
        list: [...prev.list, id],
      }))
    }
  }

  bak = () => {
    const {count, topcount, list} = this.state

    this.setState(prev => ({tog: !prev.tog}))
    if (list.length > topcount) {
      this.setState({topcount: list.length})
    }

    this.setState({count: 0})
    this.setState({list: []})
  }

  shuffle = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {emojisList} = this.props

    const {list, tog, topcount, count} = this.state

    const emoji = this.shuffle()

    return (
      <div className="main">
        <Navbar tscore={topcount} t={tog} score={count} />
        <div className="cards">
          {tog ? (
            <ul className="ul">
              {emoji.map(each => (
                <Emojicard det={each} key={each.id} click={this.Delete} />
              ))}
            </ul>
          ) : (
            <Winlose det={count} cl={this.bak} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
