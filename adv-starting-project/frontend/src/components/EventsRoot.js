import { Fragment } from "react";
import {Outlet} from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'

const EventRootLayout = ()=>{
   return (
    <Fragment>
        <EventsNavigation/>
        <Outlet/>
    </Fragment>
   )
}
export default EventRootLayout;