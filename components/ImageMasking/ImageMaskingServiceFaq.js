import React from 'react'
import { imageMaskingServiceFaqData } from '../../data/imageMaskingData';
import style from '../../styles/ClippingPath/ClippingPathServiceFaq.module.css'
import ServiceFaq from './../Common/ServiceFaq/ServiceFaq';

function ImageMaskingServiceFaq() {
  return (
    <section className={style.bg}>
      <div className="container">
      <div className={style.section}>
        {
          imageMaskingServiceFaqData.map((data, index) => <ServiceFaq key={index} data={data}/>)
        }      
      </div>
      </div>

    </section>
  )
}

export default ImageMaskingServiceFaq