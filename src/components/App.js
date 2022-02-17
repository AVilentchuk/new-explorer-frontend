import React from "react";
import { useState, useEffect, useContext } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

import Header from "./Header";

import Footer from "./Footer";
import Main from "./Main";
import "../App.css";
import SigninPopup from "./SigninPopup";
import Search from "./Search";

import ThemeContext from "../context/theme-context";
import MobileContext from "../context/mobile-context";
import UserContext from "../context/user-context";
import SignupPopup from "./SignupPopup";
function App() {
  // const { theme } = useContext(MobileContext);
  const isMobile = useWindowSize().width < 531;
  const [userData, setUserData] = useState({
    signedStatus: false,
    userName: "placeHolder",
  });

  return (
    <div className='App'>
      <MobileContext.Provider value={isMobile}>
        <UserContext.Provider value={userData}>
          <Header></Header>
          <Search></Search>
          <Main></Main>
        </UserContext.Provider>
        <SignupPopup />
        <SigninPopup /> <Footer />
      </MobileContext.Provider>
    </div>
  );
}

export default App;
