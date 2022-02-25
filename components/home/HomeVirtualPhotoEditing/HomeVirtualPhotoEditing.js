import style from "../../../styles/Home/HomeVirtualPhotoEditing.module.css";
import Image from "next/image";
import HomeVirtualPhotoEditingCont from './HomeVirtualPhotoEditingCont';

function HomeVirtualPhotoEditing() {
  return (
    <section className={style.section}>
      <article className="container">
        <div className="row">
          <div className={`col-md-6 ${style.image_area}`}>
            <div>
              <div>
                <div className="next-img-container">
                  <Image
                    src="/home/home-studio.png"
                    alt="Test"
                    layout="fill"
                    className="next-image"
                  />
                </div>
              </div>
              <div className="d-block d-md-none">
             <HomeVirtualPhotoEditingCont />
             </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={style.text_section}>
              <h2>We Are Your One Stop Clipping Path Service Solution</h2>
              <h3>
              When managing a website or any online business, you can’t just look after one side of the business. You have to manage databases, employees, product listing, storehouse, and of course graphic designers. 
              </h3>
             <div className="d-none d-md-block">
             <HomeVirtualPhotoEditingCont />
             </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomeVirtualPhotoEditing;
