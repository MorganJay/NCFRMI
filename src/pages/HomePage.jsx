import React from "react";

import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Testimonials } from "../components/testimonials";
import { Contact } from "../components/contact";
import WhatWeDo from "./../components/whatwedo";

const HomePage = ({ landingPageData }) => {
  return (
    <>
      <Navigation data={landingPageData.Header} />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <WhatWeDo data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </>
  );
};

export default HomePage;
