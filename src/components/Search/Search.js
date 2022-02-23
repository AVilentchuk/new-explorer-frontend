import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import image1 from "../../assets/images/Treehugger.png";
const Search = ({ setSearchWord, setIsResults }) => {
  const [searchTarget, setSearchTarget] = useState("");

  const updateValues = () => {
    setIsResults([
      {
        title: `Everyone Needs a Special 'Sit Spot' in Nature`,
        text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`,
        keyword: "test",
        image: image1,
        date: new Date(Date.now()).toDateString(),
        source: "treehugger",
      },
      {
        title: `Everyone Needs a Special 'Sit Spot' in Nature`,
        text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`,
        keyword: "test",
        image: image1,
        date: new Date(Date.now()).toDateString(),
        source: "treehugger",
      },
      {
        title: `Everyone Needs a Special 'Sit Spot' in Nature`,
        text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`,
        keyword: "another",
        image: image1,
        date: new Date(Date.now()).toDateString(),
        source: "treehugger",
      },
      {
        title: `Everyone Needs a Special 'Sit Spot' in Nature`,
        text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`,
        keyword: "keyword",
        image: image1,
        date: new Date(Date.now()).toDateString(),
        source: "treehugger",
      },
      {
        title: `Everyone Needs a Special 'Sit Spot' in Nature`,
        text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`,
        keyword: "test",
        image: image1,
        date: new Date(Date.now()).toDateString(),
        source: "treehugger",
      },
      {
        title: `Everyone Needs a Special 'Sit Spot' in Nature`,
        text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`,
        keyword: "lol",
        image: image1,
        date: new Date(Date.now()).toDateString(),
        source: "treehugger",
      },
    ]);
  };

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
          setIsResults([]);
          setTimeout(() => updateValues(), 1200);
        }}
      >
        {postSearchBar}
      </form>
    </section>
  );
};
export default Search;
