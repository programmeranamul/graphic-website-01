import Home_HowItWorks from "./../../components/home/Home_HowItWorks";
import DontHaveToDoEeverything from "./../../components/home/DontHaveToDoEeverything/DontHaveToDoEeverything";
import { dontHaveDoEveryThingData } from "./../../data/HomePageData";
import TheyTrustUsSlider from "./../../components/Common/TheyTrustUsSlider/TheyTrustUsSlider";
import WhyPhotographersAndEcommerce from "./../../components/singleService/WhyPhotographersAndEcommerce";
import ServiceBanner1 from "./../../components/singleService/ServiceBanner1";
import ServiceBanner2 from "./../../components/singleService/ServiceBanner2";
import ServiceBanner3 from "./../../components/singleService/ServiceBanner3";
import SingleFaq from "./../../components/Common/FAQ/SingleFaq";
import { pricePageFaq } from "./../../data/pricePageData";
import { MenuContext } from "./../_app";
import { useContext, useEffect } from "react";
import {
  clippingPathBannerData1,
  clippingPathBannerData2,
  clippingPathBannerData3,
} from "./../../data/clippingPathData";
import LeftContentRightImgFaq from "./../../components/Common/LeftContentRightImgFaq/LeftContentRightImgFaq";
import ServiceFaq from "./../../components/Common/ServiceFaq/ServiceFaq";
import ClippingPathServiceFaq from "./../../components/clippingPath/ClippingPathServiceFaq";
import Head from "next/head";

function Index() {
  //hide menu when render new page
  const { showMenu, setShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setShowMenu(false);
  }, [setShowMenu]);
  return (
    <>
      <Head>
        <title>Best Clipping Path Service Provider – Photoeditzone</title>
        <meta
          name="description"
          content="Photoeditzone is the best Clipping Path Service Provider for providing top-notch clipped images, maintaining deadlines, and affordable pricing! Contact us today! "
        />
      </Head>
      <ServiceBanner1 data={clippingPathBannerData1} />
      <ServiceBanner2 data={clippingPathBannerData2} />
      <ServiceBanner3 data={clippingPathBannerData3} />
      <ClippingPathServiceFaq />

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
