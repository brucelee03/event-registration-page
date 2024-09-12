import './index.css'

const statusConstants = {
  initial: 'INITIAL',
  registrationClose: 'REGISTRATIONS_CLOSED',
  registrated: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const renderIntialRegistrationDetails = () => (
    <div className="initial-container">
      <p className="initial-state-description">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="yet-to-registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-registration-description">
        A live performance brings so much to your relationship with dance. Seing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="registration-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registrated-title">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClose = () => (
    <div className="close-registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-img"
      />
      <h1 className="closing-title">Registrations Are Closed Now!</h1>
      <p className="closing-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (status) {
    case statusConstants.yetToRegister:
      return renderYetToRegister()
    case statusConstants.registrated:
      return renderRegistered()
    case statusConstants.registrationClose:
      return renderRegistrationClose()
    default:
      return renderIntialRegistrationDetails()
  }
}

export default ActiveEventRegistrationDetails
