import style from "../../styles/ClippingPath/ClippingPathServiceFaq.module.css"
import ServiceFaq from './../Common/ServiceFaq/ServiceFaq';
import LeftTextRightImgWithTitle from './../Common/ServiceFaq/LeftTextRightImgWithTitle';
import ImgShowCaseServiceFaq from './../Common/ServiceFaq/ImgShowCaseServiceFaq';
import { clippingPathServiceFaqData } from "../../data/clippingPathData";


function ClippingPathServiceFaq() {
  return (
    <section className={style.bg}>
      <div className="container">
      <div className={style.section}>
        {
          clippingPathServiceFaqData.map((data, index) => <ServiceFaq key={index} data={data}/>)
        }      
      </div>
      </div>

    </section>
  )
}

export default ClippingPathServiceFaq