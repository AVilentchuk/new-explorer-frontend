import { useState, useEffect, useContext } from "react";

import MobileContext from "../../context/mobile-context";
import UserContext from "../../context/user-context";
import ThemeContext from "../../context/theme-context";
import { ReactComponent as MenuButton } from "../../assets/icons/mobile_menu.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";

const Header = ({ openPopup }) => {
  const [headerOpen, setHeaderOpen] = useState(false);
  const isMobile = useContext(MobileContext);
  const { signedStatus, userName } = useContext(UserContext);
  const { dark, light } = useContext(ThemeContext);
  const [theme, setTheme] = useState(dark);
  const toggleHeaderMenu = () => {
    setHeaderOpen(!headerOpen);
  };

  const navigate = useNavigate();
  const headerMenu = isMobile ? (
    <header
      className={`header ${isMobile && headerOpen ? "header_mobile" : ""}`}
      style={theme ? theme.header : null}
      id='home'
    >
      <h2
        className='header__title'
        style={theme ? theme.container : null}
        onClick={() => {
          return navigate("/");
        }}
      >
        NewsExplorer
      </h2>
      <MenuButton
        className={`header__navigation-button  ${
          headerOpen && "header__navigation-button_opened"
        } `}
        onClick={toggleHeaderMenu}
        style={theme ? theme.container : null}
      ></MenuButton>

      <div
        className={`header__mobile-menu ${
          headerOpen && "header__mobile-menu_opened"
        }`}
        style={theme ? theme.header : null}
      >
        <nav className='header__navigation '>
          <button
            className={`header__navigation-link ${
              window.location.pathname !== "/saved-news"
                ? "header__navigation-link_active"
                : ""
            }`}
            style={theme ? theme.container : null}
            onClick={() => {
              return navigate("/");
            }}
          >
            Home
          </button>
          {signedStatus ? (
            <button
              className={`header__navigation-link ${
                window.location.pathname === "/saved-news"
                  ? "header__navigation-link_active"
                  : ""
              }`}
              style={theme ? theme.container : null}
              onClick={() => {
                return navigate("/saved-news");
              }}
            >
              Saved articles
            </button>
          ) : (
            ""
          )}
        </nav>
        {signedStatus ? (
          <button
            className='header__button header__button_logout button_mobile button'
            type='button'
            style={theme ? theme.button : null}
          >
            {userName}
            <LogoutIcon className='header__logout-icon' />
          </button>
        ) : (
          <button
            className='header__button header__button_logout button_mobile button'
            type='button'
            style={theme ? theme.button : null}
            onClick={openPopup}
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  ) : (
    <header
      className={`header ${isMobile && headerOpen ? "header_mobile" : ""}`}
      style={theme ? theme.header : null}
    >
      <h2
        className='header__title'
        style={theme ? theme.container : null}
        onClick={() => {
          return navigate("/");
        }}
      >
        NewsExplorer
      </h2>
      <div className='header__container'>
        <nav className='header__navigation'>
          <button
            className={`header__navigation-link ${
              window.location.pathname !== "/saved-news"
                ? "header__navigation-link_active"
                : ""
            }`}
            style={theme ? theme.container : null}
            onClick={() => {
              return navigate("/");
            }}
          >
            Home
          </button>
          {signedStatus ? (
            <button
              className={`header__navigation-link ${
                window.location.pathname === "/saved-news"
                  ? "header__navigation-link_active"
                  : ""
              }`}
              style={theme ? theme.container : null}
              onClick={() => {
                return navigate("/saved-news");
              }}
            >
              Saved articles
            </button>
          ) : (
            ""
          )}
        </nav>
        {signedStatus ? (
          <button
            className='header__button header__button_logout button'
            type='button'
            style={theme ? theme.button : null}
          >
            {userName}
            <LogoutIcon className='header__logout-icon' />
          </button>
        ) : (
          <button
            className='header__button button'
            type='button'
            style={theme ? theme.button : null}
            onClick={openPopup}
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  );
  useEffect(() => {
    !isMobile && setHeaderOpen(false);
  }, [isMobile, signedStatus]);
  useEffect(() => {
    window.location.pathname === "/saved-news"
      ? setTheme(light)
      : setTheme(dark);
  }, [window.location.pathname, light, dark]);

  return <>{headerMenu}</>;
};

export default Header;
