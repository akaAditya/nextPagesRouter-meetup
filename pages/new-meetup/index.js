"use client";

import NewMeetupForm from "@/components/meetups/NewMeetupForm";

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
    <>
      <h1>NewMeetUp</h1>
      <NewMeetupForm onAddMeetup={AddingNewMeetUpHandler} />
    </>
  );
};
export default NewMeetUp;
