import { Fragment } from "react";
import {Outlet} from 'react-router-dom'
import MainNavigation from "../components/MainNavigation";
const RootPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet/>
      </main>
    </Fragment>
  );
};

export default RootPage;
