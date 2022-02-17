import { useContext } from "react";
import image1 from "../assets/images/Treehugger.png";
import Article from "./Article";
import MobileContext from "../context/mobile-context";

const Articles = () => {
  const isMobile = useContext(MobileContext);
  return (
    <div className='articles'>
      <div className='articles__container'>
        <Article
          title={`Everyone Needs a Special 'Sit Spot' in Nature`}
          text={`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`}
          keyword={"test"}
          image={image1}
          date={new Date(Date.now()).toDateString()}
          source='treehugger'
        />
        <Article
          title='test_title'
          text='test text test texttest texttest texttest texttest texttest text test texttest texttest texttest texttest texttest text test texttest texttest texttest texttest text '
          keyword={"test"}
          date={new Date(Date.now()).toDateString()}
          source='Source'
        />
        <Article
          title='test_title2'
          text='test text test texttest texttest texttest texttest texttest text test texttest texttest texttest texttest texttest text test texttest texttest texttest texttest text '
          keyword={"test"}
          date={new Date(Date.now()).toDateString()}
          source='Source'
        />
      </div>
      {
        /* {condition goes here } */
        <button
          className={`button_type_article-container ${
            isMobile ? "button_type_article-container-mobile" : ""
          }`}
        >
          Show more
        </button>
      }
    </div>
  );
};
export default Articles;
