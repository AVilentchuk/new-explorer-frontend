import { useContext, useState } from "react";
import UserContext from "../../context/user-context";

const Article = ({
  image,
  keyword,
  date,
  text,
  title,
  source,
  type,
  removeArticle,
  saved,
}) => {
  const { signedStatus } = useContext(UserContext);
  const [isSaved, setIsSaved] = useState(saved);

  const savedArticle = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className='article'>
      <div
        className='article__image'
        style={{ background: ` url(${image}) no-repeat center/cover` }}
      >
        <div className='article__keywords'>
          <p className='article__keyword'>{keyword}</p>
        </div>
        <div className='article__buttons-container'>
          {type === "saved-articles" ? (
            <button
              className={`article__button article__button_delete button`}
              type='button'
              onClick={(e) => removeArticle(e)}
            ></button>
          ) : (
            <button
              className={`article__button ${
                isSaved ? "article__button_saved" : ""
              } button`}
              type='button'
              onClick={savedArticle}
            ></button>
          )}
          {type === "saved-articles" ? (
            <div className='article__button-tooltip '>Remove from saved</div>
          ) : (
            ""
          )}
          {!signedStatus ? (
            <div className='article__button-tooltip '>
              Sign in to save articles
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className='article__content-container'>
        <p className='article__content-date'>{date}</p>
        <h1 className='article__content-title'>{title}</h1>
        <p className='article__content-text'>{text}</p>
        <p className='article__content-source'>{source}</p>
      </div>
    </div>
  );
};

export default Article;
