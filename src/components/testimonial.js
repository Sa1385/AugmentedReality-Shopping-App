import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card">
                <div className="testimonial-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image"
                  />
                  <div className="testimonial-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Src:
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Michael Brown',
  review2:
    'Such a cool app! The AR feature works seamlessly, and it has made my online shopping experience much more interactive.',
  author4Name: 'Michael Brown',
  author1Src:
    'https://images.unsplash.com/photo-1579105728744-9d6b14a45389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwMXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Emily Johnson',
  review1: '5 stars',
  author2Position: 'Tech Enthusiast',
  author4Src:
    'https://images.unsplash.com/photo-1563273941-9b69c469e03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    "I've been using this app for all my outfit planning. It's like having a virtual closet at my fingertips. Love it!",
  content1:
    "I love using this AR shopping app! It's so fun to virtually try on different outfits before deciding what to buy.",
  author1Position: 'Fashion Blogger',
  author2Alt: 'Image of John Doe',
  author3Position: 'Interior Designer',
  author2Name: 'John Doe',
  heading1: 'Testimonials',
  author3Name: 'Emily Johnson',
  author4Position: 'Fashion Influencer',
  review3:
    'As an interior designer, being able to see how furniture looks in a space before purchasing is a game-changer. Highly recommend this app!',
  author1Alt: 'Image of Sarah Smith',
  author1Name: 'Sarah Smith',
}

Testimonial.propTypes = {
  author2Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review2: PropTypes.string,
  author4Name: PropTypes.string,
  author1Src: PropTypes.string,
  author3Alt: PropTypes.string,
  review1: PropTypes.string,
  author2Position: PropTypes.string,
  author4Src: PropTypes.string,
  author3Src: PropTypes.string,
  review4: PropTypes.string,
  content1: PropTypes.string,
  author1Position: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Position: PropTypes.string,
  author2Name: PropTypes.string,
  heading1: PropTypes.string,
  author3Name: PropTypes.string,
  author4Position: PropTypes.string,
  review3: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Name: PropTypes.string,
}

export default Testimonial
