import React from "react";
import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import SavedArticles from "../SavedArticles/SavedArticles";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./App.css";

import MobileContext from "../../context/mobile-context";
import UserContext from "../../context/user-context";
import Popup from "../Popup/Popup";
import { Route, Routes } from "react-router-dom";
function App() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [toolTipIsOpen, setToolTipIsOpen] = useState(true);
  const [popupType, setPopupType] = useState("Signin");
  const [statusMessage, setStatusMessage] = useState("");
  const isMobile = useWindowSize().width < 531;
  const [userData, setUserData] = useState({
    signedStatus: false,
    userName: "Username",
  });

  const openPopup = (value) => {
    setPopupIsOpen(true);
    setPopupType(value);
  };
  const closePopup = () => {
    setPopupIsOpen(false);
    setToolTipIsOpen(false);
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
            changeStatus={setStatusMessage}
          />
          <InfoTooltip
            isOpen={toolTipIsOpen}
            onClose={closePopup}
            noClose={false}
            status={null}
            statusMessage={`${statusMessage}`}
          ></InfoTooltip>
        </UserContext.Provider>
      </MobileContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
