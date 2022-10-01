import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';


const EcommerceDevelopment = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'landing section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'landing-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
    return (
      <section
      style={{marginTop: '4rem'}}
        {...props}
        className={outerClasses}
      >
        <div className="container-lg" style={{
        backgroundImage: `url(${require('./../assets/images/aboutus.jpg')})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
          <div className={innerClasses}>
            <div className="landing-content">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                <span className="" style={{color: '#fff'}}>E-Commerce Development</span>
              </h1>
            </div>
            <div className="landing-figure reveal-from-bottom" data-reveal-value="20px" data-reveal-delay="800">
            </div>
          </div>
        </div>
       <div className="container-lg">
        <div className="split-item">
          <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
            <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
            </div>
            <h6 className="mt-0 mb-6" style={{ color: 'black' }}>
            E-Commerce is a crucial part of business in today’s marketplace and possibly the most valuable presence that a company can have on the Internet. As a mesh of ages-old business practices and modern technology, it is one of the fastest-growing and most competitive arenas that there is.
            </h6>
            <p className="m-0" style={{ textAlign: 'left' }}>
            Over the years we have managed to build a solid team of software outsourcing professionals that come from various backgrounds and expand the creative potential of the company. The expertise that they posses embraces a wide range of custom programming skills involving the latest and most effective development technologies for implementing business idea as a software solution. You can rely on us to give your company a cutting edge, as we use the most efficient, flexible and cost-effective approach to software development and at every stage of the development process, from conceptual design to product release, the highest quality standards are maintained. Our extensive communication facilities allow us to keep in touch with our customers.
            </p>
            <p style={{ textAlign: 'left' }}>
            By choosing Movis Technology, you can guarantee that you will have an online storefront that really works. Our highly talented graphic design team will ensure that our clients’ storefronts are engaging and generate a great user-experience. With our expertise in search engine optimization and landing page optimization, we will design a highly visible storefront that capitalizes on the inadequacies of the competition and increases your traffic and ROI.
            </p>
          </div>
          {/* <div className={
            classNames(
              'split-item-image center-content-mobile reveal-from-bottom',
              'split-item-image-fill'
            )}
            data-reveal-container=".split-item">
            <image
              src={require('./../assets/images/aboutus.jpg')}
              alt="Features split 01"
              width={528}
              height={396} />
          </div> */}
        </div>
      </div>
      </section>
    );
  }

  export default EcommerceDevelopment;