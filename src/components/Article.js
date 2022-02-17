const Article = ({ image, keyword, date, text, title, source }) => {
  return (
    <div className='article'>
      <div
        className='article__image'
        style={{ background: ` url(${image}) no-repeat center/cover` }}
      >
        <ul className='article__keywords '>
          <li className='article__keyword_main'>{keyword}</li>
          <li className='keyword button'>{}</li>
        </ul>
        <div className='article__buttons-container'>
          <button
            className='article__button article__button_save button'
            type='button'
          ></button>
          <div className='article__button-tooltip '>
            Sign in to save articles
          </div>
        </div>
      </div>
      <div className='article__content-container'>
        <p className='article__content_date'>{date}</p>
        <h1 className='article__content_title'>{title}</h1>
        <p className='article__content_text'>{text}</p>
        <p className='article__content_source'>{source}</p>
      </div>
    </div>
  );
};

export default Article;
