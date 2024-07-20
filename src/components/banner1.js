import React from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div className="banner1-container thq-section-padding">
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container1">
          <h2 className="banner1-title thq-heading-2">{props.heading1}</h2>
          <h3 className="banner1-text thq-heading-3">{props.content1}</h3>
        </div>
        <button type="button" className="thq-button-filled">
          {props.action1}
        </button>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  content1:
    'Try on clothes, accessories, and home decor virtually before making a purchase',
  action1: 'Browse Products',
  heading1: 'Experience the Future of Shopping with AR Technology',
}

Banner1.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Banner1
