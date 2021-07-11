import NewMeetupForm from "../components/meetup/NewMeetupForm";

/*
Data is posted on firebase using deepelegant99
*/

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://meetup-react-ce1e2-default-rtdb.firebaseio.com//meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>Add Meetup Events</h1>

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
