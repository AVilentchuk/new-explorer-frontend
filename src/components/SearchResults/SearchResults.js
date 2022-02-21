import Articles from "../Articles/Articles";
import image1 from "../../assets/images/Treehugger.png";

const SearchResults = () => {
  const list = [
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
  ];
  return (
    <section className='search-results'>
      <h2 className='search-results__title'>Search Results</h2>
      <Articles list={list} type={"search-results"} />
    </section>
  );
};

export default SearchResults;
