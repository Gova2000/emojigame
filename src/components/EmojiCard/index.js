// Write your code here.
import './index.css'

const Emojicard = props => {
  const {det, click} = props

  const {id, emojiName, emojiUrl} = det

  const dlt = () => {
    click(id)
  }

  return (
    <li>
      <button type="button" className="card" onClick={dlt}>
        <img src={emojiUrl} alt={emojiName} className="iimg" />
      </button>
    </li>
  )
}

export default Emojicard
