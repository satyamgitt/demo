import About from "../src/components/Pages/About";
import Login from "../src/components/Pages/Login/Login";
import Home from "../src/components/Pages/Home/Home";
import Services from "../src/components/Pages/Service/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
// import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

// import Marquee from "react-fast-marquee";

import Register from "./components/Pages/Login/Register";
import HomeConfigure from "../src/components/MainPage/Homeconfigration/HomeConfigure"

import Details from '../src/components/Pages/UserINFO/Userform';
import Preview from '../src/components/MainPage/Preview';
import Success from '../src/components/MainPage/Success';
// import Update from "./components/MainPage/Update";



const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };











  return (
    <ThemeProvider theme={theme}>

      <GlobalStyle />

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/HomeConfigure" element={<HomeConfigure />} />
          <Route path="/userdetails" element={<Details />} />    useform(page                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    after login adding room detail)
          <Route path="/Preview" element={<Preview />} /> preview
          {/* <Route path="/update" element={<Update />} /> */}
          <Route path="/success" element={<Success />} />         sucessfully form requirement sended to company

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </ThemeProvider>
  );
};

export default App;








 // "homepage": "https://satyamgitt.github.io/demo",
//  "predeploy": "npm run build",
//  "deploy": "gh-pages -d build",





// {/* <Marquee style={{color:'red',fontSize:"30px"}}>
//         Work Like Dogs? Show your Loyality.
//         </Marquee> */}
//         {/* <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/service" element={<Services />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Register" element={<Register />} />

//         </Routes> */}