import { Fragment } from "react";
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";

import { useRouter } from "next/router";

function NewMeetup (){
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData){

        const response = await fetch("/api/new-meetup",{
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers:{
                "Content-Type": "application/json"
            }
        });
        console.log(enteredMeetupData)

        const data = await response.json();
        console.log(data);
       
        router.push('/')
    }
    return <Fragment>
        <Head>
            <title>Add a New Meetup</title>
            <meta name="description" content="Add your own meetups and create amazing networks opportunities"/>
        </Head>
     <NewMeetupForm onAddMeetup={addMeetupHandler}/>   
    </Fragment>
    
}

export default NewMeetup;