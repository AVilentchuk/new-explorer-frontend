import Articles from "../Articles/Articles";
import image1 from "../../assets/images/Treehugger.png";

const SavedArticles = () => {
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
  const keywords = Array.from(new Set(list.map((item) => item.keyword)));
  return (
    <section className='saved-articles'>
      <div className='saved-articles__text'>
        <p className='saved-articles__caption'>Saved articles</p>
        <h1 className='section__title saved-articles__title'>
          name, you have {list.length} saved articles
        </h1>
        <h2 className='section__subtitle saved-articles__subtitle'>
          By keywords:{" "}
          <span className='saved-articles__subtitle-list'>
            {`${keywords.filter((item, index) => index < 2)} ${
              keywords.length > 2 ? `and ${keywords.length - 2} other` : "test"
            }`}
            {console.log(keywords.length)}
          </span>
        </h2>
      </div>
      {list && <Articles list={list} type={"saved-articles"} />}
    </section>
  );
};

export default SavedArticles;
