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
                <span className="" style={{color: '#fff'}}>ERP Solutions</span>
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
            
            </h6>
            <p className="" style={{ textAlign: 'left' }}>
            A new-age software created by top industry experts, We provide the ERP for manufacturing SMEs that wish to scale and optimise their ventures. As an end-to-end manufacturing management software, It automates all key business processes from engineering to production and from quality control to sales.
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