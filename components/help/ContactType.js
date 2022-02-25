import style from "../../styles/Help/contact_type.module.css";
import { contactTypeData } from "./../../data/helpPageData";
import Image from "next/image";

function ContactType() {
  return (
    <section className={style.section}>
      <article className="container">
        <div className={style.card_wrapper}>
          {contactTypeData.map((data, index) => (
            <div key={index} className={style.card}>     
              <div className={`next-img-container ${style.card_img_wrapper}` }>
                <Image
                   src={data.image}
                   alt={data.title}
                  className={`next-image ${style.card_img}`}
                  layout="fill"
                />            
              </div>
              <div className={`${style.card_content}`}>
                <h3 className={style.title}>{data.title}</h3>
                <div>{data.description}</div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default ContactType;
