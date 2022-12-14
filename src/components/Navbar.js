import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.Title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.firstcomponent}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

Navbar.propTypes={
    Title:PropTypes.string.isRequired,
    firstcomponent:PropTypes.string.isRequired,
    secondcomponent:PropTypes.string.isRequired
}

Navbar.defaultProps={
    Title:'Title',
    firstcomponent:'HOME',
    secondcomponent:'About US'
}