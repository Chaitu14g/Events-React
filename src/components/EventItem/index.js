import './index.css'

const EventItem = props => {
  const {eachItem, onEventClicked, clickedId} = props
  const {id, imageUrl, name, location} = eachItem
  const onEventClick = () => {
    onEventClicked(id)
  }

  const highLight = clickedId === id ? 'highlight' : ''

  return (
    <li className="imageContainer">
      <button type="button" className="uselessBtn">
        <img
          alt="event"
          src={imageUrl}
          className={`imageContainerImage ${highLight}`}
          onClick={onEventClick}
        />
      </button>
      <p className="imageContainerHeading">{name}</p>
      <p className="imageContainerPara">{location}</p>
    </li>
  )
}

export default EventItem
