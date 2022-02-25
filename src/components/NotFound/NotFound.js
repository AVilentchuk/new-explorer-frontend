import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className='not-found'>
      <h1 className='not-found__title'>404 - Not Found!</h1>
      <p className='not-found__caption'>
        We're sorry it seems the page you're searching for doesn't exists{" "}
      </p>
      <p className='not-found__caption'>
        Go back to the{" "}
        <Link className='not-found__link e' to={"/"}>
          homepage
        </Link>
      </p>
    </section>
  );
};
export default NotFound;
