import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';


const OurProducts = ({
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
              <span className="" style={{ color: '#fff' }}>Web Design and Development</span>
            </h1>
          </div>
          <div className="landing-figure reveal-from-bottom" data-reveal-value="20px" data-reveal-delay="800">
          </div>
        </div>
      </div>
      <div className="container mt-5" style={{textAlign:'left'}}>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="name">
              Hostel Management System
            </label>
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="email">
              Enterprise Resource Planning
            </label>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="subject">
              E-Commerce
            </label>
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="subject">
              College Management System
            </label>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="subject">
              Inventory Management System
            </label>
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="subject">
              HR and Payroll Management Software
            </label>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="subject">
              Payroll Software
            </label>
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="subject">
              Customer Relationship Management(CRM) Web Portal
            </label>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="subject">
              Agriculture Management Sofware
            </label>
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="subject">
              Shop Management and Billing System
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;