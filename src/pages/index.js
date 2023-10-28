import { MongoClient } from "mongodb";
import { Fragment, useEffect, useState } from "react";
import MeetupList from "../../components/meetups/MeetupList";
import Head from "next/head";

// const DUMMY_MEETUPS = [
//     {
//         id: "m1",
//         image: 'https://cdn.vox-cdn.com/thumbor/CRqJoRaVIKgea8ySXvbzJm19n7A=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13335435/NorthBroadSt_Landscape_1_M.Edlow.jpg',
//         title: "A first Meetup",
//         address: "Test address 5",
//         description:"This is a first Meetup!"
//     },
//     {
//         id: "m2",
//         image: 'https://cdn.vox-cdn.com/thumbor/CRqJoRaVIKgea8ySXvbzJm19n7A=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13335435/NorthBroadSt_Landscape_1_M.Edlow.jpg',
//         title: "A second Meetup",
//         address: "Test address 2",
//         description:"This is a second Meetup!"
//     }
// ]

function HomePage(props){
    // const [loadedMeetups, setLoadedMeetups] = useState([])

    // useEffect(()=>{
    //     setLoadedMeetups(DUMMY_MEETUPS)

    // }, [])

    // return <MeetupList meetups={loadedMeetups}/>
    return <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta name="description" content="Browse a list of highly active React Meetups"/>
        </Head>
     <MeetupList meetups={props.meetups}/>   
    </Fragment>
    
}

export default HomePage;




export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb+srv://gargshammi:WWP4r68kOUtA0Nth@cluster0.8a2u8ul.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupCollection = db.collection('meetups');

   const meetups =  await meetupCollection.find().toArray()

   client.close()


    return {
        props: {
            meetups: meetups.map(meetup => ({
                title : meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
                
            }))
        },
        // revalidate: 1
    }   

}

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         }
//     }

// }