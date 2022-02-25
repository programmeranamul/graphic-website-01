import style from "../../styles/singleService/ServiceBanner1.module.css";
import Image from "next/image";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

function ServiceBanner1({data}) {
  const {imgSrc, startPrice, serviceName} = data
  return (
    <section className={style.section}>
      <article className="container">
        <div className={style.wrapper}>
          <div className={style.left_section}>
            <div className={style.img_wrapper}>
              <Image
                src={imgSrc}
                alt={serviceName}
                layout="fill"
                className={style.img}
                objectFit="contain"
              />
            </div>
            <p className={style.price}>
              STARTING AT <span className={style.amount}>{startPrice}</span> PER IMAGE
            </p>
          </div>
          <div className={style.right_section}>
            <h1 className={style.title}>{serviceName}</h1>
            <h2 className={style.sub_title}>
              {data.title}
            </h2>
            <p className={style.text}>
              {
                data.text
              }
            </p>
            <div className={style.action}>
              <Link href="/">
                <a className={`main-btn btn-center-with-icon  ${style.btn}`}>
                  GET STARTED <CgArrowRight className="fs-24" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ServiceBanner1;
