import style from "../../../styles/Home/DontHaveToDoEeverything.module.css";
import Image from "next/image";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

function DontHaveToDoEeverything({title,subtitle,datas}) {
  return (
    <section className={style.section}>
      <article className="container">
        <h2 className={`px-5 text-center ${style.title}`}>
         {title}
        </h2>
        <h4 className={` ${style.sub_title}`}>
         {subtitle}
        </h4>
      </article>
      <article className={`container ${style.main}`}>
        <div className="row w-100 mx-auto">
          {datas.map((data, index) => (
            <div key={index} className="col-md-4 mb-2">
              <div>
                <div className={style.img_container}>
                  <div className="next-img-container">
                    <Image
                      src={data.imgSrc}
                      alt={data.strongText}
                      layout="fill"
                      className="next-image"
                    />
                  </div>
                </div>
                <div className={style.content}>
                  <p>
                    <strong>{data.strongText}</strong> {data.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
      <div className="container text-center">
        <div className={style.action}>
          <Link href="/">
            <a className="main-btn">
              Get Started <CgArrowRight className="fs-24" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DontHaveToDoEeverything;
