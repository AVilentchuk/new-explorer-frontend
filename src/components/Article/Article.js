import { useContext, useEffect, useRef, useState, createRef } from "react";
import UserContext from "../../context/user-context";
import api from "../../utils/MainApi";

const Article = ({
  image,
  keyword,
  date,
  text,
  title,
  source,
  type,
  saved,
  link,
  id,
  list,
  updateList,
  openPopup,
}) => {
  const { signedStatus } = useContext(UserContext);
  const [isSaved, setIsSaved] = useState(saved);
  const [titleText, setTitleText] = useState(title);
  const imageRef = useRef();
  const titleRef = useRef();

  const removeArticle = (e) => {
    api
      .deleteArticle(id)
      .then(() => updateList(list.filter((item) => item._id !== id)))
      .catch((error) => console.log(error));
  };
  const saveArticle = () => {
    isSaved
      ? api
          .removeSavedArticle({
            keyword,
            title,
            text,
            date: `${new Date(Date.parse(date)).toISOString()}`,
            source,
            link,
            image,
          })
          .then(() => {
            setIsSaved(!isSaved);
          })
      : api
          .addArticle({
            keyword,
            title,
            text,
            date: `${new Date(Date.parse(date)).toISOString()}`,
            source,
            link,
            image,
          })
          .then(() => {
            setIsSaved(!isSaved);
          });
  };
  useEffect(() => {}, []);

  return (
    <div className='article'>
      <div
        className='article__image'
        style={{
          background: `url(${image}) no-repeat center/cover`,
        }}
        ref={imageRef}
      >
        <div className='article__keywords'>
          {type === "saved-articles" ? (
            <p className='article__keyword'>{keyword}</p>
          ) : (
            ""
          )}
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
              onClick={signedStatus ? saveArticle : openPopup}
            ></button>
          )}

          {!signedStatus ? (
            <div className='article__button-tooltip '>
              Sign in to save articles
            </div>
          ) : (
            <div className='article__button-tooltip'>
              {`${isSaved ? "Remove from saved" : "Save article"}`}
            </div>
          )}
        </div>
      </div>
      <div className='article__content-container'>
        <p className='article__content-date'>
          {new Date(Date.parse(date)).toDateString()}
        </p>
        <h2
          className='article__content-title'
          ref={titleRef}
          onMouseEnter={() => {
            const holder = titleRef.current.innerText;
            titleRef.current.innerText = titleText;
          }}
        >
          {title}
        </h2>
        <p className='article__content-text'>{text}</p>
        <p className='article__content-source'>{source}</p>
      </div>
    </div>
  );
};

export default Article;
