
import { useLoaderData, json, defer, Await} from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
  //  const data = useLoaderData();
  //  const events = data.events;
  // return (
  //   <>
  //     {<EventsList events={events} />}
  //   </>
  // );
  const {events} = useLoaderData();
  return <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
  <Await resolve={events}>
    {loadevents => <EventsList events={loadevents}/>}
  </Await>
  </Suspense>
}


export default EventsPage;

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

export function loader(){
   return defer({
      events: loadEvents(),
    });
}



// import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [
//     {id: "e1", title: "Event-1"},
//     {id: "e2", title: "Event-2"},
//     {id: "e3", title: "Event-3"},
//     {id: "e4", title: "Event-4"},
//     {id: "e5", title: "Event-5"},

// ]

// function EventsPage (){
//     return <>
//     <h1> Events Page </h1>
//     <ul>
//         {DUMMY_EVENTS.map(event => 
//         <li key={event.id}>
//             <Link to={event.id}>{event.title}</Link>
//         </li>)}
//     </ul>
//     </>
    

// }

// export default EventsPage;