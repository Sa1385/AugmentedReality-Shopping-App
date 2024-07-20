import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <a
          href="https://www.google.com/imgres?q=augmented%20reality%20logo&amp;imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F03%2F17%2F22%2F25%2F360_F_317222511_StkhUaQsYzY14GPdEHmICq5iK40PGnhZ.jpg&amp;imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Daugmented%2Breality%2Blogo&amp;docid=VjdFymmEP0VEPM&amp;tbnid=0rzE5ty7_-g0CM&amp;vet=12ahUKEwi0k_CfmLOHAxXnZvUHHRPnD9oQM3oECHsQAA..i&amp;w=540&amp;h=360&amp;hcb=2&amp;ved=2ahUKEwi0k_CfmLOHAxXnZvUHHRPnD9oQM3oECHsQAA"
          target="_blank"
          rel="noreferrer noopener"
          className="navbar-link"
        >
          <img
            alt={props.logoAlt}
            src="/images-1500h.jpeg"
            className="navbar-image1"
          />
        </a>
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links">
            <span className="thq-link thq-body-small">{props.link1}</span>
            <span className="thq-link thq-body-small">{props.link2}</span>
            <span className="thq-link thq-body-small">{props.link3}</span>
            <span className="thq-link thq-body-small">{props.link4}</span>
            <span className="thq-link thq-body-small">{props.link5}</span>
          </nav>
          <div className="navbar-buttons">
            <button className="navbar-action1 thq-button-filled thq-button-animated">
              <span className="thq-body-small">Action 1</span>
            </button>
            <button className="navbar-action2 thq-button-outline thq-button-animated">
              <span className="thq-body-small">Action 2</span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links1">
              <span className="thq-link thq-body-small">{props.link1}</span>
              <span className="thq-link thq-body-small">{props.link2}</span>
              <span className="thq-link thq-body-small">{props.link3}</span>
              <span className="thq-link thq-body-small">{props.link4}</span>
              <span className="thq-link thq-body-small">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar-buttons1">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  action2: 'Navigate to Shop page',
  link3: 'Try On',
  logoAlt: 'AR Shopping App Logo',
  action1: 'Navigate to Home page',
  link5: 'Account',
  link1: 'Home',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link4: 'Cart',
  link2: 'Shop',
}

Navbar.propTypes = {
  action2: PropTypes.string,
  link3: PropTypes.string,
  logoAlt: PropTypes.string,
  action1: PropTypes.string,
  link5: PropTypes.string,
  link1: PropTypes.string,
  logoSrc: PropTypes.string,
  link4: PropTypes.string,
  link2: PropTypes.string,
}

export default Navbar
