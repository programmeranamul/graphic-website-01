import style from "../../styles/Help/check_our_help.module.css";
import Image from "next/image";
import { CgArrowRight } from "react-icons/cg";

function CheckOurHelp() {
  return (
    <section className={style.section}>
      <article className="container">
        <div className={style.wrapper}>
          <div className={style.left_side}>
            <div className={style.img_wrapper}>
              <Image layout="fill" src="/help/check our section.png" alt="" />
            </div>
          </div>
          <div className={style.right_side}>
            <h2 className={style.title}> Check our help section</h2>
            <p className={style.text}>
            We have replies to pretty much every inquiry you could have for us,
              all prepared for you in an assortment of accommodating articles and FAQs.
            </p>
            {/* <div>
              <button className={`main-btn btn-center-with-icon ${style.btn}`}>SEARCH HELP <CgArrowRight className="fs-24"/></button>
            </div> */}
          </div>
        </div>
      </article>
    </section>
  );
}

export default CheckOurHelp;
