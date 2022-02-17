import { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import searchImage from "../assets/images/SearchBackground.png";
const Search = () => {
  const [windowDimensions, setWindowDimensions] = useState({});
  //   setWindowDimensions({1,2});
  const postSearchBar =
    useWindowSize().width < 600 ? (
      <>
        <div className='search__bar'>
          <input className='search__field' placeholder='Random keyword' />
        </div>
        <button className='search__button search__button_mobile button' type='submit'>
          Search
        </button>
      </>
    ) : (
      <>
        <div className='search__bar'>
          <input className='search__field' placeholder='Random keyword' />
          <button className='search__button button' type='submit'>
            Search
          </button>
        </div>
      </>
    );

  useEffect(() => {}, []);

  return (
    <section className='search' id='search'>
      <h2 className='search__title'>What's going on in the world?</h2>
      <p className='search__subtitle'>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className='search__form'>{postSearchBar}</form>
    </section>
  );
};
export default Search;
