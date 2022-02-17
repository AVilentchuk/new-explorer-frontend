import { useState, useEffect, useContext, useRef, createRef } from "react";
import react from "react";
import MobileContext from "../context/mobile-context";
import UserContext from "../context/user-context";
import ThemeContext from "../context/theme-context";
import { ReactComponent as MenuButton } from "../assets/icons/mobile_menu.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/logout.svg";

const Header = () => {
  const [headerOpen, setHeaderOpen] = useState(false);
  const isMobile = useContext(MobileContext);
  const { signedStatus, userName } = useContext(UserContext);
  const { dark, light } = useContext(ThemeContext);
  const theme = dark;
  const toggleHeaderMenu = () => {
    setHeaderOpen(!headerOpen);
  };
  const headerMenu = isMobile ? (
    <header
      className={`header ${isMobile && headerOpen ? "header_mobile" : ""}`}
      style={theme ? theme.container : null}
    >
      <h2 className='header__title' style={theme ? theme.container : null}>
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
        style={theme ? theme.container : null}
      >
        <div className='header__navigation '>
          <p
            className='header__navigation-link header__navigation-link_active'
            style={theme ? theme.container : null}
          >
            Home
          </p>
          {signedStatus ? (
            <p className='header__navigation-link '>Saved articles</p>
          ) : (
            ""
          )}
        </div>
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
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  ) : (
    <header
      className={`header ${isMobile && headerOpen ? "header_mobile" : ""}`}
      style={theme ? theme.container : null}
    >
      <h2 className='header__title' style={theme ? theme.container : null}>
        NewsExplorer
      </h2>
      <div className='header__container'>
        <div className='header__navigation'>
          <p
            className='header__navigation-link header__navigation-link_active'
            style={theme ? theme.container : null}
          >
            Home
          </p>
          {signedStatus ? (
            <p
              className='header__navigation-link '
              style={theme ? theme.container : null}
            >
              Saved articles
            </p>
          ) : (
            ""
          )}
        </div>
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
  return <>{headerMenu}</>;
};

export default Header;
