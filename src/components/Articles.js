import { useContext, useState } from "react";
import image1 from "../assets/images/Treehugger.png";
import Article from "./Article";
import MobileContext from "../context/mobile-context";

const Articles = () => {
  const { isMobile } = useContext(MobileContext);
  const [articles, setArticles] = useState([
    <Article
      title={`Everyone Needs a Special 'Sit Spot' in Nature`}
      text={`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`}
      keyword={"test"}
      image={image1}
      date={new Date(Date.now()).toDateString()}
      source='treehugger'
      key={Math.random()}
    />,
    <Article
      title='test_title'
      text='test text test texttest texttest texttest texttest texttest text test texttest texttest texttest texttest texttest text test texttest texttest texttest texttest text '
      keyword={"test"}
      date={new Date(Date.now()).toDateString()}
      source='Source'
      key={Math.random()}
    />,
    <Article
      title='test_title2'
      text='test text test texttest texttest texttest texttest texttest text test texttest texttest texttest texttest texttest text test texttest texttest texttest texttest text '
      keyword={"test"}
      date={new Date(Date.now()).toDateString()}
      source='Source'
      key={Math.random()}
    />,
  ]);

  const fakeData = {
    title: `Everyone Needs a Special 'Sit Spot' in Nature`,
    text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`,
    keyword: "test",
    image: image1,
    date: new Date(Date.now()).toDateString(),
    source: "treehugger",
  };
  const { title, text, keyword, image, date, source } = fakeData;
  const extraArticle = (
    <Article
      title={title}
      text={text}
      keyword={keyword}
      image={image}
      date={date}
      source={source}
      key={Math.random()}
    />
  );
  const add = () => {
    setArticles([[extraArticle, extraArticle, extraArticle], articles]);
  };

  return (
    <div className='articles'>
      <div className='articles__container'>{articles}</div>
      {
        /* {condition goes here } */
        <button
          className={`button_type_article-container ${
            isMobile ? "button_type_article-container-mobile" : ""
          }`}
          onClick={add}
        >
          Show more
        </button>
      }
    </div>
  );
};
export default Articles;
