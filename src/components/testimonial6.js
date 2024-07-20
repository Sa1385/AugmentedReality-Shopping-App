import React from 'react'

import PropTypes from 'prop-types'

import './testimonial6.css'

const Testimonial6 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial6-max-width thq-section-max-width">
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          className="testimonial6-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide swiper-slide"
            >
              <div className="testimonial6-card">
                <div className="testimonial6-container1">
                  <img
                    alt={props.company1LogoAlt}
                    src="/images-1500h.jpeg"
                    className="testimonial6-logo"
                  />
                </div>
                <p className="testimonial6-text thq-body-large">
                  {props.review1}
                </p>
                <div className="testimonial6-avatar">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial6-avatar-image thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial6-avatar-content">
                    <span className="testimonial6-text01 thq-body-small">
                      {props.author1Name}
                    </span>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial6-card1">
                <img
                  alt={props.company2LogoAlt}
                  src="/images-1500h.jpeg"
                  className="testimonial6-logo1"
                />
                <p className="testimonial6-text03 thq-body-large">
                  {props.review2}
                </p>
                <div className="testimonial6-avatar1">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial6-avatar-image1 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial6-avatar-content1">
                    <span className="testimonial6-text04 thq-body-small">
                      {props.author2Name}
                    </span>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide1 swiper-slide"
            >
              <div className="testimonial6-card2">
                <img
                  alt={props.company3LogoAlt}
                  src={props.company3LogoSrc}
                  className="testimonial6-logo2"
                />
                <p className="testimonial6-text06 thq-body-large">
                  {props.review3}
                </p>
                <div className="testimonial6-avatar2">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial6-avatar-image2 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial6-avatar-content2">
                    <span className="testimonial6-text07 thq-body-small">
                      {props.author3Name}
                    </span>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial6-card3">
                <img
                  alt={props.company4LogoAlt}
                  src={props.company4LogoSrc}
                  className="testimonial6-logo3"
                />
                <p className="testimonial6-text09 thq-body-large">
                  {props.review4}
                </p>
                <div className="testimonial6-avatar3">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial6-avatar-image3 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial6-avatar-content3">
                    <span className="testimonial6-text10 thq-body-small">
                      {props.author4Name}
                    </span>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonial6-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          className="testimonial6-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide2 swiper-slide"
            >
              <div className="testimonial6-card4">
                <img
                  alt={props.company1LogoAlt}
                  src={props.company1LogoSrc}
                  className="testimonial6-logo4"
                />
                <span className="testimonial6-text12 thq-body-large">
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar4">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial6-avatar-image4 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial6-avatar-content4">
                    <span className="testimonial6-text13 thq-body-small">
                      <span>Author Name</span>
                      {props.author1Name}
                    </span>
                    <span className="thq-body-small">
                      Position, Company name
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide3 swiper-slide"
            >
              <div className="testimonial6-card5">
                <img
                  alt={props.company2LogoAlt}
                  src={props.company2LogoSrc}
                  className="testimonial6-logo5"
                />
                <span className="testimonial6-text16 thq-body-large">
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar5">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial6-avatar-image5 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial6-avatar-content5">
                    <span className="testimonial6-text17 thq-body-small">
                      <span>Author Name</span>
                      {props.author2Name}
                    </span>
                    <span className="thq-body-small">
                      Position, Company name
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide4 swiper-slide"
            >
              <div className="testimonial6-card6">
                <img
                  alt={props.company3LogoAlt}
                  src={props.company3LogoSrc}
                  className="testimonial6-logo6"
                />
                <span className="testimonial6-text20 thq-body-large">
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar6">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial6-avatar-image6 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial6-avatar-content6">
                    <span className="testimonial6-text21 thq-body-small">
                      <span>Author Name</span>
                      {props.author3Name}
                    </span>
                    <span className="thq-body-small">
                      <span>Position, Company name</span>
                      {props.author3Position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide5 swiper-slide"
            >
              <div className="testimonial6-card7">
                <img
                  alt={props.company4LogoAlt}
                  src={props.company4LogoSrc}
                  className="testimonial6-logo7"
                />
                <span className="testimonial6-text25 thq-body-large">
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar7">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial6-avatar-image7 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial6-avatar-content7">
                    <span className="testimonial6-text26 thq-body-small">
                      <span>Author Name</span>
                      {props.author4Name}
                    </span>
                    <span className="thq-body-small">
                      <span>Position, Company name</span>
                      {props.author4Position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonial6-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

Testimonial6.defaultProps = {
  author1Position: 'Fashion Blogger',
  author4Alt: 'Image of David Rodriguez',
  author3Src:
    'https://images.unsplash.com/36/X7L5hgFXQZazzPaK3goC_14084990857_88cabf3b6d_o.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5NDY0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  company3LogoSrc: '/images-1500h.jpeg',
  company1LogoAlt: 'Company Logo',
  author3Position: 'Interior Designer',
  author1Name: 'Sarah Johnson',
  author4Position: 'Fashion Designer',
  company4LogoAlt: 'Company Logo',
  review4:
    "As a designer myself, I appreciate the attention to detail in this app. It's a game-changer for the industry.",
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  company4LogoSrc: '/images-1500h.jpeg',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Src:
    'https://images.unsplash.com/photo-1583243552802-94ccb4200150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5NDY0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  review1:
    'I love how realistic the virtual try-on feature is! It has made my online shopping experience so much better.',
  author2Src:
    'https://images.unsplash.com/photo-1527631746610-bca00a040d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5NDY0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Emily Chen',
  author1Alt: 'Image of Sarah Johnson',
  author3Name: 'Emily Chen',
  author4Src:
    'https://images.unsplash.com/photo-1526510747491-58f928ec870f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5NDY0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  company3LogoAlt: 'Company Logo',
  company2LogoAlt: 'Company Logo',
  author2Position: 'Tech Enthusiast',
  author2Alt: 'Image of Michael Lee',
  author2Name: 'Michael Lee',
  author4Name: 'David Rodriguez',
  review2:
    "The AR effects are mind-blowing! It's like having a personal stylist right in my pocket.",
  review3:
    'Trying out furniture virtually before buying has saved me so much time and hassle. Highly recommend!',
}

Testimonial6.propTypes = {
  author1Position: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Src: PropTypes.string,
  company3LogoSrc: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  author3Position: PropTypes.string,
  author1Name: PropTypes.string,
  author4Position: PropTypes.string,
  company4LogoAlt: PropTypes.string,
  review4: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  company4LogoSrc: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  author1Src: PropTypes.string,
  review1: PropTypes.string,
  author2Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Name: PropTypes.string,
  author4Src: PropTypes.string,
  company3LogoAlt: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  author2Position: PropTypes.string,
  author2Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author4Name: PropTypes.string,
  review2: PropTypes.string,
  review3: PropTypes.string,
}

export default Testimonial6
