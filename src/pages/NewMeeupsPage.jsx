import React from "react"
import { useNavigate } from "react-router-dom"

import NewMeetupForm from "../meetups/NewMeetupForm"

const NewMeeupsPage = () => {
  const history = useNavigate()

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-meetup-app-dffa7-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history("/")
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeeupsPage
