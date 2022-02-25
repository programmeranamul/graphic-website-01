
import { useContext, useEffect } from 'react';
import { MenuContext } from './../_app';
import PixelPerfectGuarantee from './../../components/HowItWorks/PixelPerfectGuarantee/PixelPerfectGuarantee';
import HowMostPopular from './../../components/HowItWorks/HowMostPopular/HowMostPopular';
import TheyTrustUsSlider from './../../components/Common/TheyTrustUsSlider/TheyTrustUsSlider';
import AllOurPhotoEditingServices from './../../components/services/AllOurPhotoEditingServices';
import PathIsYourVertualServices from './../../components/services/PathIsYourVertualServices';

function Index() {

     //hide menu when render new page
  const { showMenu, setShowMenu } = useContext(MenuContext);  
  useEffect(() => {
    setShowMenu(false);
  }, [setShowMenu]);
  return <>
  {/* <PixelPerfectGuarantee /> */}
  <PathIsYourVertualServices />
  <HowMostPopular />
  <AllOurPhotoEditingServices />
  <TheyTrustUsSlider />
  </>;
}

export default Index;
