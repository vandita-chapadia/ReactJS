import { Fragment } from 'react';
import {useParams} from 'react-router-dom'
const EventDetailPage =()=>{
    const param= useParams();
    return (
        <Fragment>
            <h1>Event Detail Page</h1>
            <p>Event ID:{param.eventId}</p>
        </Fragment>
    )
}
export default EventDetailPage;