import { useContext, useEffect } from "react";

import Head from "next/head";
import { MenuContext } from "./../_app";
import HelpForm from "./../../components/help/helpForm";
import ContactType from './../../components/help/ContactType';
import CheckOurHelp from './../../components/help/CheckOurHelp';
import ConnectWithUs from './../../components/help/ConnectWithUs';

function Index() {
  //hide menu when render new page
  const { showMenu, setShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setShowMenu(false);
  }, [setShowMenu]);
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HelpForm />
      <ContactType />
      <CheckOurHelp />
      <ConnectWithUs />
    </>
  );
}

export default Index;
