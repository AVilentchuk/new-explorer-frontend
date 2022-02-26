import { useEffect } from "react";
import Articles from "../Articles/Articles";

const SearchResults = ({ isResults, isDone, keyword, openPopup }) => {
  useEffect(() => {
    console.log(isResults);
  }, [isResults]);
  return !isDone ? (
    <div className='search-results__preloader-background'>
      <i className='search-results__circle-preloader'></i>
      <p className='search-results__preloader-caption'>Searching for news...</p>
    </div>
  ) : (
    <section className='search-results'>
      {isResults.length >= 1 ? (
        <>
          <h2 className='search-results__title'>Search Results</h2>
          <Articles
            list={isResults}
            type={"search-results"}
            searchTerm={keyword}
            openPopup={openPopup}
          />
        </>
      ) : (
        <>
          <div className='search-results__image' />
          <h2 className='search-results__subtitle'>Nothing found</h2>
          <p className='search-results__caption'>
            Sorry, but nothing matched your search terms.
          </p>
        </>
      )}
    </section>
  );
};

export default SearchResults;
