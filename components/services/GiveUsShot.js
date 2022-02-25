import style from "../../styles/pricing/GiveUsShot.module.css";
import Image from "next/image";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

function GiveUsShot() {
  return (
    <section className={style.section}>
      <article className="container">
        <div className={style.wrapper}>
          <div className={style.left}>
            <h2 className={style.title}>Try us out</h2>
            <p className={style.text}>
              Get your initial two pictures altered free of charge. No card
              required.
            </p>
            <div>
              <Link href="/">
                <a className={`main-btn btn-center-with-icon ${style.btn}`}>
                  TRY PATH FREE
                  <CgArrowRight className="fs-24" />
                </a>
              </Link>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.img_wrapper}>
              <Image
                src="/price/professional.svg"
                alt=""
                layout="fill"
                className={style.img}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default GiveUsShot;
