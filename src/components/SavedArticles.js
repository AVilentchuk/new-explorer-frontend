import Articles from "./Articles";

const SavedArticles = () => {
  return (
    <section className='saved-articles'>
      <div className='saved-articles__text'>
        <p className='saved-articles__caption'>Saved articles</p>
        <h2 className='section__title saved-articles__title'>
          name, you have 5 saved articles
        </h2>
        <h3 className='section__subtitle saved-articles__subtitle'>
          By keywords:{" "}
          <span className='saved-articles__subtitle-list'>
            {" "}
            Nature, Yellowstone, and 2 other
          </span>
        </h3>
      </div>
      <Articles></Articles>
    </section>
  );
};

export default SavedArticles;
