// Write your code here.
import './index.css'

const Navbar = props => {
  const {tscore, score, t} = props

  

  return (
    <div className=" ro">
      <div className="car">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="mg"
        />
        <h1>Emoji Game</h1>
      </div>

  {t?<div className='car'>
        <p>Score: {score}</p>
        <p>Top Score: {tscore}</p>
      </div>:''}
    </div>
  )
}
export default Navbar
