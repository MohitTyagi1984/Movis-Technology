import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';


const WebsiteDesign = ({
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
                <span className="" style={{color: '#fff'}}>Web Design and Development</span>
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
            <p style={{ textAlign: 'left' }}>
            Movis Technology as a web design company offers, complete web design solutions, where our clients are benefit to have every one of reciprocal solutions under a single umbrella. Our website development company is accomplished of providing high quality; cost-effective; mission-critical. At this knowledge age, knowledge is the key and our knowledge base in latest web designing India technologies, search engine algorithm, global web designing practices etc makes the end product contemporary and revolutionary.
            </p>
            <p style={{ textAlign: 'left' }}>
            A web portal may also be used as a search engine for the users searching for the relevant contents of their interests. Furthermore, it also offers services like linking up with some well-known social sites, e-mail, stock quotes, entertainment content and other information from different databases.

One of the early web portals is MSN, YAHOO!, India times, iGoogle, rediff and so on which not only display the information but also gives the power of customization to customize the page as per the needs of the user. It keeps the track of the choices that are selected from the user and on next visit it arranges those links and choices in a defined format that makes the task simpler and easier for a user to have their relevant data or favorite online links.

Our clients can avail the service for Website Portal Development at affordable prices.


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

  export default WebsiteDesign;