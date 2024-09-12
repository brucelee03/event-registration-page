import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickEventItem = () => {
    onClickEvent(id)
  }

  const eventCardBorderClassName = isActive ? 'event-card-border-style' : ''

  return (
    <li className="event-item-card">
      <button type="button" className="event-btn" onClick={onClickEventItem}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-img ${eventCardBorderClassName}`}
        />
      </button>
      <p className="title">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
