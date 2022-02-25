import { useContext } from "react";
import { MenuContext } from "./_app";
import Home_HowItWorks from "./../components/home/Home_HowItWorks";
import FiveStarReviews from "./../components/Common/FiveStarReviews/FiveStarReviews";
import TestimonialSection from "./../components/home/TestimonialSection/TestimonialSection";
import HomeSomeFetaures from "./../components/home/HomeSomeFetaures/HomeSomeFetaures";
import ServiceInHome from "./../components/home/SereviceInHome/ServiceInHome";
import DontHaveToDoEeverything from "./../components/home/DontHaveToDoEeverything/DontHaveToDoEeverything";
import HomeVirtualPhotoEditing from "./../components/home/HomeVirtualPhotoEditing/HomeVirtualPhotoEditing";
import WakeUp from "../components/home/WakeUp/WakeUp";
import { dontHaveDoEveryThingData } from "./../data/HomePageData";
import { HomeSomeFetauresData } from "./../components/home/HomeSomeFetaures/HomeSomeFetauresData";
import Head from "next/head";
import { pricePageFaq } from './../data/pricePageData';

function Index() {
  const { showMenu, setShowMenu } = useContext(MenuContext);

  return (
    <>
      <Head>
        <title>Best Clipping Path Service Provider Company</title>
        <meta
          name="description"
          content="Looking for the Best clipping path service provider company? Then, Photoeditzone is the name to speak of. We’ll provide all image-editing related services."
        />
      </Head>
      <WakeUp />
      <HomeVirtualPhotoEditing />
      <ServiceInHome />
      <HomeSomeFetaures backgroundColor="#fff" datas={HomeSomeFetauresData} />
      <FiveStarReviews />
      <Home_HowItWorks />
      {/* <TestimonialSection /> */}
      <DontHaveToDoEeverything
        title="How to Choose the Best Clipping Path Service Provider"
        subtitle="Judgment us following this system..."
        datas={dontHaveDoEveryThingData}
      />
    </>
  );
}

export default Index;
