import { useContext, useEffect, useState } from "react";
import Article from "../Article/Article";
import MobileContext from "../../context/mobile-context";
import image1 from "../../assets/images/Treehugger.png";

const Articles = ({
  type,
  searchTerm,
  list,
  updateList,
  onSave,
  openPopup,
}) => {
  const { isMobile } = useContext(MobileContext);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [renderedArticles, setRenderedArticles] = useState([]);

  const renderArticle = (item, index) => {
    if (type === "saved-articles") {
      const { title, text, keyword, image, source, date, link, _id: id } = item;
      return (
        <Article
          title={title}
          text={text}
          keyword={keyword}
          image={image}
          date={date}
          source={source}
          key={index}
          type={type}
          saved={true}
          link={link}
          onSave={onSave}
          id={id}
          list={list}
          updateList={updateList}
        />
      );
    } else {
      const title = item.title;
      const text = item.content
        ? item.content.replace(/\[\+\d+\schars]/gm, "")
        : item.text;
      //this removes weird formatting from the image url in a lot of images from a certain domain that causes it not to render.
      const image = item.urlToImage
        ? `${item.urlToImage}`.replace(
            /.*\/resizer.*(?=cloudfront)/gm,
            "https://"
          )
        : item.image;
      const date = item.publishedAt || item.date;
      const source = item.source.name || item.source;
      const link = item.url || item.link;
      return (
        <Article
          title={title}
          text={text}
          keyword={keyword}
          image={image}
          date={date}
          source={source}
          key={index}
          type={type}
          saved={false}
          link={link}
          onSave={onSave}
          openPopup={openPopup}
        />
      );
    }
  };

  const add = () => {
    setCurrentIndex(currentIndex + 3);
  };

  useEffect(() => {
    setRenderedArticles(
      articles
        .slice(0, currentIndex)
        .map((element, index) => renderArticle(element, index))
    );
  }, [articles, currentIndex]);

  useEffect(() => {
    setArticles(type === "saved-articles" ? list.reverse() : list);
  }, [list]);

  useEffect(() => {
    if (/\s*/gm.test(searchTerm)) {
      const words = `${searchTerm}`.split(" ");
      setKeyword(words[0]);
    }
  }, []);
  return (
    <div className='articles'>
      <ul className='articles__container'>{renderedArticles}</ul>
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
