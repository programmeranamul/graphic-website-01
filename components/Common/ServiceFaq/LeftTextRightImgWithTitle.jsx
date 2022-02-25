import React from "react";
import style from "../../../styles/common/LeftTextRightImgWithTitle.module.css";
import Image from "next/image";

function LeftTextRightImgWithTitle({ title, list }) {
  return (
    <div className={style.wrapper}>
      <h3>{title}</h3>
      <div className={style.main}>
        <div className={style.text_area}>
          <ul>
            {list.map((el, index) => (
              <li className={style.li} key={index}>
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.img_area}>
          <div className={style.flex_img}>
            <div className={style.img_container}>
              <Image
                src="/service/Clipping Path/service-clipping-path-super-complex-jewelry-before.png"
                alt=""
                layout="fill"
                className={style.img}
              />
            </div>
            <div className={style.img_container}>
              <Image
                src="/service/Clipping Path/service-clipping-path-super-complex-jewelry-before.png"
                alt=""
                layout="fill"
                className={style.img}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftTextRightImgWithTitle;
