import NewMeetupForm from "../components/meetup/NewMeetupForm";
import { useHistory } from "react-router-dom";

/*
Data is posted on firebase using deepelegant99
*/



function NewMeetupPage() {

  const history = useHistory();
  
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
    ).then(()=>{
      history.replace('/');
    })
  }

  return (
    <section>
      <h1>Add Meetup Events</h1>

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
