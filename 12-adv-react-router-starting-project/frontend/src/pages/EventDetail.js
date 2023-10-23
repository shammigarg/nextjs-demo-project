import { useRouteLoaderData, Link, json, redirect, Await, defer} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventDetailPage (){
    const {event, events} = useRouteLoaderData('event-detail');
    return <>
    <Suspense fallback={<p style={{textAlign:"center"}}>Loading</p>}>
    <Await resolve={event}>
        {(loadEvent)=><EventItem event={loadEvent}/>}
    </Await>
    </Suspense>
    <Suspense fallback={<p style={{textAlign:"center"}}>Loading</p>}>
    <Await resolve={events}>
        {loadEvents => <EventsList events={loadEvents}/>}
    </Await>
    </Suspense>

    
    {/* <Link to=".." relative="path" >Back</Link> */}
    </>
}

export default EventDetailPage;

async function loadEvents(){
    const response = await fetch('http://localhost:8080/events');
  
    if (!response.ok) {
      // return {isError: true, message: "Could not fetch the data"}
      // throw new Response (JSON.stringify({message: "Could not fetch the data"}), {
      //   status : 500})
      throw json({message: "Could not fetch the data"}, {status: 500})
  
    } else {
      const resData = await response.json();
      return resData.events;
    }
      
  } 

  async function loadEvent(id){
     const response = await fetch('http://localhost:8080/events/' + id)

    if (!response.ok){
        throw json({message:"Could not fetch detail for selected event!" }, {status: 500})

    } else {
        const resData = await response.json();
      return resData.event;
    }
  }

export async function loader({request, params}){
    const id = params.eventId;
    return defer({
        event: await loadEvent(id),
        events: loadEvents()
    })
   

}


export async function action({request, params}){
    const eventId = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method
    });

    if (!response.ok){
        throw json({message: "Could not delete the event"}, {status:500})
    } else {
        return redirect("/events")
    }

}