import React from "react";
import { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import SavedArticles from "./SavedArticles";

import Header from "./Header";

import Footer from "./Footer";
import Main from "./Main";
import "../App.css";
import Search from "./Search";

import MobileContext from "../context/mobile-context";
import UserContext from "../context/user-context";
import Popup from "./Popup";
import { Route, Routes } from "react-router-dom";
function App() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popupType, setPopupType] = useState("Signin");
  const isMobile = useWindowSize().width < 531;
  const [userData, setUserData] = useState({
    signedStatus: false,
    userName: "placeHolder",
  });

  const openPopup = (value) => {
    setPopupIsOpen(true);
    setPopupType(value);
  };
  const closePopup = () => {
    setPopupIsOpen(false);
  };
  const popupChangeType = (value) => {
    setPopupType(value);
  };

  return (
    <div className='App'>
      <MobileContext.Provider value={isMobile}>
        <UserContext.Provider value={userData}>
          <Header openPopup={openPopup} />
          <Routes>
            <Route path='/saved-news' element={<SavedArticles />} />
            <Route
              exact
              path='/'
              element={
                <>
                  <Search />
                  <Main />
                </>
              }
            />
          </Routes>
          <Popup
            isOpen={popupIsOpen}
            onClose={closePopup}
            popupType={popupType}
            changeState={popupChangeType}
            setUserData={setUserData}
          />
        </UserContext.Provider>
      </MobileContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
