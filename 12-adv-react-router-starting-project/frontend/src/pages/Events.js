
import { useLoaderData, json} from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
   const data = useLoaderData();
  //  if (data.isError){
  //   return data.message;
  //  }
   const events = data.events;
 
  return (
    <>
      {<EventsList events={events} />}
    </>
  );
}

export default EventsPage;

export async function loader(){
   
        const response = await fetch('http://localhost:8080/events');

        if (!response.ok) {
          // return {isError: true, message: "Could not fetch the data"}
          // throw new Response (JSON.stringify({message: "Could not fetch the data"}), {
          //   status : 500})
          throw json({message: "Could not fetch the data"}, {status: 500})

        } 
          return response;

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