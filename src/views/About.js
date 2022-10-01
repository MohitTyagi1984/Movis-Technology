import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';


const About = ({
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
      style={{ marginTop: '4rem' }}
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
              {/* <span className="" style={{color: '#fff'}}></span> */}
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
              Movis Technology is an independent
              Software Development and Website Designing Company.
            </h6>
            <p className="m-0" style={{ textAlign: 'left' }}>
              Today, we are a well-known entity in the market of Delhi-NCR for our quality, as our tag line says: we are "Committed for Quality".

              Our team of experienced, skilful and knowledgeable personnel having valuable experience in this domain maintains our commitment towards quality & time which enable us to deliver the quality and maintain the standard in the market for IT solutions.

              In the course of the execution of projects, Movis always cares for the customers' budget and as per the latest market developments we put our best efforts in bringing the newest and affordable services for them.

              Due to our ethical business policies, we the "Movis" a Delhi NCR based company is highly appreciated IT company in the market of software for Manufacturing, Construction and Service Industries.
            </p>
            <p style={{ textAlign: 'left' }}>
              Movis Technology successfully managed and implemented a wide variety of projects to cater all kind of business needs ranging from the showcase requirements like Registration of Domain Name & Hosting, Website Designing and Development, Customized Software Development, SEO & Online Marketing, E-Commerce, Graphics Designing, Logo Design, Corporate Training, Product Maintenance and Support, Networking (LAN & Wi-Fi Installation) up to the Data Entry, no job is smaller to us. We are capable of implementing complete global e-business solutions that extend from front office customer relationship management to back office operational applications to platform infrastructure.
            </p>
            <p>
              Our team of experienced, skilful and knowledgeable personnel having valuable experience in this domain maintains our commitment towards quality & time which enable us to deliver the quality and maintain the standard in the market for IT solutions.
            </p>
          </div>
          <div className={
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;