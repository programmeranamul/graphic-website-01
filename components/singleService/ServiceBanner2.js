import style from "../../styles/singleService/ServiceBanner2.module.css";
import Image from "next/image";

function ServiceBanner2({data}) {
  const {title, imgSrc, alterTag, text} = data
  return (
    <section className={style.section}>
      <article className="container">
        <div className={style.wrapper}>
          <h2 className={style.title}>
           {title}
          </h2>
          <div className={style.img_area}>
            <div className={style.img_wrapper}>
              <Image
                src={imgSrc}
                alt={alterTag}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={style.text}>
            {
              text
            }
          </div>
        </div>
      </article>
    </section>
  );
}

export default ServiceBanner2;
