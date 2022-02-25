import style from "../../../styles/common/Faq.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

function SingleFaq({data, notWhite}) {
  const [active, setActive] = useState(data.open || false);
  return (
    <article className={`${style.wrapper} ${active ? style.active_faq : ""} ${notWhite ? "bg-white" : "" }`}>
      <div className={`${style.question_wrapper} `}>
        <h2 className={style.ques}>{data.qus}</h2>
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
      <div className={`${style.ans_wrapper} ${active? "d-block" : "d-none"}`}>
        {data.ans}
      </div>
    </article>
  );
}

export default SingleFaq;
