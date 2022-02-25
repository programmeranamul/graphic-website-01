import style from "../../styles/Help/connect_with_us.module.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaPinterest } from "react-icons/fa";

function ConnectWithUs() {
  return (
    <section className={style.section}>
      <article className="container">
        <div className={style.content}>
          <h2 className={style.title}>Connect with us via web-based media</h2>
          <p className={style.text}>
            Say hi, pose inquiries, and stay aware of whats new in the item
            photography world.
          </p>
          <div className={style.social_link}>
            <div className={style.icon_container}>
              <a href="sdhghg" className={style.icon_wrapper}>
                <FaTwitter className={style.twitter} />
              </a>
              <a href="sdhghg" className={style.icon_wrapper}>
                <FaFacebook className={style.facebook} />
              </a>
              <a href="sdhghg" className={style.icon_wrapper}>
                <FaPinterest className={style.pintarest} />
              </a>
              <a href="sdhghg" className={style.icon_wrapper}>
                <FaLinkedin className={style.twitter} />
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ConnectWithUs;
