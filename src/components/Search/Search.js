import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
const Search = ({ setSearchWord }) => {
  const [searchTarget, setSearchTarget] = useState("");

  const postSearchBar =
    useWindowSize().width < 600 ? (
      <>
        <div className='search__bar'>
          <input
            className='search__field'
            placeholder='Random keyword'
            onChange={(e) => {
              setSearchTarget(e.target.value);
            }}
            value={searchTarget || null}
          />
        </div>
        <button
          className='search__button search__button_mobile button'
          type='submit'
        >
          Search
        </button>
      </>
    ) : (
      <>
        <div className='search__bar'>
          <input
            className='search__field'
            placeholder='Random keyword'
            onChange={(e) => {
              setSearchTarget(e.target.value);
            }}
          />
          <button className='search__button button' type='submit'>
            Search
          </button>
        </div>
      </>
    );

  useEffect(() => {}, []);

  return (
    <section className='search' id='search'>
      <h1 className='search__title'>What's going on in the world?</h1>
      <p className='search__subtitle'>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form
        className='search__form'
        onSubmit={(e) => {
          e.preventDefault();
          setSearchWord(`${searchTarget}`);
        }}
      >
        {postSearchBar}
      </form>
    </section>
  );
};
export default Search;
