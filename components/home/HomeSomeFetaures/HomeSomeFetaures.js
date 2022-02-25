import { HomeSomeFetauresData } from "./HomeSomeFetauresData";
import Image from "next/image";
import style from "../../../styles/Home/HomeSomeFetaures.module.css";

function HomeSomeFetaures({ backgroundColor, datas, pt0, bt0 }) {
  return (
    <section
      className={`${style.home_some_fetaures} ${pt0 ? "pt-0" : ""} ${
        bt0 ? "pb-0" : ""
      }`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container">
        <div className="row">
          {datas.map((data, index) => (
            <article key={index} className="col-md-4">
              <div className={style.single_fetaures}>
                <div className={style.img_wrapper}>
                  <div className="next-img-container">
                    <Image
                      src={data.imgSrc}
                      alt={data.title}
                      layout="fill"
                      className="next-image"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className={style.title}>{data.title}</h3>
                  <p className={style.des}>{data.des}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSomeFetaures;
