import React from 'react';
// import sections
import Landing from '../components/sections/Landing';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Landing className=""/>
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="" />
      {/* <Testimonial topDivider /> */}
      <Cta split />
    </>
  );
}

export default Home;