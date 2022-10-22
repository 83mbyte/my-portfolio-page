import React from "react";

import AboutUs from "./Sections/AboutUs/AboutUs";
import Contact from "./Sections/Contact/Contact";
import Copyright from "./Sections/Copyright/Copyright";
import Footer from "./Sections/Footer/Footer";
import Home from "./Sections/Home/Home";
import HeaderNav from "./Sections/NavBar/HeaderNav";
import Portfolio from "./Sections/Portfolio/Portfolio";

import Wrapper from "./Wrappers/Wrapper";
import WrapperFixed from "./Wrappers/WrapperFixed";


function App() {

  return (

    < >
      <nav>
        <WrapperFixed>
          <HeaderNav />
        </WrapperFixed>
      </nav>

      <main>
        <Home />
        <Wrapper>
          <AboutUs />
        </Wrapper>
        <Wrapper bgColor={'#f9f9f9'}>
          <Portfolio />
        </Wrapper>
        <Wrapper >
          <Contact />
        </Wrapper>
      </main>

      <footer>
        <Footer />
        <Copyright />
      </footer>
    </ >

  );
}

export default App;
