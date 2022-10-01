import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';


const Seo = ({
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
              <span className="" style={{ color: '#fff' }}>Search Engine Optimization</span>
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
              {/* Movis Technology in providing custom software application services including solution integration and offshore IT outsourcing to small and medium sized businesses across the globe */}
            </h6>
            <p className="mb-6" style={{ textAlign: 'left' }}>

              Search Engine Optimization, often referred to as SEO, is a strategic process used to improve a web-site or Web page’s visibility in search engines organic placement, especially on Google.com.
            </p>
            <p>
              Having a website is worthless with SEO, the reason behind this is simple and straight as in today's INTERNET world there are billions of websites then think about the visibility of your website. Basically the whole process of SEO is based on effective content and the list of keywords that are frequently used in searching for particular business. Our professionals have gained expertise in SEO process and work as the requirement needed for a website to make it visible in top search results.
            </p>
            <p className="mb-6" style={{ textAlign: 'left' }}>
              Movis Technology search engine optimization services are unique to the industry with verifiable results. Our SEO team has a track record of improving the authority of a website with strategic on- and offsite Google marketing techniques. , Engaging content is pivotal and our experts can spread your unique online voice across your blog, website pages, social media platforms and so much more. With over 100 full time SEO and digital marketing experts in the United States alone, Movis has positioned itself as the gold standard in the search engine optimization industry.
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

export default Seo;