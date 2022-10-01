import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';


const ContactUs = ({
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
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
  }
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
                <span className="" style={{color: '#fff'}}>Contact US</span>
              </h1>
            </div>
            <div className="landing-figure reveal-from-bottom" data-reveal-value="20px" data-reveal-delay="800">
            </div>
          </div>
        </div>
        
         <div className="container mt-5">
      
      <form onSubmit={onSubmit}>
        <div className="row">
        <div className="mb-3 col-md-6">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        </div>
        <div className="row">
        <div className="mb-3 col-md-6">
          <label className="form-label" htmlFor="subject">
            Subject
          </label>
          <input className="form-control" type="subject" id="subject" required />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label" htmlFor="subject">
            Phone
          </label>
          <input className="form-control" type="subject" id="subject" required />
        </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger mb-2" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
      </section>
    );
  }

  export default ContactUs;