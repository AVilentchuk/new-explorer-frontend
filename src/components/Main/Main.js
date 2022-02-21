import SearchResults from "../SearchResults/SearchResults";
import Search from "../Search/Search";
import About from "../About/About";

import { useEffect, useState } from "react";
const Main = () => {
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {}, [searchWord]);
  return (
    <>
      <Search setSearchWord={setSearchWord} />
      {searchWord ? <SearchResults /> : ""}
      <About />
    </>
  );
};
export default Main;
