import SearchResults from "../SearchResults/SearchResults";
import Search from "../Search/Search";
import About from "../About/About";

import { useEffect, useState } from "react";
const Main = ({ openLoginPopup }) => {
  const [searchWord, setSearchWord] = useState("");
  const [isResults, setIsResults] = useState([]);
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {}, [searchWord]);
  return (
    <>
      <Search
        setSearchWord={setSearchWord}
        setIsResults={setIsResults}
        setIsDone={setIsDone}
      />
      {searchWord ? (
        <SearchResults
          isResults={isResults}
          isDone={isDone}
          keyword={searchWord}
          openPopup={openLoginPopup}
        />
      ) : (
        ""
      )}
      <About />
    </>
  );
};
export default Main;
