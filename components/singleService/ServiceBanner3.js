import style from "../../styles/singleService/ServiceBanner3.module.css";

function ServiceBanner3({data}) {
  const {defaultText, text1, text2} = data
  return (
    <section className={style.section}>
      <article className="container">
        <div className={style.wrapper}>
          <h2 className={style.title}> {defaultText}</h2>
          <div className={style.intro}>
            {text1}
          </div>
          <div className={style.content}>
           {text2}
          </div>
        </div>
      </article>
    </section>
  );
}

export default ServiceBanner3;
