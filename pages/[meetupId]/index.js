"use client";

import MeetUpDetails from "@/components/meetups/MeetUpDetails";
import { BASE_URL } from "@/constants";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const ShowDetailsIdHandler = (props) => {
  return (
    <Fragment>
    <Head>
      <title>{props.meetupDetails.title}</title>
      <meta name={props.meetupDetails.title} content={props.meetupDetails.description}/>
    </Head>
      <MeetUpDetails
        image={props.meetupDetails.image}
        title={props.meetupDetails.title}
        address={props.meetupDetails.address}
        description={props.meetupDetails.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(BASE_URL);
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(BASE_URL);
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupDetails: {
        id: meetups._id.toString(),
        title: meetups.title,
        description: meetups.description,
        address: meetups.address,
        image: meetups.image,
      },
    },
    revalidate: 10,
  };
}

export default ShowDetailsIdHandler;
