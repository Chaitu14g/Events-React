import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const returnInitialContainer = () => (
    <p className="returnInitialContainer">
      Click on an event, to view its registration details
    </p>
  )

  const returnYetContainer = () => (
    <div className="returnYetContainer">
      <img
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="returnYetContainerImage"
      />
      <p className="returnYetContainerPara">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="returnYetContainerButton" type="button">
        Register Here
      </button>
    </div>
  )

  const returnRegisterContainer = () => (
    <div className="returnYetContainer">
      <img
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="returnRegisterContainerImage"
      />
      <h1 className="returnRegisterContainerHeading">
        You have already registered for the event
      </h1>
    </div>
  )

  const returnClosedContainer = () => (
    <div className="returnYetContainer">
      <img
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="returnYetContainerImage"
      />
      <h1 className="returnRegisterContainerHeading">
        Registrations Are Closed Now!
      </h1>
      <p className="returnYetContainerPara">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  let answer
  switch (status) {
    case 'REGISTERED':
      answer = returnRegisterContainer()
      break
    case 'YET_TO_REGISTER':
      answer = returnYetContainer()
      break
    case 'REGISTRATIONS_CLOSED':
      answer = returnClosedContainer()
      break
    default:
      answer = returnInitialContainer()
  }

  return <div className="secondContainer">{answer}</div>
}

export default ActiveEventRegistrationDetails
