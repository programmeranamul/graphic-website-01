import style from "../../../styles/HowItWorks/PixelPerfectGuarantee.module.css";
import Image from "next/image";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

function PixelPerfectGuarantee() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.image_section}>
            <div className={style.img}>
              <div className="next-img-container">
                <Image
                  src="/howItWork/researcher.svg"
                  alt="Test"
                  className="next-image"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className={style.text_section}>
            <h2>Pixel perfect assurance</h2>
            <p className="mb-0">
            On the off chance that you&apos;re not 100% content with your edits, let us know. We&apos;ll make
              any modifications you want immediately.
            </p>
            <div className={style.action}>
              <Link href="/">
                <a className="main-btn">Get Started <CgArrowRight className="fs-24" /></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PixelPerfectGuarantee;
