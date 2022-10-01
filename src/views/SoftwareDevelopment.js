import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';


const SoftwareDevelopment = ({
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
                <span className="" style={{color: '#fff'}}>Software and Application Development</span>
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
            Movis Technology in providing custom software application services including solution integration and offshore IT outsourcing to small and medium sized businesses across the globe
            </h6>
            <p className="m-0" style={{ textAlign: 'left' }}>
            Over the years we have managed to build a solid team of software outsourcing professionals that come from various backgrounds and expand the creative potential of the company. The expertise that they posses embraces a wide range of custom programming skills involving the latest and most effective development technologies for implementing business idea as a software solution. You can rely on us to give your company a cutting edge, as we use the most efficient, flexible and cost-effective approach to software development and at every stage of the development process, from conceptual design to product release, the highest quality standards are maintained. Our extensive communication facilities allow us to keep in touch with our customers.
            </p>
            <p style={{ textAlign: 'left' }}>
              TM Developments successfully managed and implemented a wide variety of projects to cater all kind of business needs ranging from the showcase requirements like Registration of Domain Name & Hosting, Website Designing and Development, Customized Software Development, SEO & Online Marketing, E-Commerce, Graphics Designing, Logo Design, Corporate Training, Product Maintenance and Support, Networking (LAN & Wi-Fi Installation) up to the Data Entry, no job is smaller to us. We are capable of implementing complete global e-business solutions that extend from front office customer relationship management to back office operational applications to platform infrastructure.
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

  export default SoftwareDevelopment;