import React from 'react'

import PropTypes from 'prop-types'

import './navbar1.css'

const Navbar1 = (props) => {
  return (
    <header className="navbar1-container">
      <header data-thq="thq-navbar" className="navbar1-navbar-interactive">
        <a
          href="https://www.google.com/imgres?q=augmented%20reality%20logo&amp;imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F03%2F17%2F22%2F25%2F360_F_317222511_StkhUaQsYzY14GPdEHmICq5iK40PGnhZ.jpg&amp;imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Daugmented%2Breality%2Blogo&amp;docid=VjdFymmEP0VEPM&amp;tbnid=0rzE5ty7_-g0CM&amp;vet=12ahUKEwi0k_CfmLOHAxXnZvUHHRPnD9oQM3oECHsQAA..i&amp;w=540&amp;h=360&amp;hcb=2&amp;ved=2ahUKEwi0k_CfmLOHAxXnZvUHHRPnD9oQM3oECHsQAA"
          target="_blank"
          rel="noreferrer noopener"
          className="navbar1-link"
        >
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar1-image1"
          />
        </a>
        <div data-thq="thq-navbar-nav" className="navbar1-desktop-menu">
          <nav className="navbar1-links">
            <span className="thq-link thq-body-small">{props.link1}</span>
            <span className="thq-link thq-body-small">{props.link2}</span>
            <span className="thq-link thq-body-small">{props.link3}</span>
            <span className="thq-link thq-body-small">{props.link4}</span>
            <span className="thq-link thq-body-small">{props.link5}</span>
          </nav>
          <div className="navbar1-buttons">
            <button className="navbar1-action1 thq-button-filled thq-button-animated">
              <span className="thq-body-small">Action 1</span>
            </button>
            <button className="navbar1-action2 thq-button-outline thq-button-animated">
              <span className="thq-body-small">Action 2</span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar1-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar1-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar1-mobile-menu">
          <div className="navbar1-nav">
            <div className="navbar1-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar1-logo"
              />
              <div data-thq="thq-close-menu" className="navbar1-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar1-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar1-links1">
              <span className="thq-link thq-body-small">{props.link1}</span>
              <span className="thq-link thq-body-small">{props.link2}</span>
              <span className="thq-link thq-body-small">{props.link3}</span>
              <span className="thq-link thq-body-small">{props.link4}</span>
              <span className="thq-link thq-body-small">{props.link5}</span>
            </nav>
            <div className="navbar1-buttons1">
              <button className="thq-button-filled">{props.action1}</button>
              <button className="thq-button-outline">{props.action2}</button>
            </div>
          </div>
          <div className="navbar1-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-x-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar1.defaultProps = {
  action2: 'Action 2',
  action1: 'Action 1',
  link3: 'Features',
  link2: 'Products',
  link4: 'Pricing',
  logoSrc: '/images-1500h.jpeg',
  link1: 'Home',
  logoAlt: 'AR Shopping App Logo',
  link5: 'Contact',
}

Navbar1.propTypes = {
  action2: PropTypes.string,
  action1: PropTypes.string,
  link3: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  logoSrc: PropTypes.string,
  link1: PropTypes.string,
  logoAlt: PropTypes.string,
  link5: PropTypes.string,
}

export default Navbar1
