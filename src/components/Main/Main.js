import SearchResults from "../SearchResults/SearchResults";
import Search from "../Search/Search";
import About from "../About/About";

import { useEffect, useState } from "react";
const Main = () => {
  const [searchWord, setSearchWord] = useState("");
  const [isResults, setIsResults] = useState([]);
  useEffect(() => {}, [searchWord]);
  return (
    <>
      <Search setSearchWord={setSearchWord} setIsResults={setIsResults} />
      {searchWord ? <SearchResults isResults={isResults} /> : ""}
      <About />
    </>
  );
};
export default Main;
