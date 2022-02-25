import style from "../../../styles/common/Faq.module.css";
import SingleFaq from "./SingleFaq";
import { pricePageFaq } from './../../../data/pricePageData';

function Faq() {
  return (
    <section className={style.section}>
      <article className="container">
        <h2 className={style.main_title}>FAQs</h2>
        <h3 className={style.sub_title}>
        Questions different clients have asked us
        </h3>
      </article>
      <div className="container">
          {
              pricePageFaq.map((data, index) =><SingleFaq key={index} data={data} /> )
          }
        
      </div>
    </section>
  );
}

export default Faq;
