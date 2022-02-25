import Articles from "../Articles/Articles";
import image1 from "../../assets/images/Treehugger.png";
import api from "../../utils/MainApi";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user-context";
const SavedArticles = () => {
  const [articleList, setArticlesList] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const { userName } = useContext(UserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => setArticlesList(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setKeywords(Array.from(new Set(articleList.map((item) => item.keyword))));
  }, [articleList]);
  return (
    <section className='saved-articles'>
      <div className='saved-articles__text'>
        <p className='saved-articles__caption'>Saved articles</p>
        <h1 className='section__title saved-articles__title'>
          {articleList && articleList.length > 0
            ? `${userName}, you have ${articleList.length} saved articles`
            : `${userName}, you have no saved article`}
        </h1>
        {keywords ? (
          <h2 className='section__subtitle saved-articles__subtitle'>
            By keywords:{" "}
            <span className='saved-articles__subtitle-list'>
              {`${keywords && keywords.filter((item, index) => index < 2)} ${
                keywords.length > 2 && `and ${keywords.length - 2} other`
              }`}
            </span>
          </h2>
        ) : (
          ""
        )}
      </div>
      {articleList && (
        <Articles
          list={articleList}
          updateList={setArticlesList}
          type={"saved-articles"}
        />
      )}
    </section>
  );
};

export default SavedArticles;
