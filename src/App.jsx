import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "./components/navigation";
//import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
//import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
//import { Testimonials } from "./components/testimonials";
//import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import ArrowToTop from './components/arrowtotop';
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const scrollRef = useRef(null);
  useEffect(() => {
    setLandingPageData(JsonData);
    if (!scrollRef.current) {
      scrollRef.current = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
        easing: 'easeInOutQuint',         
        updateURL: false,
        offset: function (anchor, toggle) {
          const fixedNavbar = document.getElementById('menu'); 
          return fixedNavbar ? fixedNavbar.offsetHeight : 0;
        }
      });
    }
  }, []);
  return (
    <div>
      <Navigation scrollProp={scrollRef.current} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      {/*<Services data={landingPageData.Services} /> */}
      {/*<Header data={landingPageData.Header} />*/}
      <Gallery data={landingPageData.Gallery} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/*<Team data={landingPageData.Team} />*/}
      <Contact data={landingPageData.Contact} />
      <ArrowToTop />
    </div>
  );
};
export default App;