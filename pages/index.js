"use client";

import MeetupList from "@/components/meetups/MeetupList";
import { BASE_URL } from "@/constants";
import { MongoClient } from "mongodb";

// const Data = [
//   {
//     id: "m1",
//     image:
//       "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "A first meet-up",
//     address: "ABCD, 123456 New Wales",
//     description: 'Meeting for the first time'
//   },
//   {
//     id: "m2",
//     image:
//       "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "A second meet-up",
//     address: "A2Z, Texas 12112",
//     description: 'Meeting for the second time'
//   },
//   {
//     id: "m3",
//     image:
//       "https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "A third meet-up",
//     address: "M4, 21404 New York",
//     description: 'Meeting for the third time'
//   },
// ];
const HomePage = (props) => {
  
  return (
      <MeetupList meetups={props.meetups} />
  );
};

export async function getStaticProps(){

  const client = await MongoClient.connect(BASE_URL);
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find().toArray();
  client.close();
  
  return {
    props:{
      meetups: meetups.map((meetup)=>({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  }
}
export default HomePage;
