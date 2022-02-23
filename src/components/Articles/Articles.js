import { useContext, useEffect, useState } from "react";
import Article from "../Article/Article";
import MobileContext from "../../context/mobile-context";

const Articles = ({ type, list, index }) => {
  const { isMobile } = useContext(MobileContext);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [articles, setArticles] = useState([]);

  const removeArticle = (e) => {
    e.target.closest(".article").remove();
  };

  const createRandomKey = () => {
    const key = Math.random();
    console.log(key);
    return key;
  };

  const renderArticle = (item) => {
    const { title, text, keyword, image, date, source } = item;
    return (
      <Article
        title={title}
        text={text}
        keyword={keyword}
        image={image}
        date={date}
        source={source}
        key={createRandomKey()}
        type={type}
        saved={true}
        removeArticle={removeArticle}
      />
    );
  };

  const add = () => {
    setCurrentIndex(currentIndex + 3);
  };

  useEffect(() => {
    setArticles(
      list.slice(0, currentIndex).map((element) => renderArticle(element))
    );
  }, [currentIndex, list]);

  useEffect(() => {}, []);
  return (
    <div className='articles'>
      <ul className='articles__container'>{articles}</ul>
      {list.length <= currentIndex ? (
        ""
      ) : (
        <button
          className={`button_type_article-container ${
            isMobile ? "button_type_article-container-mobile" : ""
          }`}
          onClick={add}
        >
          Show more
        </button>
      )}
    </div>
  );
};
export default Articles;
