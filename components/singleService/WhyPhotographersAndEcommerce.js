import style from "../../styles/singleService/WhyPhotographersAndEcommerce.module.css";
import Image from "next/image";
import { CgArrowRight } from "react-icons/cg";
import Link from "next/link";

function WhyPhotographersAndEcommerce() {
  return (
    <section className={style.section}>
      <article className="container">
        <div>
          <h2 className={style.title}>
            Why ecommerce entrepreneurs and photographers outsource their
            clipping path projects to Path
          </h2>
          <p className={style.sub_title}>
            Your talent and creative energy is best spent on doing what you love
            — not fiddling in Photoshop for hours figuring out tedious edits.
          </p>
          <div className={style.img_section_wrapper}>
            <div className={style.left}>
              <div className={style.img_wrapepr}>
                <Image
                  src="/service/customer-curve.svg"
                  alt=""
                  className={`${style.img} ${style.min_80}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className={style.content_area}>
                <p className={style.number}>26,506</p>
                <p className={style.con_text}>
                  customers have trusted us with their image edits.
                </p>
              </div>
            </div>
            <div className={style.right}>
              <div className={style.img_wrapepr}>
                <Image
                  src="/service/image-curve.svg"
                  alt=""
                  className={`${style.img} ${style.min_80}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className={style.content_area}>
                <p className={style.number}>26,506</p>
                <p className={style.con_text}>
                  customers have trusted us with their image edits.
                </p>
              </div>
            </div>
          </div>
          <div className={style.decription_section}>
            <div className={style.des_img}>
              <Image
                src="/service/about-edited.svg"
                alt=""
                layout="fill"
                className={`${style.img} ${style.min_375}`}
              />
            </div>
            <div className={style.des_text}>
              We don’t use automated software here. Every clipping path is
              carefully done by hand. We’re not finished until every item of
              clothing and accessory appears natural, and the colors and
              textures look just right.
            </div>
          </div>
          <div className={style.action}>
            <Link href="/">
              <a className={`main-btn btn-center-with-icon ${style.btn}`}>
                Get Started
                <span>
                  <CgArrowRight className="fs-24" />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}

export default WhyPhotographersAndEcommerce;
