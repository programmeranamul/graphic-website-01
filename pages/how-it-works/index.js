import HowSimpleWay from "../../components/HowItWorks/HowSimpleWay/HowSimpleWay";
import { useContext, useEffect } from "react";
import { MenuContext } from "../_app";
import HowSteps from './../../components/HowItWorks/HowSteps/HowSteps';
import PixelPerfectGuarantee from './../../components/HowItWorks/PixelPerfectGuarantee/PixelPerfectGuarantee';
import HowMostPopular from './../../components/HowItWorks/HowMostPopular/HowMostPopular';
import TheyTrustUsSlider from './../../components/Common/TheyTrustUsSlider/TheyTrustUsSlider';
import DontHaveToDoEeverything from './../../components/home/DontHaveToDoEeverything/DontHaveToDoEeverything';
import { dontHaveDoEveryThingData } from './../../data/HomePageData';



function Index() {
  //hide menu when render new page
  const { showMenu, setShowMenu } = useContext(MenuContext);  
  useEffect(() => {
    setShowMenu(false);
  }, [setShowMenu]);

  return (
    <>
      <HowSimpleWay />
      <HowSteps />
      <PixelPerfectGuarantee />
      <HowMostPopular />
      <DontHaveToDoEeverything
        title="Path is perfect for you"
        subtitle="You don’t have to do everything yourself. Outsourced clipping path services are ideal if you are..."
        datas={dontHaveDoEveryThingData}
      />
      <TheyTrustUsSlider />
    </>
  );
}

export default Index;
