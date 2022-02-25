import React from "react";
import Image from "next/image";
import style from "../../../styles/ClippingPath/ImgShowCaseServiceFaq.module.css";

function ImgShowCaseServiceFaq({ imgList }) {
  return (
    <div className={style.section}>
      {imgList.map((data, index) => (
        <div key={index} className={style.img_container}>
          <Image
            src={data}
            alt="test"
            // width="100%"
            // height="100%"
            // layout="responsive"
            layout="fill"
          />
        </div>
      ))}

    </div>
  );
}

export default ImgShowCaseServiceFaq;
