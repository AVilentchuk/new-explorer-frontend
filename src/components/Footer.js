const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        {`© ${new Date().getFullYear()} Supersite, Powered by News API`}
      </p>
      <div className='footer__navigation'>
        <ul className='footer__links'>
          <li>
            <a className='footer__link'>Home</a>
          </li>
          <li>
            <a className='footer__link'>Practicum by Yandex</a>
          </li>
        </ul>
        <ul className='footer__icons'>
          <li>
            <a className='footer_link'>
              <svg className='footer__icon footer__icon_github' />
            </a>
          </li>
          <li>
            <a className='footer_link'>
              <svg className='footer__icon footer__icon_facebook' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
