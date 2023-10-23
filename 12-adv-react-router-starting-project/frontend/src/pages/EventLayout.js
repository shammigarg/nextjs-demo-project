import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventLayout (){
    return <>
    <EventsNavigation/>
    <main>
       <Outlet/>
    </main>

    </>
}
export default EventLayout;