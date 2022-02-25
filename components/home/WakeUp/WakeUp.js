import style from "../../../styles/Home/WakeUp.module.css";
import Link from "next/link";
import Head from "next/head";

function WakeUp() {
  return (
    <section className={style.section}>
      <div className="container">
        <article className={style.main}>
          <h1 className={style.title}>
            Best Clipping Path Service Provider Company
          </h1>
          <p className={style.sub_title}>
            Why waste your precious time editing and tweaking your photos?
            Instead, shake hands with Photoeditzone, the best Clipping Path
            Service Provider Company to help your business grow exponentially.
            No matter the quantity, we can make all the photos stellar and
            website ready images within time.
            {/* <strong>Get pixel perfect image editing services</strong>, whenever you need them.  */}
          </p>
          <div className={style.action}>
            <Link href="/">
              <a className="main-btn d-inline-block">Get Started</a>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default WakeUp;
