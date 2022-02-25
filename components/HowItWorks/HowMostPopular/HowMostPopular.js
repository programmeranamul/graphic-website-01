import style from "../../../styles/HowItWorks/HowMostPopular.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { CgArrowRight, CgArrowLeft } from "react-icons/cg";

import "slick-carousel/slick/slick-theme.css";
import HowSlide from './HowSlide';


const howSliderOneData = [
  {
    title: "Clipping Path",
    imgSrc: "/home/product-1-red-shoe_255x192.png",
    text1:"Hand-drawn section ways give you fresh, clean patterns that you can place on any foundation.",
    text2:"Put your images on any background color or setting",
    price:"0.29¢",
    defaultClass:"how_slide1_blue",
    destination:"/"
  },
  {
    title: "Background Removal",
    imgSrc: "/home/product-8_255x192.png",
    text1:"Make item photographs fly with a spotless white (or some other shading you pick) foundation.",
    text2:"Put your images on any background color or setting",
    price:"0.29¢",
    defaultClass:"how_slide1_beguni",
    destination:"/"
  },
  {
    title: "Image Masking",
    imgSrc: "/home/product-9_255x192.png",
    text1:"For more perplexing shots (like anything including hair or fur), picture veiling provides you with that additional degree of accuracy, for patterns that look totally normal.",
    text2:"Put your images on any background color or setting",
    price:"0.99¢",
    defaultClass:"how_slide1_yellow",
    destination:"/"
  },
  {
    title: "Shadow",
    imgSrc: "/home/product-10_255x192.png",
    text1:"Regular looking shadows make items look more practical - and create more deals. Add profundity and make your pictures all the more outwardly engaging.",
    text2:"Put your images on any background color or setting",
    price:"0.23¢",
    defaultClass:"how_slide1_red",
    destination:"/"
  },
  {
    title: "Ghost Mannequin",
    imgSrc: "/home/product-3_255x192.png",
    text1:"Eliminate life sized models or models to exhibit the regular fit and wrap of attire, while as yet maintaining the attention on your items.",
    text2:"Put your images on any background color or setting",
    price:"0.79¢",
    defaultClass:"how_slide1_blue",
    destination:"/"
  },
  {
    title: "Color Change",
    imgSrc: "/home/product-11_255x192.png",
    text1:"Show consistent with life tones and limit gets back from clients who are disheartened their things don't match the photograph - without shooting each shade. ",
    text2:"Put your images on any background color or setting",
    price:"0.89¢",
    defaultClass:"how_slide1_beguni",
    destination:"/"
  },
  {
    title: "Photo Retouching",
    imgSrc: "/home/product-camera-yellow_255x192.png",
    text1:"Have the ideal chance, even sometime later. Right defects or flaws, and make each component of your picture sparkle.",
    text2:"Put your images on any background color or setting",
    price:"0.59¢",
    defaultClass:"how_slide1_yellow",
    destination:"/"
  },
  {
    title: "Multi-clipping Path",
    imgSrc: "/home/product-bicycle-red_255x192.png",
    text1:"Select different regions inside your picture so they can be altered independently.",
    text2:"Put your images on any background color or setting",
    price:"1.09¢",
    defaultClass:"how_slide1_red",
    destination:"/"
  },
  {
    title: "Vector Conversion",
    imgSrc: "/home/service-vector-service-header_255x192.png",
    text1:"Convert images to vector files that can scale to any size without a loss of fine detail or quality.",
    text2:"Put your images on any background color or setting",
    price:"0.23¢",
    defaultClass:"how_slide1_blue",
    destination:"/"
  },
]
  

function HowMostPopular() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CgArrowLeft />,
    nextArrow: <CgArrowRight />,
  };
  return (
    <section className={style.section}>
      <article className="container">
        <h2 className={style.main_title}>
          Our <strong>most popular</strong> photo-editing services
        </h2>
        <div className={style.slider_main_wrapper}>
        <Slider {...settings} className="how_slider_1"> 
        {
          howSliderOneData.map((data, index) => <div key={index}>
          <HowSlide data={data} />
         </div>)
        }
        
        </Slider>
        </div>
      </article>
    </section>
  );
}

export default HowMostPopular;
