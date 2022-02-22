import { useEffect, useState } from "react";
import Articles from "../Articles/Articles";

const SearchResults = ({ isResults }) => {
  const [isDone, setIsDone] = useState(false);
  const noResults = isDone ? (
    <>
      <div className='search-results__image' />
      <h2 className='search-results__subtitle'>Nothing found</h2>
      <p className='search-results__caption'>
        Sorry, but nothing matched your search terms.
      </p>
    </>
  ) : (
    <div className='search-results__preloader-background'>
      <i className='search-results__circle-preloader'></i>
      <p className='search-results__preloader-caption'>Searching for news...</p>
    </div>
  );

  useEffect(() => {
    setTimeout(() => {
      setIsDone(true);
    }, 500);
    return () => {
      setIsDone(false);
    };
  }, [isResults]);
  return (
    <section className='search-results'>
      {isResults.length >= 1 ? (
        <>
          <h2 className='search-results__title'>Search Results</h2>
          <Articles list={isResults} type={"search-results"} />
        </>
      ) : (
        noResults
      )}
    </section>
  );
};

export default SearchResults;
