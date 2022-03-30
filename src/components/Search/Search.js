import { useEffect, useState, useRef } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import newsApi from "../../utils/NewsApi";
const Search = ({ setSearchWord, setIsResults, setIsDone }) => {
  const [searchTarget, setSearchTarget] = useState("");
  const keywordRef = useRef();
  const postSearchBar =
    useWindowSize().width < 600 ? (
      <>
        <div className='search__bar'>
          <input
            className='search__field'
            placeholder='Random keyword'
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter keyword")
            }
            onChange={(e) => {
              e.target.value.length > 0
                ? e.target.setCustomValidity("")
                : e.target.setCustomValidity("Please enter keyword");
              setSearchTarget(e.target.value);
            }}
            value={searchTarget || ""}
            ref={keywordRef}
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
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter keyword")
            }
            onChange={(e) => {
              e.target.value.length > 0
                ? e.target.setCustomValidity("")
                : e.target.setCustomValidity("Please enter keyword");
              setSearchTarget(e.target.value);
            }}
            value={searchTarget || ""}
            ref={keywordRef}
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
          setIsDone(false);
          setSearchWord(`${searchTarget}`);

          newsApi
            .getArticles(keywordRef.current.value)
            .then((res) => {
              setIsResults(res.articles);
            })
            .then(() => setIsDone(true));
        }}
      >
        {postSearchBar}
      </form>
    </section>
  );
};
export default Search;
