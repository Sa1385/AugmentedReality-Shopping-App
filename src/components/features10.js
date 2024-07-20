import React from 'react'

import PropTypes from 'prop-types'

import './features10.css'

const Features10 = (props) => {
  return (
    <div className="features10-layout300 thq-section-padding">
      <div className="features10-max-width thq-flex-column thq-section-max-width">
        <div className="features10-section-title thq-flex-column">
          <span className="thq-body-small">{props.slogan}</span>
          <h2 className="thq-heading-2 features10-text1">
            {props.sectionTitle}
          </h2>
          <p className="features10-text2 thq-body-large">
            {props.sectionDescription}
          </p>
        </div>
        <div className="features10-content thq-grid-auto-300">
          <div className="features10-feature1 thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="features10-feature1-title thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="thq-body-small">{props.feature1Description}</span>
          </div>
          <div className="features10-feature2 thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">{props.feature2Title}</h3>
            <span className="thq-body-small">{props.feature2Description}</span>
          </div>
          <div className="features10-feature3 thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">{props.feature3Title}</h3>
            <span className="thq-body-small">{props.feature3Description}</span>
          </div>
        </div>
        <div className="features10-actions thq-flex-row">
          <button className="features10-button thq-button-filled">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="features10-button1 thq-button-outline">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features10.defaultProps = {
  sectionTitle: 'Key Features',
  mainAction: 'Choose Your Plan',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1517502166878-35c93a0072f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5NDczOHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading: 'Discover the possibilities with our app',
  feature1Title: 'Virtual Try-On',
  sectionDescription:
    'Explore the exciting features that our AR-enabled app offers',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1642415314611-3439fb991d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5NDczOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5NDczOHw&ixlib=rb-4.0.3&q=80&w=1080',
  secondaryAction: 'Learn More',
  slogan: 'Try before you buy, virtually!',
  feature2ImageAlt: 'Advanced AR Effects Image',
  feature3ImageAlt: 'Customizable Avatars Image',
  feature2Description:
    'Access advanced augmented reality effects to enhance your virtual shopping experience',
  feature2Title: 'Advanced AR Effects',
  feature1Description:
    'Try on clothes, accessories, and home decor virtually before making a purchase',
  feature3Title: 'Customizable Avatars',
  feature3Description:
    'Create and customize your own avatar to see how products look on you',
  feature1ImageAlt: 'Virtual Try-On Image',
}

Features10.propTypes = {
  sectionTitle: PropTypes.string,
  mainAction: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  heading: PropTypes.string,
  feature1Title: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.string,
  slogan: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features10
