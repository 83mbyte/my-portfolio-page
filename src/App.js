import React, { useEffect, useState } from "react";

import AboutUs from "./Sections/AboutUs/AboutUs";
import Contact from "./Sections/Contact/Contact";
import Copyright from "./Sections/Copyright/Copyright";
import Footer from "./Sections/Footer/Footer";
import Home from "./Sections/Home/Home";
import HeaderNav from "./Sections/NavBar/HeaderNav";
import Portfolio from "./Sections/Portfolio/Portfolio";

import Wrapper from "./Wrappers/Wrapper";
import WrapperFixed from "./Wrappers/WrapperFixed";

const fetchData = async (url) => {
  let fetchDataOrigin = await fetch(url);
  if (fetchDataOrigin && fetchDataOrigin.status === 200) {
    let responseObject = await (fetchDataOrigin.json())
    if (responseObject) {
      return responseObject
    } else {
      return 'Error_fetchData'
    }
  }
}

function App() {

  const serviceURL = 'https://mbyte-af299-default-rtdb.europe-west1.firebasedatabase.app/service.json';

  const [stateData, setStateData] = useState(null);

  const getDataToState = async (url) => {
    let data = await fetchData(url);
    if (data && data !== 'Error_fetchData') {
      setStateData(data);
    }
  }
  useEffect(() => {

    getDataToState(serviceURL);



  }, [])
  return (

    !stateData
      ? 'Loading data. Please  wait..'
      : < >
        <nav>
          <WrapperFixed>
            <HeaderNav navyBtns={stateData.navigation} />
          </WrapperFixed>
        </nav>

        <main>
          <Home />
          <Wrapper>
            <AboutUs data={stateData.sections.about} />
          </Wrapper>
          <Wrapper bgColor={'#f9f9f9'}>
            <Portfolio />
          </Wrapper>
          <Wrapper >
            <Contact data={stateData.sections.contact} />
          </Wrapper>
        </main>

        <footer>
          <Footer data={stateData.sections.footer} />
          <Copyright />
        </footer>
      </ >



  );
}

export default App;
