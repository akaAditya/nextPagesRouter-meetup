"use client";

import MeetupItem from "@/components/meetups/MeetupItem";
import { Fragment } from "react";

const ShowDetailsIdHandler = (props) => {
  return (
    <Fragment>
      <MeetupItem
        image="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title='A first meet-up'
        address="ABCD, 123 New Wales"
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupDetails: {
        id: meetupId,
        image:
          "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "A first meet-up",
        address: "ABCD, 123 New Wales",
      },
    },
    revalidate: 10,
  };
}

export default ShowDetailsIdHandler;
