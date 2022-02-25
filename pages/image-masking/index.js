import { useContext, useEffect } from "react";
import { MenuContext } from "./../_app";
import Head from "next/head";
import {
  imageMaskingData1,
  imageMaskingData2,
  imageMaskingData3,
} from "./../../data/imageMaskingData";
import ServiceBanner1 from "./../../components/singleService/ServiceBanner1";
import ServiceBanner2 from "./../../components/singleService/ServiceBanner2";
import ServiceBanner3 from "./../../components/singleService/ServiceBanner3";
import ImageMaskingServiceFaq from './../../components/ImageMasking/ImageMaskingServiceFaq';
import WhyPhotographersAndEcommerce from './../../components/singleService/WhyPhotographersAndEcommerce';
import Home_HowItWorks from './../../components/home/Home_HowItWorks';
import DontHaveToDoEeverything from './../../components/home/DontHaveToDoEeverything/DontHaveToDoEeverything';
import TheyTrustUsSlider from './../../components/Common/TheyTrustUsSlider/TheyTrustUsSlider';
import { dontHaveDoEveryThingData } from './../../data/HomePageData';

function Index() {
  const { showMenu, setShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setShowMenu(false);
  }, []);
  return (
    <>
      <Head>
        <title>Best Image Masking Service | Photoeditzone</title>
        <meta
          name="description"
          content="Worried about removing critical edges from an image? No worries. Use the professionalImage Masking Servicefrom photoedizone and get professional-looking images! "
        />
      </Head>
      <ServiceBanner1 data={imageMaskingData1} />
      <ServiceBanner2 data={imageMaskingData2} />
      <ServiceBanner3 data={imageMaskingData3} />
      <ImageMaskingServiceFaq />
      <WhyPhotographersAndEcommerce />
      <Home_HowItWorks />
      <DontHaveToDoEeverything
        title="How to know if outsourced clipping path services are right for you"
        subtitle="You don't have to do everything yourself. Outsourced clipping path services are ideal if you are ..."
        datas={dontHaveDoEveryThingData}
      />
      <TheyTrustUsSlider />
    </>
  );
}

export default Index;


