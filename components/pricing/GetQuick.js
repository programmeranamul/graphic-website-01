import style from "../../styles/pricing/GetQuick.module.css";import { CgArrowRight } from "react-icons/cg";
import Image from "next/image"

function GetQuick() {
  return (
    <section className={style.section}>
      <article className="container">
        <div className={style.wrapper}>
            <div className={style.img_wrapper}>
                <Image src="/price/baloon.svg" alt="" layout="fill" className={style.img}/>
            </div>

            <h2 className={style.title}>Get fast, straightforward evaluating for your project</h2>
            <p className={style.text}>Select your administration, pick your completion time, and get a gauge on the spot. We&apos;ll send you a custom quote  inside 45 minutes.</p>
            <div>
                <button className="main-btn btn-center-with-icon">Get Started <CgArrowRight className="fs-24"/></button>
            </div>
        </div>
      </article>
    </section>
  );
}

export default GetQuick;
