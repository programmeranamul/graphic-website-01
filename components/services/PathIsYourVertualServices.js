import style from "../../styles/service/PathIsYourVertualServices.module.css";
import Image from "next/image"
import { PathIsYourVirtualData } from './../../data/servicePageData';

function PathIsYourVertualServices() {
  return (
    <section className={style.section}>
      <article className="container">
        <h1 className={style.title}>Photoeditzone is your virtual photo editing studio</h1>
        <p className={style.text}>
          <span>
          Transfer your pictures and get them back in hours, pixel awesome and prepared to sell
          </span> 
           - the size you want, the configuration you want. You don&apos;t need to consider it.
        </p>
        <div className={style.img_wrapper}>
            <div className="row">
                {
                    PathIsYourVirtualData.map((data, index) =>  <div key={index} className="col-6 p-0 col-md-3">
                    <div className={style.img_container}>
                    <Image src="/service/service-violet.png" alt="" layout='fill' className={style.img}  />
                    </div>
                </div>)
                }
               
            </div>
        </div>
      </article>
    </section>
  );
}

export default PathIsYourVertualServices;
