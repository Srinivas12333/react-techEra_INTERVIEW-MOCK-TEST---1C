import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="notfound-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="notfound-heading">Page Not Found </h1>
      <p className="notfound-info">
        We are sorry, the page you requested could not be found
      </p>
      <button className="button" type="button">
        Retry
      </button>
    </div>
  </>
)

export default NotFound
