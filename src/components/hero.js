import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-max-width thq-section-padding">
        <div className="hero-content">
          <h1 className="hero-text thq-heading-1">{props.heading1}</h1>
          <p className="hero-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button1">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero-content1">
        <div className="hero-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image01 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image02 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image03 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image04 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image05 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image06 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image07 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image08 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image09 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container1">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image5Src:
    'https://images.unsplash.com/photo-1611548058639-6f0f42940f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'E-Commerce Integration',
  image12Alt: 'Interactive Shopping Experience',
  image8Alt: 'User Interface Design',
  action2: 'Learn More',
  image5Alt: 'Fashion Accessories',
  image11Alt: 'Virtual Fitting Room',
  image1Alt: 'AR Shopping App',
  image9Src:
    'https://images.unsplash.com/photo-1532490389938-2856e3f1560a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1517685025977-5839072a34ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Src:
    'https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Future of Shopping',
  image3Alt: 'Augmented Reality',
  content1:
    "Experience the future of shopping with our AR-enabled app. Try on clothes, accessories, or home decor virtually before making a purchase. Say goodbye to buyer's remorse!",
  image2Src:
    'https://images.unsplash.com/photo-1452626212852-811d58933cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1434434319959-1f886517e1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image9Alt: 'Try Before You Buy',
  image2Alt: 'Virtual Try-On',
  image4Src:
    'https://images.unsplash.com/photo-1496328488450-9c5c5d555148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Online Shopping',
  image10Src:
    'https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Try Before You Buy with AR Shopping',
  action1: 'Download Now',
  image12Src:
    'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Home Decor',
  image3Src:
    'https://images.unsplash.com/photo-1488117382278-329ccc22eecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDUzMjAwMnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero.propTypes = {
  image5Src: PropTypes.string,
  image6Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  action2: PropTypes.string,
  image5Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image8Src: PropTypes.string,
  image11Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  content1: PropTypes.string,
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image7Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image10Src: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  image12Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image3Src: PropTypes.string,
}

export default Hero
