import style from "../../styles/pricing/PriceCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { pricePagePriceStartList } from "./../../data/pricePageData";

function PriceCard() {
  return (
    <section className={style.section}>
      <article className="container">
        <h1 className={style.main_title}>
          Stress less with straightforward valuing and pixel perfect photo edits
        </h1>
      </article>
      <article className="container">
        <div>
          <div>
            {pricePagePriceStartList.map((data, index) => (
              <Link href="/" key={index}>
                <a className={style.single_card}>
                  <div className={style.content}>
                    <h3
                      className={`${style.title} ${
                        style[data.defaultClass + "_color"]
                      }`}
                    >
                      {data.title}
                    </h3>
                    <p className={style.text}>{data.subTitle}</p>
                  </div>
                  <div
                    className={`${style.image_section} ${
                      style[data.defaultClass + "_bg"]
                    }`}
                  >
                    <Image
                      src={data.imgSrc}
                      alt={data.title}
                      layout="fill"
                      className={style.img}
                      objectFit="contain"
                    />
                  </div>
                  <div className={style.price_section}>
                    <p className={style.header}>Starting at</p>
                    <p className={style.amount}>{data.price}</p>
                    <p className={style.footer}>per image</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

export default PriceCard;
