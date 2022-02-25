import React, { useState } from "react";
import style from "../../../styles/common/ServiceFaq.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import LeftTextRightImgWithTitle from './LeftTextRightImgWithTitle';

const list= [
    "Image clipping",
    "Deep etching",
    "Photo cut-out",
    "Multi-path"
]
const data = {
  question: "What are clipping path services?",
  answer: (
    <>
      <p>
        Background removal is when you isolate the subject of a photo and wipe
        the rest of the image clean. You’re then left with a crisp white
        background (or a different background). Product photos with white
        backgrounds have become the industry norm, and many popular online
        marketplaces require white backgrounds.
      </p>
      <LeftTextRightImgWithTitle title="Clipping path is also called:" list={list}/>
    </>
  ),
};

function ServiceFaq() {
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
