"use client";

import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { Fragment } from "react";

const NewMeetUp = () => {
  const AddingNewMeetUpHandler = async (enteredData) => {
    const response = await fetch("/api/new-meetups", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Fragment>
      <h1>New MeetUp</h1>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Browse a list of highly active meetups"
        />
      </Head>
      <NewMeetupForm onAddMeetup={AddingNewMeetUpHandler} />
    </Fragment>
  );
};
export default NewMeetUp;
