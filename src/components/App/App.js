import { useState, useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import SavedArticles from "../SavedArticles/SavedArticles";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import FormDataProvider from "../../context/form-context";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./App.css";

import MobileContext from "../../context/mobile-context";
import UserContext from "../../context/user-context";
import { Route, Routes } from "react-router-dom";
import * as auth from "../../utils/auth";
import api from "../../utils/MainApi";

function App() {
  const [loginPopupIsOpen, setLoginPopupIsOpen] = useState(false);
  const [registerPopupIsOpen, setRegisterPopupIsOpen] = useState(false);
  const [toolTipIsOpen, setToolTipIsOpen] = useState(true);

  let isMobile = useWindowSize().width < 531;
  const [userData, setUserData] = useState({
    signedStatus: false,
    userName: "Username",
  });
  const handleLogin = () => {
    return auth
      .checkToken()
      .then((validation) => {
        setUserData({
          signedStatus: true,
          userName: `${validation.data.name}`,
        });
        api.updateToken();
      })
      .catch((error) => {
        console.log(error);
        localStorage.clear();
      });
  };
  const openRegisterPopup = () => {
    setRegisterPopupIsOpen(true);
  };
  const openLoginPopup = () => {
    setLoginPopupIsOpen(true);
  };
  const closePopup = () => {
    setLoginPopupIsOpen(false);
    setRegisterPopupIsOpen(false);
    setToolTipIsOpen(false);
  };
  const openOtherPopup = () => {
    setLoginPopupIsOpen(!loginPopupIsOpen);
    setRegisterPopupIsOpen(!registerPopupIsOpen);
  };
  const handleLogout = () => {
    localStorage.clear();
    setUserData({
      signedStatus: false,
      userName: "",
    });
  };

  useEffect(() => {
    if (localStorage.getItem("jwt") !== null) {
      auth.checkToken().then((validation) => {
        setUserData({
          signedStatus: true,
          userName: `${validation.data.name}`,
        });
      });
    }
  }, []);

  return (
    <div className='App'>
      <MobileContext.Provider value={isMobile}>
        <UserContext.Provider value={userData}>
          <Header openPopup={openRegisterPopup} handleLogout={handleLogout} />
          <Routes>
            <Route
              exact
              path='/saved-news'
              element={
                <ProtectedRoute redirectTo='/'>
                  <SavedArticles />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='/'
              element={
                <>
                  <Main openLoginPopup={openLoginPopup} />
                </>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </MobileContext.Provider>
      <FormDataProvider>
        <Login
          isOpen={loginPopupIsOpen}
          onClose={closePopup}
          openOtherPopup={openOtherPopup}
          handleLogin={handleLogin}
        ></Login>

        <Register
          isOpen={registerPopupIsOpen}
          onClose={closePopup}
          openOtherPopup={openOtherPopup}
        ></Register>
      </FormDataProvider>
      <Footer />
    </div>
  );
}

export default App;
