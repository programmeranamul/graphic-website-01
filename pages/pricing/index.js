import { MenuContext } from "./../_app";
import { useContext, useEffect } from "react";
import PriceCard from "./../../components/pricing/PriceCard";
import GetQuick from './../../components/pricing/GetQuick';
import HomeSomeFetaures from './../../components/home/HomeSomeFetaures/HomeSomeFetaures';
import { saveTimeData } from "../../data/pricePageData";
import GiveUsShot from './../../components/services/GiveUsShot';
import Faq from './../../components/Common/FAQ/Faq';

function Index() {
  //hide menu when render new page
  const { showMenu, setShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setShowMenu(false);
  }, [setShowMenu]);
  return (
    <>
      <PriceCard />
      <GetQuick />
      <HomeSomeFetaures backgroundColor="#f8f6fa" datas={saveTimeData} pt0={true} bt0={true}/>
      <GiveUsShot />
      <Faq />
    </>
  );
}

export default Index;
