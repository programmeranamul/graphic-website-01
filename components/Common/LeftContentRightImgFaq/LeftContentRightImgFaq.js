import React, { useState } from "react";
import style from "../../../styles/common/LeftContentRightImgFaq.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const data = {
  question: "What are clipping path services?",
  fristText: (
    <p>
      Image masking is a technique that removes the background from images that
      have subjects with fuzzy edges, like hair, wool, or fur. Unlike clipping
      path services, which are like cutting out an image from a magazine, image
      masking is a labor-intensive task that requires advanced Photoshop
      techniques to account for every last strand of hair or fur.
    </p>
  ),
  imgList: [],
  imTitle:
    "We start with hand-drawn clipping paths along straight edges. Then, we’ll use these Photoshop masking tools and techniques to get to the finer details of removing a background:",
  imList: [
    "The background eraser tool",
    "The magic eraser tool",
    "The color separation technique",
  ],
  bottomText: (
    <p>
      Having a white background ensures a clean, simple look and makes sure your
      product is the star of the image.
      <br />
      <br />
      Image background removal isn’t only for white backgrounds. You can also
      add a single-color background, or a “contextual” background, like a beach
      if you’re selling beach towels, for example.
    </p>
  ),
};

function LeftContentRightImgFaq() {
  const [active, setActive] = useState(data.open || false);
  return (
    <section className={style.section}>
      <article className="container">
        <div className={style.wrapper}>
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

          <div
            className={`${style.ans_wrapper} ${active ? "d-block" : "d-none"}`}
          >
            {data.fristText}
            {data.bottomText}
          </div>
        </div>
      </article>
    </section>
  );
}

export default LeftContentRightImgFaq;
