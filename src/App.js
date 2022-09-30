import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import About from './views/About';
import ContactUs from './views/ContactUs';
import EcommerceDevelopment from './views/EcommerceDevelopment';
import ERPSolutions from './views/ERPSolutions';
import OurProducts from './views/OurProducts';
import Pricing from './views/Pricing';
import Seo from './views/Seo';
import SoftwareDevelopment from './views/SoftwareDevelopment';
import WebsiteDesign from './views/WebsiteDesign';
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/about" component={About} layout={LayoutDefault} />
          <AppRoute exact path="/contactus" component={ContactUs} layout={LayoutDefault} />
          <AppRoute exact path="/ecommerce" component={EcommerceDevelopment} layout={LayoutDefault} />
          <AppRoute exact path="/erpsolutions" component={ERPSolutions} layout={LayoutDefault} />
          <AppRoute exact path="/ourproducts" component={OurProducts} layout={LayoutDefault} />
          <AppRoute exact path="/pricing" component={Pricing} layout={LayoutDefault} />
          <AppRoute exact path="/seo" component={Seo} layout={LayoutDefault} />
          <AppRoute exact path="/softwaredevelopment" component={SoftwareDevelopment} layout={LayoutDefault} />
          <AppRoute exact path="/websitedesign" component={WebsiteDesign} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;