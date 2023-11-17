import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage =()=>{
  return(
    <Fragment>
    <MainNavigation/>
    <main>
     <h1> An Error Occurred!!</h1>
     <p>Could not find this page!</p>
    </main>
    </Fragment>
  )
}
export default ErrorPage;