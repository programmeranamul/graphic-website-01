import React, { useState } from "react";
import style from "../../../styles/common/ServiceFaq.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";



function ServiceFaq({data}) {
  const [active, setActive] = useState(data.open || false);
  return (
    <article className={style.wrapper}>
      <div className={style.question_wrapper}>
        <h3 className={style.question}>{data.question}</h3>
        <p
          className={`mb-0 ${style.icon_wrapepr}`}
          onClick={() => setActive(!active)}
        >
          {active ? (
            <FaMinus className={style.icon} />
          ) : (
            <FaPlus className={style.icon} />
          )}
        </p>
      </div>
      <div className={`${style.ans_wrapper} ${active ? "d-block" : "d-none"}`}>
        {data.answer}
      </div>
    </article>
  );
}

export default ServiceFaq;
