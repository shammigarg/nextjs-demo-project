import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Header from '../Header.jsx';

import {useMutation, useQuery} from "@tanstack/react-query";

import { fetchEvent, deleteEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {

  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const {data, isPending, isError, error} = useQuery({
    queryKey:['events', params.id],
    queryFn: ({signal})=>fetchEvent({signal, id:params.id}),
  })

  const {mutate, isPending: isPendingDelete, isError: IsErrorDelete, error: errorDelete} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: ()=>{
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: "none"
      });
      navigate('/events');
    }
  })

  const startDeletingHandler = ()=>{
    setIsDeleting(true);
  }

  const stopDeletingHandler = ()=>{
   setIsDeleting(false)
  }


  const deleteHandler = ()=>{
    mutate(({id: params.id})) 
  }

let content;

if (isPending){
  content = <div>
    <p>Loading please wait..</p>
  </div>
}

if(isError){
<ErrorBlock title="An error occured" message={error.info?.message || "Unable to fetch event detail"}/>
}

if (data){
  const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "short",
    year:"numeric"

  })
  content = <>
  <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={startDeletingHandler}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
  </>
}




  return (
    <>
    {isDeleting && <Modal onClose={stopDeletingHandler}>
      <h2> Are you sure?</h2>
      <p>Do you really want to delete this event. This action cannot be undone.</p>
      <div className='form-actions'>
        {isPendingDelete && <p>Deleting please wait..</p>}
        {!isPendingDelete && <>
        <button className='button-text' onClick={stopDeletingHandler}>Cancel</button>
        <button className='button' onClick={deleteHandler}>Delete</button></>}
      </div>
      {IsErrorDelete && <ErrorBlock title="Failed to delete event" message={errorDelete.info?.message || "Failed to delete event"}/>}
    </Modal>}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {content}
      </article>
    </>
  );                    
}
