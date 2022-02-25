import style from "../../styles/service/all_our_photo_editing_services.module.css";
import Image from "next/image";
import Link from "next/link";
import { allOurPhotoEditingServicesData } from './../../data/servicePageData';

function AllOurPhotoEditingServices() {
  return (
    <section className={style.section}>
      <article className="container">
        <h2 className={style.title}>All our photo-editing services</h2>
        <div className="row w-100 mx-auto">
          {
            allOurPhotoEditingServicesData.map((data, index) => <div key={index} className="col-md-6 mb-4">
            <div>
              <div className={style.single_card}>
             
                  <div className={style.image_container}>
                    <Image
                      src={data.imgSource}
                      alt={data.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={style.content_area}>
                    <h3 className={style.card_title}>{data.title}</h3>
                    <p className={style.text}>
                      {data.text}
                    </p>
                    <p className={style.price}>Starting at <span className={style.amount}>{data.price} ¢</span> per image</p>
                    <div className={style.action}>
                    <Link href="/">
                      <a className={style.view_details}>VIEW DETAILS</a>
                    </Link>
                    <Link href="/">
                      <a className={style.order_now}>ORDER NOW</a>
                    </Link>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>)
          }
          
        </div>
      </article>
    </section>
  );
}

export default AllOurPhotoEditingServices;
