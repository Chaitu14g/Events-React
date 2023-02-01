import {Component} from 'react'
import EventItem from '../EventItem'
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const registrationStatusState = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  notRegistered: 'YET_TO_REGISTER',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

class Events extends Component {
  state = {status: registrationStatusState.initial, clickedId: ''}

  onEventClicked = id => {
    const statusValueObject = eventsList.filter(eachItem => eachItem.id === id)
    const statusValue = statusValueObject[0].registrationStatus
    let status
    switch (statusValue) {
      case 'REGISTERED':
        status = registrationStatusState.registered
        break
      case 'YET_TO_REGISTER':
        status = registrationStatusState.notRegistered
        break
      case 'REGISTRATIONS_CLOSED':
        status = registrationStatusState.registrationClosed
        break
      default:
        status = registrationStatusState.initial
    }
    this.setState({
      status,
      clickedId: id,
    })
  }

  render() {
    const {status, clickedId} = this.state
    return (
      <div className="backgroundMainContainer">
        <div className="firstContainer">
          <h1 className="firstContainerHeading">Events</h1>
          <ul className="firstContainerList">
            {eventsList.map(eachItem => (
              <EventItem
                key={eachItem.id}
                eachItem={eachItem}
                onEventClicked={this.onEventClicked}
                clickedId={clickedId}
              />
            ))}
          </ul>
        </div>
        <ActiveEventRegistrationDetails status={status} />
      </div>
    )
  }
}

export default Events
