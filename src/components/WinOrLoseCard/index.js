// Write your code here.
import './index.css'

const Winlose = props => {
  const {det, cl} = props

  const getimg =
    det === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const text = det === 12 ? 'You Won' : 'You Lose'

  const sc = det === 12 ? 'Best Score' : 'Score'

  const back = () => {
    cl()
  }

  console.log(det)

  return (
    <div className="win">
      <div className="winlos">
        <h1 className="h">{text}</h1>
        <p className="h1">{sc}</p>
        <p className="p">{det}/12</p>
        <button type="button" className="but" onClick={back}>
          Play Again
        </button>
      </div>
      <div>
        <img src={getimg} alt="win or lose" className="gg" />
      </div>
    </div>
  )
}

export default Winlose
